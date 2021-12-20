import produce from 'immer';
import {
  AUTH_SET_RESET_PASSWORD,
  AUTH_SET_CHANGED_PASSWORD
} from './actionTypes';
// import { otpToken, initOtpToken } from 'models/authentication';

export interface AuthenticationType {
  isResetPassword: boolean,
  isChangedPassword: boolean
}

const initial: AuthenticationType = {
  isResetPassword: false,
  isChangedPassword: false
};

export const authenticationReducer = (state = initial, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      case AUTH_SET_RESET_PASSWORD: {        
        draft.isResetPassword = action.payload;
        break;
      }
      case AUTH_SET_CHANGED_PASSWORD: {        
        draft.isChangedPassword = action.payload;
        break;
      }
    }
  });

