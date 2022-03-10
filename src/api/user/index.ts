import { post } from '@/utils/http';
import { LoginParams } from './model';

export function loginApi(data: LoginParams) {
  return post('/api/login', {
    ...data,
    errorMessageMode: 'modal',
  });
}
