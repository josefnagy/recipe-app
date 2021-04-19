import {
  AuthState,
  AuthActionTypes,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  CLEAN_ERROR,
} from './types';

const INITIAL_STATE: AuthState = {
  user: undefined,
  loading: false,
  error: null,
};

export const authReducer = (
  state = INITIAL_STATE,
  action: AuthActionTypes,
): AuthState => {
  switch (action.type) {
    case SIGNUP:
    case LOGIN:
    case LOGOUT:
      return { ...state, loading: true };

    case SIGNUP_SUCCESS:
      return { ...state, loading: false };

    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload.uid };

    case LOGOUT_SUCCESS:
      return { ...state, loading: false, user: undefined };

    case SIGNUP_FAIL:
    case LOGIN_FAIL:
    case LOGOUT_FAIL:
      console.log(action.payload);
      return { ...state, loading: false, error: action.payload };

    case CLEAN_ERROR:
      return { ...state, error: null };

    default:
      return state;
  }
};
