import React from "react";
import styles from './Profile.module.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";


const Profile = () => {
	return (
		<div className={styles.content}>
			<ProfileInfo />
			<Posts/>
		</div>
	);
}

export default Profile;