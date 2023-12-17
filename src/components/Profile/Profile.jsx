import React from "react";
import styles from './Profile.module.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";


const Profile = (props) => {
	return (
		<div className={styles.content}>
			<ProfileInfo />
			<Posts posts={props.profilePage.posts} dispatch={props.dispatch}/>
		</div>
	);
}

export default Profile;