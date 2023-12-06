import React from "react";
import styles from './Post.module.scss'


const Post = (props) => {
	return (
		<div>	
			{ props.message }
			<p>This is avatar</p>
			<p>This is text</p>
			<p>This is blablabla	</p>
		</div>
	);
}

export default Post;