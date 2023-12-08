import React from "react";
import styles from './ProfileInfo.module.scss'

const ProfileInfo = (props) => {
	return (
		<div>
			<div>
				<img className={styles.top_img}src="https://gb.ru/blog/wp-content/uploads/2023/03/%D0%92%D1%8B%D1%81%D0%BE%D0%BA%D0%BE%D1%83%D1%80%D0%BE%D0%B2%D0%BD%D0%B5%D0%B2%D1%8B%D0%B9-%D1%8F%D0%B7%D1%8B%D0%BA-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-1.jpg.webp" alt="images"></img>
			</div>
			<div>
				ava + discription
			</div>
		</div>
	)
}

export default ProfileInfo