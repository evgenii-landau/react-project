import React from 'react';
import style from './UserItem.module.scss';

const UserItem = (props) => {
	
	return (
		<div className={style.userItem}>
			<div className={style.avatarWrapper}>
				<a href="#!">
					<img className={style.userAvatar} src={props.userAvatar} alt="user avatar" />
				</a>
				<button className={style.button}>
					Follow 
				</button>
			</div>
			<div className={style.userData}>
				<div className={style.userInfo}>
					<p className={style.userName}>
						{props.userName}
					</p>
					<p className={style.userStatus}>
						{props.userStatus}
					</p>
				</div>
				<div className={style.userLocation}>
					<p className={style.userCountry}>
						{ props.userCountry }
					</p>
					<p className={style.userCity}>
						{ props.userCity }
					</p>
				</div>
			</div>
		</div>
	)
}

export default UserItem