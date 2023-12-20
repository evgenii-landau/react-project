import avatar from './../img/Users/userAvatar.png'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'


let initialStore = {
	users: [
		{id: 1, followed: true, name: 'Anya', status: 'Hello my name is Anya', country: 'Ukraine', city: 'Lviv', avatar: avatar},
		{id: 2, followed: false, name: 'Jack', status: 'Hello my name is Jack', country: 'America', city: 'Los Angeles', avatar: avatar},
		{id: 3, followed: false, name: 'Nina', status: 'Hello my name is Nina', country: 'Russia', city: 'Perm', avatar: avatar},
		{id: 4, followed: true, name: 'David', status: 'Hello my name is David', country: 'Armenia', city: 'Erevan', avatar: avatar},
		{id: 5, followed: false, name: 'Vladimir', status: 'Hello my name is Vladimir', country: 'Russia', city: 'Moscow', avatar: avatar}
		]
}

const usersReducer = (state = initialStore, action) => {
	switch (action.type) {
		// case FOLLOW:
		// 	if (!user.followed) {
		// 		user.followed = true
		// 	}
		// 	return state;
		// case UNFOLLOW:
		// 	if (user.followed) {
		// 		user.followed = false
		// 	}
		// 	return state;
		default:
			return state;
	}
}

export const followAC = (userID) => ({type: FOLLOW, userID: {userID}})
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID: {userID}})

export default usersReducer;