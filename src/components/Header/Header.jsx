import React from "react";
import styles from './Header.module.scss'
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import AuthComponent from "./AuthContainer/AuthContainer";

const Header = (props) => {
	return (
		<header className={styles.header}>
			<Logo />
			<Navbar />
			<AuthComponent store={props.store}/>
		</header>
	); 
}

export default Header