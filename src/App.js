import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users /UsersContainer/UsersContainer';
import Layout from './components/Layout/Layout';



function App(props) {
	return (
		<Routes>
			<Route path='/' element={<Layout store={props.store}/>}>
				<Route path='/profile/:userId' element={<ProfileContainer store={props.store} />}/>
				<Route path='/dialogs/*' element={<DialogsContainer store={props.store} />}/>
				<Route path='/news' element={<News />}/>
				<Route path='/music' element={<Music />}/>
				<Route path='/settings' element={<Settings />}/>
				<Route path='/users' element={<UsersContainer store={props.store} />}/>
			</Route>
		</Routes>
	);
}

export default App;

