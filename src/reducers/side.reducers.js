import { HTTP_SIDE_FETCHING, HTTP_SIDE_SUCCESS, HTTP_SIDE_FAILED} from "../Constants"

const initialState = {
    result: null,
    isFetching: false,
    isError: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case HTTP_SIDE_FETCHING:
    return { ...state, result: null,isFetching: true, isError: false };
    case HTTP_SIDE_SUCCESS:
    return { ...state, result: null,isFetching: false, isError: false };
    case HTTP_SIDE_FAILED:
    return { ...state, result: null,isFetching: false, isError: true };

  default:
    return state;
  }
};
