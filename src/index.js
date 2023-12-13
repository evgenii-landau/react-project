import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [{id: 1, name: 'Dmitrii'},
					{id: 2, name: 'Sasha'},
					{id: 3, name: 'David'},
					{id: 4, name: 'Daria'},
					{id: 5, name: 'Volodya'}]

let messages = [{id: 1, message: 'Hello'},
					{id: 2, message: 'How are you?'},
					{id: 3, message: 'What are you up tonigth?'},
					{id: 4, message: 'Are you ok?'},
					{id: 5, message: 'Good evening ;)'}]

let posts = [{postText: 'text post 1'}, 
				{postText: 'text post 2'}, 
				{postText: 'text post 3'}, 
				{postText: 'text post 4'}]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App dialogs={dialogs} messages={messages} posts={posts}/>
	</React.StrictMode>
);

reportWebVitals();
