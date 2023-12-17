const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const ADD_POST = 'ADD-POST'

const UPDATE_NEW_MESSAGE = 'UPDATE-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'

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
				{id: 1, message: 'text post 1', likeCount: 32}, 
				{id: 2, message: 'text post 2', likeCount: 12}, 
				{id: 3, message: 'text post 3', likeCount: 24}, 
				{id: 4, message: 'text post 4', likeCount: 4}
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
		if (action.type === 'UPDATE-POST-TEXT') {
			this._state.profilePage.newPostText = action.newPostText
			this._callSubscriber(this._state)
		} else if (action.type === 'UPDATE-MESSAGE') {
			this._state.dialogsPage.newTextMessage = action.newText
			this._callSubscriber(this._state)
		}	else if (action.type === 'ADD-POST') {
			const newPost = {
				id: this._state.profilePage.posts[this._state.profilePage.posts.length - 1].id + 1,
				message: this._state.profilePage.newPostText,
				likeCount: 0
			}	
			this._state.profilePage.posts.push(newPost)
			this._state.profilePage.newPostText = ''
			this._callSubscriber(this._state)
		} else if (action.type === 'SEND-MESSAGE') {
			if (this._state.dialogsPage.newTextMessage) {
				if (this._state.dialogsPage.messages.length === 0) {
					this._state.dialogsPage.messages.push(
						{
							id: 0,
							message: this._state.dialogsPage.newTextMessage
						}
					)
					this._callSubscriber(this._state)
					this._state.dialogsPage.newTextMessage = 'n'
				} else { 
					const newMessage = {
						id: this._state.dialogsPage.messages[this._state.dialogsPage.messages.length - 1].id + 1,
						message: this._state.dialogsPage.newTextMessage
					}
					this._state.dialogsPage.messages.push(newMessage)
					this._state.dialogsPage.newTextMessage = ''
					this._callSubscriber(this._state)
				}
			} 
	}
	}
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const changeTextAreaPostActionCreator = (text) => ({type: UPDATE_POST_TEXT, newPostText: text})

export const sendMessageActionCreater = () => ({type: SEND_MESSAGE})
export const changeTextAreaDialogsActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE, newText: text})

export default store 
