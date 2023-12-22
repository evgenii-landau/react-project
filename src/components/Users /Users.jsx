import React from "react";
import styles from './Users.module.scss'
import avatar from './../../img/Users/userAvatar.png'
// import UserItem from "./UserItem/UserItem";


const Users = (props) => {
	if (props.users.length === 0) {
		props.setUsers(
			[
				{id: 1, followed: false, name: 'Anya', status: 'Hello my name is Anya', country: 'Ukraine', city: 'Lviv', avatar: avatar},
				{id: 2, followed: true, name: 'Jack', status: 'Hello my name is Jack', country: 'America', city: 'Los Angeles', avatar: avatar},
				{id: 3, followed: true, name: 'Nina', status: 'Hello my name is Nina', country: 'Russia', city: 'Perm', avatar: avatar},
				{id: 4, followed: false, name: 'David', status: 'Hello my name is David', country: 'Armenia', city: 'Erevan', avatar: avatar},
				{id: 5, followed: true, name: 'Vladimir', status: 'Hello my name is Vladimir', country: 'Russia', city: 'Moscow', avatar: avatar}
			]
		)
	}

	return <div>
		{
			props.users.map( (user) => (
				<div key={user.id} className={styles.userItem}>
					<div className={styles.avatarWrapper}>
						<a href="#!">
							<img className={styles.userAvatar} src={user.avatar} alt="user avatar" />
						</a>
						<div>
							{ user.followed 
							? <button className={styles.userButton} onClick={() => {props.unfollow(user.id)}}>Follow</button> 
							: <button className={styles.userButton} onClick={() => {props.follow(user.id)}}>Unfollow</button> }
						</div>
					</div>
					<div className={styles.userData}>
						<div className={styles.userInfo}>
							<p className={styles.userName}>
								{user.name}
							</p>
							<p className={styles.userStatus}>
								{user.status}
							</p>
						</div>
						<div className={styles.userLocation}>
							<p className={styles.userCountry}>
								{ user.country }
							</p>
							<p className={styles.userCity}>
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