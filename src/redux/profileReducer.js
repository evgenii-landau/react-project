const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const ADD_POST = 'ADD-POST'


let initialStore = {
	posts: [
		
	],

	newPostText: ''
}

const profileReducer = (state = initialStore, action) => {

	switch (action.type) {
		case 'UPDATE-POST-TEXT':
			state.newPostText = action.newPostText
			return state;
		case 'ADD-POST':
			if (state.newPostText) {
				if (state.posts.length === 0) {
					state.posts.push(
						{
							id: 0, 
							message: state.newPostText,
							likeCount: 0
						}
					)
					state.newPostText = ''
				} else {
					const newPost = {
						id: state.posts[state.posts.length - 1].id + 1,
						message: state.newPostText,
						likeCount: 0
					}	
					state.posts.push(newPost)
					state.newPostText = ''
				}
			}
			return state;
		default:
			return state;
	}
}

export const changeTextAreaPostActionCreator = (text) => ({type: UPDATE_POST_TEXT, newPostText: text})
export const addPostActionCreator = () => ({type: ADD_POST})

export default profileReducer;