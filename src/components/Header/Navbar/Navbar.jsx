import React from "react";
import styles from './Navbar.module.scss'
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<NavLink className={styles.link} to="/profile">Profile</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink className={styles.link} to="/dialogs">Messages</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink className={styles.link} to="/news">News</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink className={styles.link} to="/music">Music</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink className={styles.link} to="/settings">Settings</NavLink>
				</li>
			</ul>
		</div>
	)
}

export default Navbar