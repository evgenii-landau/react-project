import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (state) => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</BrowserRouter>
		</React.StrictMode>
	);
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);


