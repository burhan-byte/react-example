import { HTTP_PROFILE_FETCHING, HTTP_PROFILE_SUCCESS, HTTP_PROFILE_FAILED } from "../constants1"


export const setProfileStateToFetching = () => ({
  type: HTTP_PROFILE_FETCHING,
})

export const setProfileStateToSuccess = (payload) => ({
  type: HTTP_PROFILE_SUCCESS,
  payload
})

export const setProfileStateToFailed = () => ({
  type: HTTP_PROFILE_FAILED,
})

export const connects = (history, credentail)=>{
    return dispatch=>{
      dispatch(setProfileStateToFetching())
      setTimeout(()=>{
        dispatch(setProfileStateToSuccess({result: "ok"}))
      }, 3000)
    }
}