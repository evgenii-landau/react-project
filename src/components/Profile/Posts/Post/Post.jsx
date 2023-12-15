import React from "react";
import styles from './Post.module.scss'
import avatar from './../../../../img/ProfileInfo/avatar.png'


const Post = (props) => {

	

	return (
		<div className={styles.post}>	
			<div>
				<img className={styles.userImg} src={avatar} alt="user photo" />
			</div>
			<div>
				<p>
					{props.postText}
				</p>
			</div>
		</div>
	);
}

export default Post;