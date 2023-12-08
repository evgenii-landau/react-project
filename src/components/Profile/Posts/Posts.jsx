import React from "react";
import styles from './Posts.module.scss'
import Post from './Post/Post'

const Posts = () => {

	let posts = [{postText: 'text post 1'}, 
					{postText: 'text post 2'}, 
					{postText: 'text post 3'}, 
					{postText: 'text post 4'}]

	let postsElements = posts.map( post => <Post postText={post.postText}/> )

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
					{ postsElements }
				</div>
			</div>
		</div>
	);
}

export default Posts