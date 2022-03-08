import axios from 'axios';
import type { AxiosInstance } from 'axios';
import { useGlobSetting } from '@/hooks/setting';
const globSetting = useGlobSetting();

const service: AxiosInstance = axios.create({
  baseURL: globSetting.apiUrl,
  timeout: 6000,
});

service.interceptors.request.use(
  config => {
    //请求拦截器处理
    return config;
  },
  err => {
    //请求出错
    return Promise.reject(err);
  }
);
service.interceptors.response.use(
  response => {
    //响应拦截器处理
    const res = response.data;
    return res;
  },
  err => {
    //响应错误处理
    return Promise.reject(err);
  }
);

export default service;
