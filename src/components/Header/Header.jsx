import React from "react";
import styles from './Header.module.scss'
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import AuthComponent from "./AuthContainer/AuthContainer";
import { useEffect } from "react";
import axios from "axios";
import { setAuthUserData } from "../../redux/authReducer";
import { connect } from "react-redux";

const Header = (props) => {

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
		<header className={styles.header}>
			<Logo />
			<Navbar />
			<AuthComponent store={props.store}/>
		</header>
	); 
}

const mapSateToProps = (state) => {
	return {

	}
}

export default connect(mapSateToProps, {setAuthUserData})(Header);

// export default Header