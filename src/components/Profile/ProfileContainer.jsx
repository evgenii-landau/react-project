import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import Profile from './Profile';
import { useParams } from 'react-router-dom';


let ProfileContainer = (props) => {
	const { userId } = useParams()

	useEffect( () => {
		// if (!isAuth)
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then( response => {
				props.setUserProfile(response.data);
		})
	})

	return (
		<Profile { ...props } profile={ props.profile } profilePage={ props.profilePage } />
	)
	
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		profilePage: state.profilePage,
		profile: state.profilePage.profile
	}
}


export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);