const UPDATE_NEW_MESSAGE = 'UPDATE-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'


let initialStore = {
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
}

const dialogReducer = (state = initialStore, action) => {

	switch (action.type) {
		case 'UPDATE-MESSAGE':
			state.newTextMessage = action.newText
			return state;
		case 'SEND-MESSAGE':
			if (state.newTextMessage) {
				if (state.messages.length === 0) {
					state.messages.push(
						{
							id: 0,
							message: state.newTextMessage
						}
					)
					state.newTextMessage = ''
				} else { 
					const newMessage = {
						id: state.messages[state.messages.length - 1].id + 1,
						message: state.newTextMessage
					}
					state.messages.push(newMessage)
					state.newTextMessage = ''
				}
			}
			return state;
		default:
			return state;
	}
}


export const changeTextAreaDialogsActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE, newText: text})
export const sendMessageActionCreater = () => ({type: SEND_MESSAGE})

export default dialogReducer;