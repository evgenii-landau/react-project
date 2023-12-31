const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


let initialStore = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
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
				users: action.users
			}
		case SET_PAGE_NUMBER: 
			return {
				...state,
				currentPage: action.pageNumber
			}
		case SET_TOTAL_COUNT: 
		 return {
			...state,
			totalUsersCount: action.count
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}
		default:
			return state;
	}
}

export const follow = (userID) => ({type: FOLLOW, userID: userID})
export const unfollow = (userID) => ({type: UNFOLLOW, userID: userID})
export const setUsers = (users) => ({type: SET_USERS, users: users})
export const setCurrentPage = (pageNumber) => ({type: SET_PAGE_NUMBER, pageNumber: pageNumber})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_COUNT, count: totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer;