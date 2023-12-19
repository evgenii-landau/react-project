import Posts from './Posts'
import { addPostActionCreator, changeTextAreaPostActionCreator } from "../../../redux/profileReducer";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage
	}
}

let mapDispatchTopProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPostActionCreator())
		},
		changeTextAreaPost: (text) => {
			dispatch(changeTextAreaPostActionCreator(text))
		}
	}
}

let PostsContainer = connect(mapStateToProps, mapDispatchTopProps)(Posts)

export default PostsContainer