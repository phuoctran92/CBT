
import { AppAPIInstance } from '../configApi';
import { FormLogin } from 'models/authentication';
import { API } from 'config/constants';

export const login = async (data: FormLogin): Promise<any> => {
  return AppAPIInstance.post(API.AUTH_USER.LOGIN, data);
};
