import React from 'react';
import styles from './AuthLogin.module.scss'
import { NavLink } from 'react-router-dom';


const AuthLogin = (props) => {
	return (
		<div>
			<NavLink to='/login'>
				Login
			</NavLink>
		</div>
	)
}

export default AuthLogin