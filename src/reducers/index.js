import { combineReducers } from "redux";
// import FormTextReducers from './FormText.reducer'
import sideReducer from './side.reducers'
import singReducer from "./sing.reducers";



export default combineReducers({
    // FormTextReducers, 
    singReducer,
    sideReducer,
    // stockReducer, 
})