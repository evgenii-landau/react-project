import React from "react";
import styles from "./DialogItem.module.scss"
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {

	const styleUserLink = ({isActive}) => {
		return {
			fontWeight: isActive ? 'bold' : '',
			color: isActive ? 'red' : '' 
		}
	}

	return (
		<li>
			<img src={props.avatarUrl} alt="avatar" />
			<NavLink style={styleUserLink} to={`/dialogs/${props.id}`}>
				{props.name}
			</NavLink >
		</li>
	)
}

export default DialogItem;