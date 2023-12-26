import Users from './Users/Users';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setPageNumberAC, setTotalUsersCountAC, toggleIsFetchingAC } from '../../../redux/usersReducer';
import React from 'react';
import axios from 'axios';
import preloader from '../../../assets/img/Preloader/preloader.svg'

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
		this.props.toggleIsFetching(false)
		this.props.setUsers(response.data.items)
		this.props.setTotalUsersCount(response.data.totalCount)
		})
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
		this.props.toggleIsFetching(false)
		this.props.setUsers(response.data.items)
		})
	}

	render() {
		return (
		<>
		{ this.props.isFetching ? <img style={{width:'40px'}} src={preloader} /> : null }
			<Users totalUsersCount={ this.props.totalUsersCount }
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					users={this.props.users}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
			/>
		</>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userID) => {
			dispatch(followAC(userID))
		},
		unfollow: (userID) => {
			dispatch(unfollowAC(userID))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setPageNumberAC(pageNumber))
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setTotalUsersCountAC(totalCount))
		},
		toggleIsFetching: (isFetching) => {
			dispatch(toggleIsFetchingAC(isFetching))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

