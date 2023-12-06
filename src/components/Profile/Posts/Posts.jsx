import React from "react";
import styles from './Posts.module.scss'
import Post from './Post/Post'

const Posts = () => {
	return (
		<div className={styles.content}>
			<div>
				My posts
				<div>
					<textarea name="" id="" cols="30" rows="10">

					</textarea>
					<button>Add post</button>
				</div>
				<div>
					<Post message="Hello!! How are you?"/>
					<Post message="Are you okay???"/>
					<Post />
					<Post/>
				</div>
			</div>
		</div>
	);
}

export default Posts