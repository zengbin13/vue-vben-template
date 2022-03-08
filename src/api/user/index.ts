import http from '@/utils/http';
import { LoginParams } from './model';

export function loginApi(data: LoginParams) {
  return http.post('/api/login', data);
}
