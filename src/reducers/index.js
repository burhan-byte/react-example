import { combineReducers } from "redux";
import FormTextReducer from './FormText.reducer'
import sideReducer from './side.reducers'
import singReducer from "./sing.reducers";



export default combineReducers({
    FormTextReducer, 
    singReducer,
    sideReducer,
    // stockReducer, 
})