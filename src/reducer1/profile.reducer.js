import { HTTP_PROFILE_FETCHING, HTTP_PROFILE_SUCCESS, HTTP_PROFILE_FAILED } from "../constants1"


const initialState = {
  result: null,
  isFetching: false,
  isError: false,
};


const constants1 = (state = initialState, { type, payload }) => {
    switch (type) {
      case HTTP_PROFILE_FETCHING:
        return { ...state, result: null, isFetching: true, isError: false };
      case HTTP_PROFILE_SUCCESS:
        return { ...state, result: payload, isFetching: false, isError: false };
      case HTTP_PROFILE_FAILED:
        return { ...state, result: null, isFetching: false, isError: true };
      default:
        return state;
    }
  };
  
  export default constants1; 

