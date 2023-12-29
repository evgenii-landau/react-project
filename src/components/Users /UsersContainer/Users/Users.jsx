import React from "react";
import styles from './Users.module.scss'
import avatar from './../../../../assets/img/Users/userAvatar.png'
import { NavLink } from "react-router-dom";
import axios from "axios";


let Users = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
	let pages = []

	for (let i = 1; i <= pagesCount; i++) {
		if (pages.length < 10) {
			pages.push(i)
		}
	}

	return (
	<div>
		<div className={styles.pagination}>
			{pages.map( page => {
				return <button className={ props.currentPage === page ? styles.selectedPage: '' } onClick={ () => {props.onPageChanged(page)} }>{ page }</button>
				})}
		</div>
		<ul className={styles.usersList}>
			{ props.users.map( (user) => (
			<li key={user.id} className={styles.userItem}>
				<div className={styles.avatarWrapper}>
					<NavLink to={`/profile/${user.id}`}>
						<img className={styles.userAvatar} src={ user.photos.small ? user.photos.small : avatar } alt="user avatar" />
					</NavLink>
					<div>
						{ user.followed
						? <button className={styles.userButton} onClick={() => {

							axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, { 
								withCredential: true,
								headers: {
									'API_KEY': '41cb5d53-5b3b-48bd-bd2f-6b3167cccb2e'
								}
							})
							.then( response => {
								if (response.data.resultCode === 0) {
									props.unfollow(user.id)
								} 
							})

						}}>Follow</button>
						: <button className={styles.userButton} onClick={() => {

							axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, { 
								withCredential: true,
								headers: {
									'API_KEY': '41cb5d53-5b3b-48bd-bd2f-6b3167cccb2e'
								}
							})
							.then( response => {
								if (response.data.resultCode === 0) {
									props.follow(user.id)
								} 
							})
							}}>Unfollow</button> }
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
							{/* { user.country } */ "Russia"}
						</p>
						<p className={styles.userCity}>
							{/* { user.city } */"Perm"}
						</p>
					</div>
				</div>
			</li>
			))}
		</ul>
	</div>
	)
}

export default Users;