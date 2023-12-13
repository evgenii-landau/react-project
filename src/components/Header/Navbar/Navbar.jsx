import React from "react";
import styles from './Navbar.module.scss'
import { NavLink } from "react-router-dom";



const Navbar = () => {

	const NavLinkStyles = ({isActive}) => {
		return {
			fontWeight: isActive ? 'bold' : '',
			color: isActive ? 'grey' : ''
		}
	}

	return (
		<div className={styles.navbar}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<NavLink className={styles.link} to="/profile" style={ NavLinkStyles }>Profile</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink className={styles.link} to="/dialogs" style={ NavLinkStyles }>Messages</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink className={styles.link} to="/news" style={ NavLinkStyles }>News</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink className={styles.link} to="/music" style={ NavLinkStyles }>Music</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink className={styles.link} to="/settings" style={ NavLinkStyles }>Settings</NavLink>
				</li>
			</ul>
		</div>
	)
}

export default Navbar