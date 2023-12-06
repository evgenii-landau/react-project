import React from "react";
import styles from './Profile.module.scss'
import Posts from "./Posts/Posts";


const Profile = () => {
	return (
		<div className={styles.content}>
			<img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="images"></img>
			<Posts/>
		</div>
	);
}

export default Profile;