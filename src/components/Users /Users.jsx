import React from "react";
import style from './Users.module.scss'
// import UserItem from "./UserItem/UserItem";


const Users = (props) => {

	return <div>
		{
			props.users.map( (user) => (
				<div key={user.id} className={style.userItem}>
					<div className={style.avatarWrapper}>
						<a href="#!">
							<img className={style.userAvatar} src={user.avatar} alt="user avatar" />
						</a>
						<div>
							{ user.followed 
							? <button onClick={() => {props.follow(user.id)}}>Follow</button> 
							: <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button> }
						</div>
					</div>
					<div className={style.userData}>
						<div className={style.userInfo}>
							<p className={style.userName}>
								{user.name}
							</p>
							<p className={style.userStatus}>
								{user.status}
							</p>
						</div>
						<div className={style.userLocation}>
							<p className={style.userCountry}>
								{ user.country }
							</p>
							<p className={style.userCity}>
								{ user.city }
							</p>
						</div>
					</div>
				</div>
			))
		}
	</div>
}

export default Users;