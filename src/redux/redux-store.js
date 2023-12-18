import { legacy_createStore as createStore, combineReducers } from "redux";
import dialogReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


let reducers = combineReducers(
	{
		dialogsPage: dialogReducer,
		profilePage: profileReducer
	}
)
	
let store = createStore(reducers);

export default store;

