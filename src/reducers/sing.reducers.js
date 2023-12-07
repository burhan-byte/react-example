import { HTTP_SING_FETCHING, HTTP_SING_SUCCESS, HTTP_SING_FAILED} from "../Constants"

const initialState = {
    result: null,
    isFetching: false,
    isError: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case HTTP_SING_FETCHING:
    return { ...state, result: null,isFetching: true, isError: false };
    case HTTP_SING_SUCCESS:
    return { ...state, result: null,isFetching: false, isError: false };
    case HTTP_SING_FAILED:
    return { ...state, result: null,isFetching: false, isError: true };

  default:
    return state;
  }
};
