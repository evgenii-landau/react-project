import React from "react"
import styles from './Aside.module.scss'
import profileIcon from './../../assets/img/Aside/profileIcon.png'

const Aside = (props) => {
	return (
		<aside className={styles.aside}>
			<p className={styles.asideDesc}>Your friends</p>
			<ul className={styles.asideList}>
				<li className={styles.asideItem}>
					<a href="#!">
						<img className={styles.asideImg} src={profileIcon} alt="photoProfileFriends" />
					</a>
				</li>
				<li className={styles.asideItem}>
					<a href="#!">
						<img className={styles.asideImg} src={profileIcon} alt="photoProfileFriends" />
					</a>
				</li>
				<li className={styles.asideItem}>
					<a href="#!">
						<img className={styles.asideImg} src={profileIcon} alt="photoProfileFriends" />
					</a>
				</li>
				<li className={styles.asideItem}>
					<a href="#!">
						<img className={styles.asideImg} src={profileIcon} alt="photoProfileFriends" />
					</a>
				</li>
			</ul>
		</aside>
	)
}

export default Aside;