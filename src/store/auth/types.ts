export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

interface SignupAction {
  type: typeof SIGNUP;
}

export interface SignupInfo {
  userName: string;
  password: string;
  passwordAgain: string;
}

interface SignupSuccessAction {
  type: typeof SIGNUP_SUCCESS;
  payload: SignupInfo;
}

interface SignupFailAction {
  type: typeof SIGNUP_FAIL;
  payload: string;
}

export type AuthActionTypes = SignupAction;
