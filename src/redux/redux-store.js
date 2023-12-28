import { legacy_createStore as createStore, combineReducers } from 'redux';
import dialogReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';


let reducers = combineReducers(
	{
		dialogsPage: dialogReducer,
		profilePage: profileReducer,
		usersPage: usersReducer,
		auth: authReducer,
	}
)

let store = createStore(reducers);

window.store = store; // чтобы посмотреть в console что сидит в store

export default store;

