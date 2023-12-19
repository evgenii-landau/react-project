import React from "react";
import style from './Users.module.scss'
import UserItem from "./UserItem/UserItem";


const Users = (props) => {
	
	let usersItems = props.users.map((el) => <UserItem id={el.id} followed={el.followed} userName={el.userName} userStatus={el.userStatus} userCountry={el.userCountry} userCity={el.userCity} userAvatar={el.userAvatar}/>) 
	
	return (
		<div>
			<div className={style.users}>
				{ usersItems }
			</div>
			<button className={style.button}>
				Show More
			</button>
		</div>
	)
}

export default Users;