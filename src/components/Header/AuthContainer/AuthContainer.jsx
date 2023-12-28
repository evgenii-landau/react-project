import React, { useEffect } from "react";
import { setAuthUserData } from "../../../redux/authReducer";
import AuthLogin from "./AuthLogin/AuthLogin";
import { connect } from "react-redux";
import axios from "axios";


const AuthComponent = (props) => {
	
	useEffect( () => {
		axios.get('https://social-network.samuraijs.com/api/1.0/auth/me/', {
			withCredentials: true
		})
		.then ( response => {
			if (response.data.resultCode === 0) {
				const { id, login, email } = response.data.data
				props.setAuthUserData(id, login, email)
			}
		})
	})

	return (
		<AuthLogin />
	)
}

const mapStateToProps = (state) => {
	return {
	}
} 

export default connect(mapStateToProps, { setAuthUserData })(AuthComponent)
