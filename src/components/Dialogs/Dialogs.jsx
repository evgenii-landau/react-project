import React from 'react';
import styles from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

	let dialogsElements = props.state.dialogs.map(el => <DialogItem id={el.id} name={el.name} /> )
	let messagesElements = props.state.messages.map(el => <Message id={el.id} message={el.message}/>)

	return (
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
	);
};

export default Dialogs;
