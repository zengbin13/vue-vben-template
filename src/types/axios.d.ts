export interface RequestOptions {
  // 消息提示类型
  errorMessageMode?: ErrorMessageMode;
  // 忽略重复请求
  ignoreCancelToken?: boolean;
  //额外属性
  [propName: string]: any;
}

export type ErrorMessageMode = 'message' | 'modal' | 'none';

/**
 * @description: 后端接口通用结构
 */
export interface Result<T = any> {
  code: number;
  type: 'success' | 'error' | 'warning';
  message: string;
  result: T;
}
