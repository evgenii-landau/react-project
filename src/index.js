import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import state from './redux/state';
import './index.css';
import App from './App';
import { addPost, sendMessage, updateMessage, updatePostText, subscribe } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = () => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={state} addPost={addPost} updatePostText={updatePostText} updateMessage={updateMessage} sendMessage={sendMessage}/>
			</BrowserRouter>
		</React.StrictMode>
	);
}

rerenderEntireTree();

subscribe(rerenderEntireTree);



