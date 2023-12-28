import React from 'react';
import styles from './ProfileInfo.module.scss'
import userTheme from './../../../assets/img/ProfileInfo/theme.jpg.webp'
import avatar from './../../../assets/img/Users/userAvatar.png'
import Preloader from '../../common/Preloader/Preloader';


const ProfileInfo = (props) => {

	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div>
			<div>
				<img className={styles.topImg} src={userTheme} alt="images"></img>
			</div>
			<div className={styles.contentWrapper}>
				<img className={styles.avatar} src={ props.profile.photos.large ? props.profile.photos.large : avatar } alt="avatar" />
				<p className={styles.desc}>Hey there! 👋 I'm Alex, by day, I'm a web developer weaving through lines of code, and by night, I'm a creative mind diving into the world of digital art. Passionate about creating meaningful connections, I'm here on this platform to share insights, exchange thoughts, and maybe even crack a few coding jokes. Join me on this journey of constant learning and laughter. Let's connect and make this virtual space feel like home! 🚀✨</p>
			</div>
		</div>
	)
}

export default ProfileInfo