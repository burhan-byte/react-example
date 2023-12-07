import { SING_FETCHING, SING_SUCCESS, SING_FAILED} from "../Constants"

const initialState = {
    result: null,
    isFetching: false,
    isError: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SING_FETCHING:
    return { ...state, result: null,isFetching: true, isError: false };
    case SING_SUCCESS:
    return { ...state, result:payload,isFetching: false, isError: false };
    case SING_FAILED:
    return { ...state, result: null,isFetching: false, isError: true };

  default:
    return state;
  }
};
