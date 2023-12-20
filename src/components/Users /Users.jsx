import React from "react";
import style from './Users.module.scss'
import UserItem from "./UserItem/UserItem";


const Users = (props) => {
	let usersItem = props.usersPage.users.map((user) => <UserItem key={user.id} followed={user.followed} name={user.name} status={user.status} country={user.country} city={user.city} avatar={user.avatar}/>) 
	
	return (
		<div>
			<div className={ style.users }>
				{ usersItem }
			</div>
			<button className={ style.button }>
				Show More
			</button>
		</div>
	)
}

export default Users;