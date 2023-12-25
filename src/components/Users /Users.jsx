import React from "react";
import styles from './Users.module.scss'
import avatar from './../../img/Users/userAvatar.png'
import axios, * as others from 'axios';
// import UserItem from "./UserItem/UserItem";


class Users extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
		this.props.setUsers(response.data.items)
		this.props.setTotalUsersCount(response.data.totalCount)
		})
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		 
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
		this.props.setUsers(response.data.items)
		})
	}

	render() {

		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
		let pages = []

		for (let i = 1; i <= pagesCount; i++) {
			if (pages.length < 10) {
				pages.push(i)
			}
		}

		return <div>
			<div>
				{pages.map( page => {
					return <button className={ this.props.currentPage === page ? styles.selectedPage: ''} onClick={ () => {this.onPageChanged(page)} }>{page}</button>
					})}
			</div>
			
		{
			this.props.users.map( (user) => (
				<div key={user.id} className={styles.userItem}>
					<div className={styles.avatarWrapper}>
						<a href="#!">
							<img className={styles.userAvatar} src={ user.photos.small ? user.photos.small : avatar } alt="user avatar" />
						</a>
						<div>
							{ user.followed 
							? <button className={styles.userButton} onClick={() => {this.props.unfollow(user.id)}}>Follow</button> 
							: <button className={styles.userButton} onClick={() => {this.props.follow(user.id)}}>Unfollow</button> }
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
				</div>
			))
		}
	</div>
	}
}

export default Users;