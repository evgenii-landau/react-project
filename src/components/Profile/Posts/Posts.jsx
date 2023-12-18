import React from "react";
import styles from './Posts.module.scss'
import Post from './Post/Post'

const Posts = (props) => {
	
	let postsElements = props.posts.map( post => <Post postText={post.message}/> )

	const newPostElement = React.createRef()

	const addPost = () => {
		props.addPost()
	}

	const changeTextAreaPost = () => {
		const text = newPostElement.current.value
		props.changeTextAreaPost(text)
	}

	return (
		<div className={styles.content}>
			<div>
				<p className={styles.title}>My Posts</p>

				<form className={styles.form}>
					<textarea ref={newPostElement} className={styles.textarea} onChange={changeTextAreaPost} value={props.newPostText} placeholder="Create your post" cols="30" rows="5" />
					<button onClick={addPost} className={styles.button} type="button">Add post</button>
				</form>

				<div className={styles.postsWrapper}>
					{ postsElements }
				</div>

			</div>
		</div>
	);
}

export default Posts