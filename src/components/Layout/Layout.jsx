import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './../Header/Header';
import Aside from './../Aside/Aside';

let Layout = (props) => {
	return (
		<div>
			<Header store={props.store}/>
				<div className='app-wrapper'>
					<Aside />
					<div className='app-wrapper-content'>
						<Outlet />
					</div>
				</div>
		</div>
	)
}

export default Layout;