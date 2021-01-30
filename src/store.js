import {createStore} from "redux";
import RootReducer from "./reducers/rootReducer"
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(RootReducer,composeWithDevTools());


export default store;