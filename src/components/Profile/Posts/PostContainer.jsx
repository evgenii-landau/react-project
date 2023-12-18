import React from "react";
import Posts from './Posts'
import { addPostActionCreator, changeTextAreaPostActionCreator } from "../../../redux/profileReducer";

const PostsContainer = (props) => {

	let state = props.store.getState()

	const addPost = () => {
		props.store.dispatch(addPostActionCreator())
	}

	const changeTextAreaPost = (text) => {
		props.store.dispatch(changeTextAreaPostActionCreator(text))
	}

	return (
		<Posts changeTextAreaPost={ changeTextAreaPost } addPost={ addPost } posts={state.profilePage.posts} newPostText={ state.profilePage.newPostText }/>
	);
}

export default PostsContainer