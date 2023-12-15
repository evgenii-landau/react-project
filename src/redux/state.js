let rerenderEntireTree = () => {
	console.log('hui');
}

let state = {
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

}

export const addPost = () => {
	const newPost = {
		id: state.profilePage.posts[state.profilePage.posts.length - 1].id + 1,
		message: state.profilePage.newPostText,
		likeCount: 0
	}	
	state.profilePage.posts.push(newPost)
	state.profilePage.newPostText = ''
	rerenderEntireTree(state)
}

export const sendMessage = () => {
	const newMessage = {
		id: state.dialogsPage.messages[state.dialogsPage.messages.length - 1].id + 1,
		message: state.dialogsPage.textMessage
	}
	state.dialogsPage.messages.push(newMessage)
	state.dialogsPage.textMessage = ''
	rerenderEntireTree(state)
}

export const updatePostText = (newPostText) => {
	state.profilePage.newPostText = newPostText
	rerenderEntireTree(state)
}

export const updateMessage = (newText) => {
	state.dialogsPage.textMessage = newText
	rerenderEntireTree(state)
}

export const subscribe = (observer) => {
	rerenderEntireTree = observer
}

export default state;
