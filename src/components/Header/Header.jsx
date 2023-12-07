import React from "react";
import styles from './Header.module.scss'
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";

const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Navbar />
		</header>
	); 
}

export default Header