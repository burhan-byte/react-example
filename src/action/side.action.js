import { HTTP_SIDE_FETCHING, HTTP_SIDE_SUCCESS, HTTP_SIDE_FAILED} from "../Constants"



export const setSideStateToFetching = () => ({
  type: HTTP_SIDE_FETCHING  ,
  
})
 export const setSideStateToSuccess = (payload) => ({
   type: HTTP_SIDE_SUCCESS,
   payload
 })
 
 export const setSideStateToFailed = (payload) => ({
   type:  HTTP_SIDE_FAILED,
   payload
 })
 
 export const connects= (history, Credential)=>{
  return dispatch=>{
    dispatch(setSideStateToFetching())
    setTimeout(()=>{
      dispatch(setSideStateToSuccess({result: "ok"}))
    },3000)
    // dispatch(setFormTextStateToFailed())


  }

 }