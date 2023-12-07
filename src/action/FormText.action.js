import axios from "axios";
import { FORMTEXT_FETCHING, FORMTEXT_SUCCESS, FORMTEXT_FAILED} from "../Constants"
import { SERVER , TOKEN} from "../Constants"



export const setFormTextStateToFetching = () => ({
  type: FORMTEXT_FETCHING  ,
  
});
 export const setFormTextStateToSuccess = (payload) => ({
   type: FORMTEXT_SUCCESS,
   payload
 });
 
 export const setFormTextStateToFailed = (payload) => ({
   type:  FORMTEXT_FAILED,
   payload
 });
 
 export const FormText = (values, navigate)=>{
  return async (dispatch) =>{
    dispatch(setFormTextStateToFetching());
    await axios.post(SERVER + "login", values).then((result) => {
        console.log(result);
      const { data } = result;
      //   console.log(data);
      if (data.status === "success") {
        dispatch(setFormTextStateToSuccess(data.result));
        localStorage.setItem(TOKEN, data.token);
        navigate("/sing");
      } else {
        dispatch(setFormTextStateToFailed());
      }
    });
    setTimeout(()=>{
      dispatch(setFormTextStateToSuccess({result: "ok"}))
    },3000)
    dispatch(setFormTextStateToFailed());


  };

 };