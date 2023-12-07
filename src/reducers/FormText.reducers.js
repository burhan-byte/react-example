import { HTTP_FORMTEXT_FETCHING, HTTP_FORMTEXT_SUCCESS, HTTP_FORMTEXT_FAILED} from "../Constants"

const initialState = {
    result: null,
    isFetching: false,
    isError: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case HTTP_FORMTEXT_FETCHING:
    return { ...state, result: null,isFetching: true, isError: false };
    case HTTP_FORMTEXT_SUCCESS:
    return { ...state, result: null,isFetching: false, isError: false };
    case HTTP_FORMTEXT_FETCHING:
    return { ...state, result: null,isFetching: false, isError: true };

  default:
    return state;
  }
};
