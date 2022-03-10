import { MyAxios, AxiosTransform } from './myAxios';

import { useGlobSetting } from '@/hooks/setting';
const globSetting = useGlobSetting();

import { useMessage } from '@/hooks/web/useMessage';
const { createErrorModal } = useMessage();
import { ResultEnum } from '@/enums/httpEnum';
import { Result } from './axiosOptions';

const transform: AxiosTransform = {
  responseInterceptors: res => {
    return res;
  },
  transformRequestData: (res, options) => {
    //return result; 中断当前请求直接抛出异常
    const { data } = res;
    const { code, message } = data;

    if (code == ResultEnum.ERROR && options.errorMessageMode == 'modal') {
      createErrorModal(message);
      // throw Error(message);
    }
    return data as Result;
  },
};

const service = new MyAxios({
  baseURL: globSetting.apiUrl,
  timeout: 6000,
  transform,
  requestOptions: {
    errorMessageMode: 'message',
  },
});

export default service;
