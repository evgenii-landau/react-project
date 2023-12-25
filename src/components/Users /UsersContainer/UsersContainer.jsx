import Users from "./Users/Users";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC, setPageNumberAC, setTotalUsersCountAC } from "../../../redux/usersReducer";
import React from "react";
import axios from "axios";


class UsersAPIComponent extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
		this.props.setUsers(response.data.items)
		this.props.setTotalUsersCount(response.data.totalCount)
		})
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		 
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
		this.props.setUsers(response.data.items)
		})
	}

	render() {
		return <Users totalUsersCount={this.props.totalUsersCount}
							pageSize={this.props.pageSize}
							currentPage={this.props.currentPage}
							onPageChanged={this.onPageChanged}
							users={this.props.users}
							follow={this.props.follow}
							unfollow={this.props.unfollow}/>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
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
		}
	}
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer

