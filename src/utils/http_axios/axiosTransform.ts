import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { CreateAxiosOptions, RequestOptions, Result } from './axiosOptions';

// 预处理函数 拦截器钩子 全局错误处理
export abstract class AxiosTransform {
  /**
   * @description: 请求成功处理 - 处理请求数据。如果数据不是预期格式，可直接抛出错误
   */
  transformRequestData?: (res: AxiosResponse<Result>, options: RequestOptions) => any;

  /**
   * @description: 请求失败处理
   */
  requestCatchHook?: (e: Error, options: RequestOptions) => Promise<any>;

  /**
   * @description: 请求之前的拦截器 - 可处理配置
   */
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;

  /**
   * @description: 请求之后的拦截器 - 可处理结果
   */

  responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>;

  /**
   * @description: 请求之前的拦截器错误处理
   */
  requestInterceptorsCatch?: (error: Error) => void;

  /**
   * @description: 请求之后的拦截器错误处理
   */
  responseInterceptorsCatch?: (error: Error) => void;
}
