import { HTTP_FORMTEXT_FETCHING, HTTP_FORMTEXT_SUCCESS, HTTP_FORMTEXT_FAILED} from "../Constants"



export const setFormTextStateToFetching = () => ({
  type: HTTP_FORMTEXT_FETCHING  ,
  
})
 export const setFormTextStateToSuccess = (payload) => ({
   type: HTTP_FORMTEXT_SUCCESS,
   payload
 })
 
 export const setFormTextStateToFailed = (payload) => ({
   type:  HTTP_FORMTEXT_FAILED,
   payload
 })
 
 export const FormText = (history, Credential)=>{
  return dispatch=>{
    dispatch(setFormTextStateToFetching())
    setTimeout(()=>{
      dispatch(setFormTextStateToSuccess({result: "ok"}))
    },3000)
    // dispatch(setFormTextStateToFailed())


  }

 }