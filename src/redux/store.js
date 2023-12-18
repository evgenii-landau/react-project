import dialogReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
	_callSubscriber () {
		console.log('hello');
	},
	
	_state: {
		dialogsPage: {
			dialogs: [
				{id: 1, name: 'Dmitrii', avatarUrl: ('./../../../img/DialogItem/avatar.png')},
				{id: 2, name: 'Sasha', avatarUrl: ('./../../../img/DialogItem/avatar.png')},
				{id: 3, name: 'David', avatarUrl: ('./../../../img/DialogItem/avatar.png')},
				{id: 4, name: 'Daria', avatarUrl: ('./../../../img/DialogItem/avatar.png')},
				{id: 5, name: 'Volodya', avatarUrl: ('./../../../img/DialogItem/avatar.png')}
			],
	
			messages: [
				
			],

			newTextMessage: ''
		},
		
		profilePage: {
			posts: [
				
			],

			newPostText: ''
		},
	
	},

	getState() {
		return this._state
	},

	subscribe (observer) {
		this._callSubscriber = observer
	},

	dispatch(action) {
		
		this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
		this._state.profilePage = profileReducer(this._state.profilePage, action)

		this._callSubscriber(this._state)
	}
}

export default store 
