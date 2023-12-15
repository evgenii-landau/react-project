let store = {
	_callSubscriber () {
		console.log('hello');
	},
	
	_state: {
		dialogsPage: {
			dialogs: [{id: 1, name: 'Dmitrii', avatarUrl: ('./../../../img/DialogItem/avatar.png')},
					{id: 2, name: 'Sasha', avatarUrl: ('./../../../img/DialogItem/avatar.png')},
					{id: 3, name: 'David', avatarUrl: ('./../../../img/DialogItem/avatar.png')},
					{id: 4, name: 'Daria', avatarUrl: ('./../../../img/DialogItem/avatar.png')},
					{id: 5, name: 'Volodya', avatarUrl: ('./../../../img/DialogItem/avatar.png')}],
	
			messages: [{id: 1, message: 'Hello'},
							{id: 2, message: 'How are you?'},
							{id: 3, message: 'What are you up tonigth?'},
							{id: 4, message: 'Are you ok?'},
							{id: 5, message: 'Good evening ;)'}],
			textMessage: ''
		},
		
		profilePage: {
			posts: [{id: 1, message: 'text post 1', likeCount: 32}, 
					{id: 2, message: 'text post 2', likeCount: 12}, 
					{id: 3, message: 'text post 3', likeCount: 24}, 
					{id: 4, message: 'text post 4', likeCount: 4}],
			newPostText: ''
		},
	
	},

	getState() {
		return this._state
	},
	
	addPost () {
		const newPost = {
			id: this._state.profilePage.posts[this._state.profilePage.posts.length - 1].id + 1,
			message: this._state.profilePage.newPostText,
			likeCount: 0
		}	
		this._state.profilePage.posts.push(newPost)
		this._state.profilePage.newPostText = ''
		this._callSubscriber(this._state)
	},
	
	sendMessage () {
		const newMessage = {
			id: this._state.dialogsPage.messages[this._state.dialogsPage.messages.length - 1].id + 1,
			message: this._state.dialogsPage.textMessage
		}
		this._state.dialogsPage.messages.push(newMessage)
		this._state.dialogsPage.textMessage = ''
		this._callSubscriber(this._state)
	},

	updatePostText (newPostText) {
		this._state.profilePage.newPostText = newPostText
		this._callSubscriber(this._state)
	},
	
	updateMessage (newText) {
		this._state.dialogsPage.textMessage = newText
		this._callSubscriber(this._state)
	},
	
	subscribe (observer) {
		this._callSubscriber = observer
	}
}

export default store 
