import React from 'react';
import styles from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

	let dialogs = [{id: 1, name: 'Dmitrii'},
								{id: 2, name: 'Sasha'},
								{id: 3, name: 'David'},
								{id: 4, name: 'Daria'},
								{id: 5, name: 'Volodya'}]

	let messages = [{id: 1, message: 'Hello'},
								{id: 2, message: 'How are you?'},
								{id: 3, message: 'What are you up tonigth?'},
								{id: 4, message: 'Are you ok?'},
								{id: 5, message: 'Good evening ;)'}]

	let dialogsElements = dialogs.map(el => <DialogItem id={el.id} name={el.name} /> )
	let messagesElements = messages.map(el => <Message id={el.id} message={el.message}/>)
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
