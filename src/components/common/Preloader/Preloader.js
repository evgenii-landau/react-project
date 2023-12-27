import React from "react";
import styles from './Preloader.module.scss'
import preloader from '../../../assets/img/Preloader/preloader.svg'


let Preloader = (props) => {
	return (
		<div>
			{ props.isFetching ? <img style={ {width:'40px'} } src={ preloader } /> : null }
		</div>
	)
}

export default Preloader