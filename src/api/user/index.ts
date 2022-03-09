import http from '@/utils/http';
import { LoginParams } from './model';

export function loginApi(data: LoginParams) {
  return http.post(
    {
      url: '/api/login',
      data,
    },
    {
      errorMessageMode: 'modal',
    }
  );
}
