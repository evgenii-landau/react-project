const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


let initialStore = {
	posts: [
		
	],
	profile: null,
	newPostText: ''
}

const profileReducer = (state = initialStore, action) => {

	switch (action.type) {
		case 'UPDATE-POST-TEXT':
			return {
				...state,
				newPostText: action.newPostText	
			}
		case 'ADD-POST':
			if (state.newPostText) {
				if (state.posts.length === 0) {
					return {
						...state,
						posts: [...state.posts, {
							id: 0, 
							message: state.newPostText,
							likeCount: 0
						}],
						newPostText: ''
					}
				} else {
					return {
						...state,
						posts: [...state.posts, {
							id: state.posts[state.posts.length - 1].id + 1,
							message: state.newPostText,
							likeCount: 0
						}],
						newPostText: ''
					}
				}
			}
		case 'SET_USER_PROFILE':
			return {
				...state,
				profile: action.profile
			}
		default:
			return state;
	}
}

export const changeTextAreaPostActionCreator = (text) => ({ type: UPDATE_POST_TEXT, newPostText: text })
export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE , profile })

export default profileReducer;