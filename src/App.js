import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside'
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings'
import { Route, Routes } from 'react-router-dom';


function App(props) {
	return (
		<div>
			<Header />
			<div className='app-wrapper'>
				<Aside/>
				<div className='app-wrapper-content'>
					<Routes>
						<Route path='/profile' element={<Profile profilePage={props.store.getState().profilePage} dispatch={props.store.dispatch.bind(props.store)}/>}/>
						<Route path='/dialogs/*' element={<Dialogs dialogPage={props.store.getState().dialogsPage} dispatch={props.store.dispatch.bind(props.store)}/>}/>
						<Route path='/news' element={<News />}/>
						<Route path='/music' element={<Music />}/>
						<Route path='/settings' element={<Settings />}/>
					</Routes>
				</div>
			</div>
			</div>
	);
}

export default App;

