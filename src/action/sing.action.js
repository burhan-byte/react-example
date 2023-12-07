import { SING_FETCHING, SING_SUCCESS, SING_FAILED} from "../Constants"



export const setSingStateToFetching = () => ({
  type: SING_FETCHING  ,
  
})
 export const setSingStateToSuccess = (payload) => ({
   type: SING_SUCCESS,
   payload
 })
 
 export const setSingStateToFailed = (payload) => ({
   type:  SING_FAILED,
   payload
 })
 
 export const connects= (history)=>{
  return dispatch=>{
    dispatch(setSingStateToFetching());
    
    setTimeout(()=>{
      dispatch(setSingStateToSuccess({result: "ok"}))
    },3000)
    // dispatch(setFormTextStateToFailed())


  }

 }