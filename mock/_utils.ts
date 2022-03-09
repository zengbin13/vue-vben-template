export interface requestParams {
  method: string;
  body: any;
  headers?: { authorization?: string };
  query: any;
}

/**
 * @description: 获取请求头中是否携带token 使用authorization验证
 */
export function getRequestToken({ headers }: requestParams): string | undefined {
  return headers.authorization;
}

/**
 * @description: 生成固定格式的错误响应
 */
export function resultError(message = 'Request failed', { code = 1, result = null } = {}) {
  return {
    code,
    result,
    message,
    type: 'error',
  };
}

/**
 * @description: 生成固定格式的成功响应
 */
export function resultSuccess(result = {}, message = 'success') {
  return {
    code: 0,
    result,
    message,
    type: 'ok',
  };
}
