import React from 'react';
import { sendMessageActionCreater, changeTextAreaDialogsActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

	let state = props.store.getState()

	const sendMessage = () => {
		props.store.dispatch(sendMessageActionCreater())
	}

	const changeTextAreaDialogs = (text) => {
		props.store.dispatch(changeTextAreaDialogsActionCreator(text))
	}

	return (
		<Dialogs sendMessage={sendMessage} changeTextAreaDialogs={changeTextAreaDialogs} dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} newTextMessage={state.dialogsPage.newTextMessage}/>
	);
};

export default DialogsContainer;
