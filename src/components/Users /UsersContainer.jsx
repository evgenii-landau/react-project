import Users from "./Users";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
	return {
		usersPage: state.usersPage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		
	}
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer

