import React from "react";
import styles from './Posts.module.scss'
import Post from './Post/Post'

const Posts = () => {
	return (
		<div className={styles.content}>
			<div>
				<p className={styles.title}>My Posts</p>
				<form className={styles.form}>
					<textarea className={styles.textarea} placeholder="Create your post" cols="30" rows="5">
						
					</textarea>
					<button className={styles.button}>Add post</button>
				</form>
				<div>
					<Post />
					<Post />
					<Post />
					<Post />
				</div>
			</div>
		</div>
	);
}

export default Posts