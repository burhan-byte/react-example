import { HTTP_REGISTERSTAR_FETCHING, HTTP_REGISTERSTAR_SUCCESS, HTTP_REGISTERSTAR_FAILED } from './constants';


const initialState = {
  result: null,
  isFetching: false,
  isError: false,
};

const constants = (state = initialState, { type, payload }) => {
  switch (type) {
    case HTTP_REGISTERSTAR_FETCHING:
      return { ...state, result: null, isFetching: true, isError: false };
    case HTTP_REGISTERSTAR_SUCCESS:
      return { ...state, result: payload, isFetching: false, isError: false };
    case HTTP_REGISTERSTAR_FAILED:
      return { ...state, result: null, isFetching: false, isError: true };
    default:
      return state;
  }
};

export default constants; 
