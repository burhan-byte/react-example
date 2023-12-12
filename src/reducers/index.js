import { combineReducers } from "redux";
import formTextReducer from './FormText.reducer'
import sideReducer from './side.reducers'
import singReducer from "./sing.reducers";



export default combineReducers({
    formTextReducer, 
    singReducer,
    sideReducer,
    // stockReducer, 
})