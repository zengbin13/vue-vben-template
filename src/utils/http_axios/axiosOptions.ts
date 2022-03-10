import type { AxiosRequestConfig } from 'axios';
import type { AxiosTransform } from './axiosTransform';

// 错误弹窗类型
export type ErrorMessageMode = 'message' | 'modal' | 'none';

// 请求自定义配置
export interface RequestOptions {
  // 消息提示类型
  errorMessageMode?: ErrorMessageMode;
  // 忽略重复请求
  ignoreCancelToken?: boolean;
}

// 创建axios实例的配置 包含 axios配置 / 请求自定义配置 / 拦截器钩子函数
export interface CreateAxiosOptions extends AxiosRequestConfig {
  requestOptions?: RequestOptions;
  // 数据处理方式，见下方说明
  transform?: AxiosTransform;
}

/**
 * @description: 后端接口通用结构
 */
export interface Result<T = any> {
  code: number;
  type: 'success' | 'error' | 'warning';
  message: string;
  result: T;
}
