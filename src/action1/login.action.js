import axios from "axios";
import {
  LOGIN_FAILED,
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  SERVER,
  TOKEN,
} from "../constants1";

export const setLoginStateToFetching = () => ({
  type: LOGIN_FETCHING,
});

export const setLoginStateToSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const setLoginStateToFailed = () => ({
  type: LOGIN_FAILED,
});

export const login = (values, navigate) => {
  return async (dispatch) => {
    // console.log(values); // show test
    dispatch(setLoginStateToFetching());
    await axios.post(SERVER + "login", values).then((result) => {
      //   console.log(result);
      const { data } = result;
      //   console.log(data);
      if (data.status === "success") {
        dispatch(setLoginStateToSuccess(data.result));
        localStorage.setItem(TOKEN, data.token);
        navigate("/home");
      } else {
        dispatch(setLoginStateToFailed());
      }
    });
  };
};
