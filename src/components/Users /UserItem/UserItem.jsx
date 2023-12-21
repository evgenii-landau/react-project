// import React from 'react';
// import style from './UserItem.module.scss';


// const UserItem = (props) => {

// 	const follow = (idUser) => {
// 		props.follow(idUser)
// 	}

// 	const unfollow = (idUser) => {
// 		props.unfollow(idUser)
// 	}

// 	return (
// 		<div className={style.userItem}>
// 			<div className={style.avatarWrapper}>
// 				<a href="#!">
// 					<img className={style.userAvatar} src={props.avatar} alt="user avatar" />
// 				</a>
// 				<div>
// 					{/* { props.followed ? <button onClick={follow(props.key)}>Follow</button> : <button onClick={unfollow(props.key)}>Unfollow</button> } */}
// 				</div>
// 			</div>
// 			<div className={style.userData}>
// 				<div className={style.userInfo}>
// 					<p className={style.userName}>
// 						{props.name}
// 					</p>
// 					<p className={style.userStatus}>
// 						{props.status}
// 					</p>
// 				</div>
// 				<div className={style.userLocation}>
// 					<p className={style.userCountry}>
// 						{ props.country }
// 					</p>
// 					<p className={style.userCity}>
// 						{ props.city }
// 					</p>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default UserItem