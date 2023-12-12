import { SIDE_FETCHING, SIDE_SUCCESS, SIDE_FAILED} from "../Constants"

const initialState = {
    result: null,
    isFetching: false,
    isError: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SIDE_FETCHING:
    return { ...state, result: null,isFetching: false, isError: true };
    case SIDE_SUCCESS:
    return {...state, result: payload ,isFetching: false, isError: true   };
    case SIDE_FAILED:
    return { ...state, result: null,isFetching: false, isError: true};

  default:
    return state;
  }
};
