import db, { auth } from '../../api/firebase';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import firebase from 'firebase';
// import { v4 as uuid } from 'uuid';

import history from '../../history';

import {
  AuthState,
  AuthActionTypes,
  SignupCreditials,
  LoginCredentials,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from './types';

export type ThunkResult<R> = ThunkAction<
  R,
  AuthState,
  undefined,
  AuthActionTypes
>;

/**--------------------  SIGNUP ---------------------------- */

export const signup = (
  signupCreditials: SignupCreditials,
): ThunkResult<void> => async (dispatch) => {
  const { email, password } = signupCreditials;

  handleSignup(dispatch);

  await auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log('USER CREATED...');
      handleSignupSuccess(dispatch, userCredential);
    })
    .catch((error) => {
      console.log('error creating user', error);
      handleSignupFail(dispatch, error.code);
    });
};

const handleSignup = (dispatch: Dispatch) => {
  dispatch({ type: SIGNUP });
};

const handleSignupSuccess = (
  dispatch: Dispatch<AuthActionTypes>,
  response: firebase.auth.UserCredential,
) => {
  dispatch({ type: SIGNUP_SUCCESS, payload: response });

  history.push('/');
};

const handleSignupFail = (
  dispatch: Dispatch<AuthActionTypes>,
  response: string,
) => {
  dispatch({ type: SIGNUP_FAIL, payload: response });
};

/**--------------------  LOGIN ---------------------------- */

export const login = (
  loginCredentials: LoginCredentials,
): ThunkResult<void> => async (dispatch) => {
  const { email, password } = loginCredentials;

  handleLogin(dispatch);

  await auth
    .signInWithEmailAndPassword(email, password)
    .then(() => history.push('/'))
    .catch((error) => {
      console.log('error login IN user', error);
      handleLoginFail(dispatch, error.code);
    });
};

const handleLogin = (dispatch: Dispatch) => {
  dispatch({ type: LOGIN });
};

export const setUser = (user: firebase.User): AuthActionTypes => {
  return { type: LOGIN_SUCCESS, payload: user };
};

const handleLoginFail = (
  dispatch: Dispatch<AuthActionTypes>,
  response: string,
) => {
  dispatch({ type: LOGIN_FAIL, payload: response });
};

/**--------------------  LOGOUT ---------------------------- */

export const logout = (): ThunkResult<void> => async (dispatch) => {
  handleLogout(dispatch);

  await auth
    .signOut()
    .then(() => {
      console.log('USER LOGGED OUT...');
      handleLogoutSuccess(dispatch);
    })
    .catch((error) => {
      console.log('error creating user', error);
      handleLogoutFail(dispatch, error.code);
    });
};

const handleLogout = (dispatch: Dispatch) => {
  dispatch({ type: LOGOUT });
};

const handleLogoutSuccess = (dispatch: Dispatch<AuthActionTypes>) => {
  dispatch({ type: LOGOUT_SUCCESS });
  history.push('/');
};

const handleLogoutFail = (
  dispatch: Dispatch<AuthActionTypes>,
  response: string,
) => {
  dispatch({ type: LOGOUT_FAIL, payload: response });
};
