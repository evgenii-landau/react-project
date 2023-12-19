import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside'
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users /UsersContainer';


function App(props) {
	return (
		<div>
			<Header />
			<div className='app-wrapper'>
				<Aside/>
				<div className='app-wrapper-content'>
					<Routes>
						<Route path='/profile' element={<Profile store={props.store}/>}/>
						<Route path='/dialogs/*' element={<DialogsContainer store={props.store}/>}/>
						<Route path='/news' element={<News />}/>
						<Route path='/music' element={<Music />}/>
						<Route path='/settings' element={<Settings />}/>
						<Route path='/users' element={<UsersContainer  store={props.store}/>}/>
					</Routes>
				</div>
			</div>
			</div>
	);
}

export default App;

