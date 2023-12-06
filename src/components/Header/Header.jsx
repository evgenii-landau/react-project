import React from "react";
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<img src='https://e7.pngegg.com/pngimages/993/394/png-clipart-graphics-open-computer-icons-github-logo-svg-face-logo-thumbnail.png' alt="logo"></img>
		</header>
	); 
}

export default Header