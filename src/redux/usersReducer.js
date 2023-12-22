import avatar from './../img/Users/userAvatar.png'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


let initialStore = {
	users: []
}

const usersReducer = (state = initialStore, action) => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: [...state.users.map( (user) => {
					if (user.id === action.userID) {
						return {...user, followed: true}
					}
					return user
				})]
			}
		case UNFOLLOW:
			return {
				...state,
				users: [...state.users.map( (user) => {
					if (user.id === action.userID) {
						return {...user, followed: false}
					}
					return user
				})
				]
			}
		case SET_USERS: 
			return {
				...state,
				users: [...state.users, ...action.users]
			}
		default:
			return state;
	}
}

export const followAC = (userID) => ({type: FOLLOW, userID: userID})
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID: userID})
export const setUsersAC = (users) => ({type: SET_USERS, users: users})

export default usersReducer;