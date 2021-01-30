import {combineReducers} from "redux";
import ActivitiesReducer from "./ActivitiesReducer.js";


const RootReducer=combineReducers({
    activities:ActivitiesReducer
})

export default RootReducer;