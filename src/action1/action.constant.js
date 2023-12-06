import { HTTP_REGISTERSTAR_FETCHING, HTTP_REGISTERSTAR_SUCCESS, HTTP_REGISTERSTAR_FAILED } from './constants'


export const setRegisterStateToFetching = () => ({
  type: HTTP_REGISTERSTAR_FETCHING,
})

export const setRegisterStateToSuccess = (payload) => ({
  type: HTTP_REGISTERSTAR_SUCCESS,
  payload
})

export const setRegisterStateToFailed = () => ({
  type: HTTP_REGISTERSTAR_FAILED,
})

export const connects = (history, credentail)=>{
    return dispatch=>{
      dispatch(setRegisterStateToFetching())
      setTimeout(()=>{
        dispatch(setRegisterStateToSuccess({result: "ok"}))
      }, 3000)
      // dispatch(setRegisterStateToFailed())
    }    
}



