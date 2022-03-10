import type { AxiosRequestConfig, Canceler } from 'axios';
import axios from 'axios';

// 通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel token
const CancelToken = axios.CancelToken;

export const getPendingUrl = (config: AxiosRequestConfig) => [config.method, config.url].join('&');
// 用于存储每个请求的标识和取消功能
const pendingMap = new Map<string, Canceler>();

export class AxiosCanceler {
  //添加请求
  addPending(config: AxiosRequestConfig) {
    this.removePending(config);
    const url = getPendingUrl(config);
    config.cancelToken =
      config.cancelToken ||
      new CancelToken(cancel => {
        if (pendingMap.has(url)) return;
        pendingMap.set(url, cancel);
      });
  }

  //移除请求
  removePending(config: AxiosRequestConfig) {
    const url = getPendingUrl(config);
    if (pendingMap.has(url)) {
      const cancel = pendingMap.get(url);
      cancel && cancel(url);
      pendingMap.delete(url);
    }
  }
}
