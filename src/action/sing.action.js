import { HTTP_SING_FETCHING, HTTP_SING_SUCCESS, HTTP_SING_FAILED} from "../Constants"



export const setSingStateToFetching = () => ({
  type: HTTP_SING_FETCHING  ,
  
})
 export const setSingStateToSuccess = (payload) => ({
   type: HTTP_SING_SUCCESS,
   payload
 })
 
 export const setSingStateToFailed = (payload) => ({
   type:  HTTP_SING_FAILED,
   payload
 })
 
 export const connects= (history, Credential)=>{
  return dispatch=>{
    dispatch(setSingStateToFetching())
    setTimeout(()=>{
      dispatch(setSingStateToSuccess({result: "ok"}))
    },3000)
    // dispatch(setFormTextStateToFailed())


  }

 }