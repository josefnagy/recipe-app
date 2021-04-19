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
