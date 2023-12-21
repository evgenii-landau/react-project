import avatar from './../img/Users/userAvatar.png'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


let initialStore = {
	users: [
		{id: 1, followed: false, name: 'Anya', status: 'Hello my name is Anya', country: 'Ukraine', city: 'Lviv', avatar: avatar},
		{id: 2, followed: true, name: 'Jack', status: 'Hello my name is Jack', country: 'America', city: 'Los Angeles', avatar: avatar},
		{id: 3, followed: true, name: 'Nina', status: 'Hello my name is Nina', country: 'Russia', city: 'Perm', avatar: avatar},
		{id: 4, followed: false, name: 'David', status: 'Hello my name is David', country: 'Armenia', city: 'Erevan', avatar: avatar},
		{id: 5, followed: true, name: 'Vladimir', status: 'Hello my name is Vladimir', country: 'Russia', city: 'Moscow', avatar: avatar}
	],
}

const usersReducer = (state = initialStore, action) => {

	switch (action.type) {
		case FOLLOW:
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
		case UNFOLLOW:
			return {
				...state,
				users: [...state.users.map( (user) => {
					if (user.id === action.userID) {
						return {...user, followed: true}
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
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;