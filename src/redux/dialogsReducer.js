const UPDATE_NEW_MESSAGE = 'UPDATE-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'


let initialStore = {
	dialogs: [
		{id: 1, name: 'Dmitrii', avatarUrl: ('./../../../assets/img/DialogItem/avatar.png')},
		{id: 2, name: 'Sasha', avatarUrl: ('./../../../assets/img/DialogItem/avatar.png')},
		{id: 3, name: 'David', avatarUrl: ('./../../../assets/img/DialogItem/avatar.png')},
		{id: 4, name: 'Daria', avatarUrl: ('./../../../assets/img/DialogItem/avatar.png')},
		{id: 5, name: 'Volodya', avatarUrl: ('./../../../assets/img/DialogItem/avatar.png')}
	],

	messages: [
		
	],

	newTextMessage: ''
}

const dialogReducer = (state = initialStore, action) => {
	
	switch (action.type) {
		case 'UPDATE-MESSAGE':
			return {
				...state,
				newTextMessage: action.newText
			}
		case 'SEND-MESSAGE':
			if (state.newTextMessage) {
				if (state.messages.length === 0) {
					return {
						...state,
						messages: [...state.messages, {
							id: 0,
							message: state.newTextMessage
						}],
						newTextMessage: ''
					}
				} else { 
					return {
						...state,
						messages: [...state.messages, {
							id: state.messages[state.messages.length - 1].id + 1,
							message: state.newTextMessage
						}],
						newTextMessage: ''
					}
				}
			}
		default:
			return state;
	}
}


export const changeTextAreaDialogsActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE, newText: text})
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export default dialogReducer;