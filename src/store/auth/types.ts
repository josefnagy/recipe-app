import firebase from 'firebase';

export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';

export interface SignupCreditials {
  email: string;
  password: string;
  passwordAgain: string;
}

export interface LoginInfo {
  email: string;
  password: string;
}

interface LoginAction {
  type: typeof LOGIN;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
}

interface LoginFailAction {
  type: typeof LOGIN_FAIL;
  payload: string;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS;
}

interface LogoutFailAction {
  type: typeof LOGOUT_FAIL;
  payload: string;
}

interface LoginAction {
  type: typeof LOGIN;
}
interface SignupAction {
  type: typeof SIGNUP;
}

interface SignupSuccessAction {
  type: typeof SIGNUP_SUCCESS;
  payload: firebase.auth.UserCredential;
}

interface SignupFailAction {
  type: typeof SIGNUP_FAIL;
  payload: string;
}

export interface AuthState {
  user: string | undefined;
  loading: boolean;
  error: string | null;
}

export type AuthActionTypes =
  | SignupAction
  | SignupSuccessAction
  | SignupFailAction
  | LoginAction
  | LoginSuccessAction
  | LoginFailAction
  | LogoutAction
  | LogoutSuccessAction
  | LogoutFailAction;
