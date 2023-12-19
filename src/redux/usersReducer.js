import userAvarat from '../img/Users/userAvatar.png'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'


let initialStore = {
	users: [
		{id: 1, followed: true, userName: 'Anya', userStatus: 'Hello my name is Anya', userCountry: 'Ukraine', userCity: 'Lviv', userAvatar: userAvarat},
		{id: 2, followed: false, userName: 'Jack', userStatus: 'Hello my name is Jack', userCountry: 'America', userCity: 'Los Angeles', userAvatar: userAvarat},
		{id: 3, followed: false, userName: 'Nina', userStatus: 'Hello my name is Nina', userCountry: 'Russia', userCity: 'Perm', userAvatar: userAvarat},
		{id: 4, followed: true, userName: 'David', userStatus: 'Hello my name is David', userCountry: 'Armenia', userCity: 'Erevan', userAvatar: userAvarat},
		{id: 5, followed: false, userName: 'Vladimir', userStatus: 'Hello my name is Vladimir', userCountry: 'Russia', userCity: 'Moscow', userAvatar: userAvarat}
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