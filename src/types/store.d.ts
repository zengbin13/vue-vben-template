export interface UserInfo {
  username: string;
  userId: string | number;
  roleList: string[];
  avatar: string;
  realname?: '';
}

export interface LoginParams {
  username: string;
  password: string;
}
