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
      return { ...state, loading: true };

    case SIGNUP_SUCCESS:
      return { ...state, loading: false, user: action.payload.user?.uid };

    case SIGNUP_FAIL:
      console.log(action.payload);
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
