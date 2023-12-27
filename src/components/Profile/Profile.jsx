import React from "react";
import styles from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostContainer';

let Profile = (props) => {
	return (
		<div>
			<ProfileInfo profile={ props.profile } />
			<PostsContainer profilePage={ props.profilePage }/>
		</div>
	)
}

export default Profile