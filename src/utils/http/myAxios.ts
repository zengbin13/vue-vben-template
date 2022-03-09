import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse, AxiosInstance, AxiosError } from 'axios';
import { RequestOptions, CreateAxiosOptions, Result } from './axiosOptions';
import { AxiosTransform } from './axiosTransform';

export { AxiosTransform };

export class MyAxios {
  // options 集合 AxiosRequestConfig RequestOptions AxiosTransform 的配置
  private options: CreateAxiosOptions;
  // axios 实例
  private readonly axiosInstance: AxiosInstance;
  constructor(options: CreateAxiosOptions) {
    this.options = options;
    this.axiosInstance = axios.create(options);
    this.setupInterceptors();
  }
  private getTransform() {
    const { transform } = this.options;
    return transform;
  }
  /**
   * @description: 拦截器配置项
   */
  private setupInterceptors() {
    const transform = this.getTransform();
    if (!transform) return;

    const {
      requestInterceptors,
      requestInterceptorsCatch,
      responseInterceptors,
      responseInterceptorsCatch,
    } = transform;
    // 请求拦截器
    this.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
      if (requestInterceptors) {
        config = requestInterceptors(config);
      }
      return config;
    }, undefined);
    // 请求错误捕获
    requestInterceptorsCatch &&
      this.axiosInstance.interceptors.request.use(undefined, requestInterceptorsCatch);
    // 响应拦截器
    this.axiosInstance.interceptors.response.use((response: AxiosResponse) => {
      if (responseInterceptors) {
        response = responseInterceptors(response);
      }
      return response;
    }, undefined);
    // 响应错误捕获
    responseInterceptorsCatch &&
      this.axiosInstance.interceptors.response.use(undefined, responseInterceptorsCatch);
  }

  /**
   * @description: 请求方法
   */
  request<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    //每个请求的最终请求配置项
    const requestOptions = Object.assign({}, this.options.requestOptions, options);

    const { transformRequestData, requestCatchHook } = this.getTransform() || {};

    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<any, AxiosResponse<Result>>(config)
        .then((res: AxiosResponse<Result>) => {
          //请求接口后结果 - 转换数据
          if (transformRequestData) {
            try {
              const result = transformRequestData(res, requestOptions);
              resolve(result);
            } catch (error) {
              console.error(error);
              reject(error || new Error('transformRequestData error'));
            }
          }
          resolve(res as unknown as Promise<T>);
        })
        .catch((e: Error | AxiosError) => {
          if (requestCatchHook) {
            reject(requestCatchHook(e, requestOptions));
            return;
          }
          reject(e);
        });
    });
  }

  get<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: 'GET' }, options);
  }

  post<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: 'POST' }, options);
  }

  put<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: 'PUT' }, options);
  }

  delete<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: 'DELETE' }, options);
  }
}
