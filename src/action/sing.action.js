import { SING_FETCHING, SING_SUCCESS, SING_FAILED} from "../Constants"



export const setSingStateToFetching = () => ({
  type: SING_FETCHING,
  
})
 export const setSingStateToSuccess = (payload) => ({
   type: SING_SUCCESS,
   payload
 })
 
 export const setSingStateToFailed = () => ({
   type: SING_FAILED,
 })
 
 export const Sign= (valuessing)=>{
  return async(dispatch)=>{
    console.log(valuessing);
    dispatch(setSingStateToFetching());
    dispatch(setSingStateToSuccess({result: "ok"}))
    dispatch(setSingStateToFailed())


  }

 }