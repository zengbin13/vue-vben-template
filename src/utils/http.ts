import axios from 'axios';
import type { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { RequestOptions, Result } from '#/axios';
import { useMessage } from '@/hooks/web/useMessage';
const { createErrorModal } = useMessage();

import { useGlobSetting } from '@/hooks/setting';
const globSetting = useGlobSetting();

const service: AxiosInstance = axios.create({
  baseURL: globSetting.apiUrl,
  timeout: 6000,
});

service.interceptors.request.use(
  (config: AxiosRequestConfig<RequestOptions>) => {
    let options = config.data;
    // 定义错误弹窗类型
    if (!options) options = {};
    if (!options.errorMessageMode) {
      options.errorMessageMode = 'message';
    }

    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse<Result>) => {
    const options: RequestOptions = JSON.parse(response.config.data);
    const { code, message, result } = response.data;
    // 错误消息弹窗
    if (code == 1 && options.errorMessageMode == 'modal') {
      createErrorModal(message);
    }
    return response;
  },
  err => {
    return Promise.reject(err);
  }
);

/**
 * @description: 约束请求的泛型, 重写请求函数
 */
const post: <T = Result, K = RequestOptions>(
  url: string,
  data?: K,
  config?: AxiosRequestConfig<K>
) => Promise<T> = async function (url, data, config) {
  const res = await service.post(url, data, config);
  return res.data;
};

export { post };
export default service;
