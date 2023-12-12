import { FORMTEXT_FETCHING, FORMTEXT_SUCCESS, FORMTEXT_FAILED} from "../Constants"

const initialState = {
    result: null,
    isFetching: false,
    isError: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case FORMTEXT_FETCHING:
    return { ...state, result: null,isFetching: false, isError: true };
    case FORMTEXT_SUCCESS:
    return { ...state, result: payload ,isFetching: false, isError: true };
    case FORMTEXT_FAILED:
    return { ...state, result: null,isFetching: false, isError: true };

  default:
    return state;
  }
};
