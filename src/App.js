import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App(props) {
	return (
		<BrowserRouter>
			<Header />
			<div className='app-wrapper'>
				<Routes>
					<Route path='/profile' element={<Profile state={props.state.profilePage}/>}/>
					<Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage}/>}/>
					<Route path='/news' element={<News />}/>
					<Route path='/music' element={<Music />}/>
					<Route path='/settings' element={<Settings />}/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;

