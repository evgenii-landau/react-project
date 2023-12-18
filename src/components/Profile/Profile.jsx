import React from "react";
import styles from './Profile.module.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostContainer";


const Profile = (props) => {
	return (
		<div className={styles.content}>
			<ProfileInfo />
			<PostsContainer store={props.store}/>
		</div>
	);
}

export default Profile;