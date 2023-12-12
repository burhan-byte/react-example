import axios from "axios";
import { SIDE_FETCHING, SIDE_SUCCESS, SIDE_FAILED} from "../Constants"
import { SERVER , TOKEN} from "../Constants"

export const setSideStateToFetching = () => ({
  type: SIDE_FETCHING,
})

export const setSideStateToSuccess = (payload) => ({
  type:SIDE_SUCCESS,
  payload
})

export const setSideStateToFailed = () => ({
  type: SIDE_FAILED,
})


  export const Side = (valuesside) => {
    return async (dispatch) => {
      dispatch(setSideStateToFetching());
      console.log(valuesside); // show test

      const token = localStorage.getItem(TOKEN);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
 
      await axios.post(SERVER + "hospital/equipment/create", valuesside, config).then((result) => {
        console.log(result);
      const { data } = result;
        console.log(data);
      if (data.status === "success") {
        dispatch(setSideStateToSuccess(data.result));
        // localStorage.setItem(data);
      } else {
        dispatch(setSideStateToFailed());
      }
    });
    }
    };