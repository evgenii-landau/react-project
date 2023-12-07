import React from "react";
import styles from './Logo.module.scss'

const Logo = () => {
	return (
		<div>
			<div>
				<img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="logo" />
			</div>
		</div>
	)
}

export default Logo