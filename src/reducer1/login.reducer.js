import { LOGIN_FAILED, LOGIN_FETCHING, LOGIN_SUCCESS } from "../constants1";

const initialState = {
  loginFetching: false,
  loginResult: null,
  loginFailed: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_FETCHING:
      return {
        ...state,
        loginFetching: true,
        loginResult: null,
        loginFailed: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginFetching: false,
        loginResult: payload,
        loginFailed: false,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loginFetching: false,
        loginResult: null,
        loginFailed: true,
      };

    default:
      return state;
  }
};
