import React from 'react';
import styles from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageActionCreater, changeTextAreaDialogsActionCreator } from '../../redux/state'

const Dialogs = (props) => {
	let dialogsElements = props.dialogPage.dialogs.map(el => <DialogItem id={el.id} name={el.name} avatarUrl={el.avatarUrl} /> )
	let messagesElements = props.dialogPage.messages.map(el => <Message id={el.id} message={el.message}/>)

	const newMessage = React.createRef();

	const sendMessage = () => {
		props.dispatch(sendMessageActionCreater())
	}

	const changeTextAreaDialogs = () => {
		const text = newMessage.current.value
		props.dispatch(changeTextAreaDialogsActionCreator(text))
	}

	return (
		<div>
			<div className={styles.dialogs}>
				<div className={styles.dialogsItems}>
					<ul className={styles.dialogsList}>
						{ dialogsElements }
					</ul>
				</div>

				<div className={styles.messages}>
					<ul className={styles.messagesList}>
						{ messagesElements }
					</ul>
				</div>
			</div>

			<form className={styles.form}>
				<textarea ref={newMessage} className={styles.textarea} onChange={changeTextAreaDialogs} value={props.dialogPage.newTextMessage} cols="30" rows="2"></textarea>
				<button onClick={sendMessage} className={styles.button} type="button">Send message</button>
			</form>
		</div>
	);
};

export default Dialogs;
