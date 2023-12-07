import React from "react";
import styles from './Post.module.scss'


const Post = (props) => {
	return (
		<div className={'styles.post'}>	
			<div>
				<img className={'styles.user-img'} src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="user photo" />
			</div>
			<div>
				<p>
					post text post text post text post text post text post text 
					post text post text post text post text post text post text 
					post text post text post text post text post text post text 
				</p>
			</div>
		</div>
	);
}

export default Post;