import { legacy_createStore as createStore, combineReducers } from 'redux';
import dialogReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';


let reducers = combineReducers(
	{
		dialogsPage: dialogReducer,
		profilePage: profileReducer,
		usersPage: usersReducer,
	}
)

let store = createStore(reducers);

export default store;

