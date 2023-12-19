import React from "react";
import Users from "./Users";


const UsersContainer = (props) => {
	
	let state = props.store.getState()

	// редьюсеры

	return (
		<Users users={state.usersPage.users}/>
	)
}

export default UsersContainer

