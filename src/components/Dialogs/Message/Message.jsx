import React from "react";
import styles from "./Message.module.scss"

const Message = (props) => {
	return (
		<li className={styles.item}>
			<div>
				{props.message}
			</div>
		</li>
	)
}

export default Message;