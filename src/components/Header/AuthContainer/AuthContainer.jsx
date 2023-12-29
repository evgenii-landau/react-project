import React, { useEffect } from "react";
import { setAuthUserData } from "../../../redux/authReducer";
import AuthLogin from "./AuthLogin/AuthLogin";
import { connect } from "react-redux";
import axios from "axios";


const AuthComponent = (props) => {

	return (
		<AuthLogin />
	)
}

const mapStateToProps = (state) => {
	return {
	}
} 

export default connect(mapStateToProps, { setAuthUserData })(AuthComponent)
