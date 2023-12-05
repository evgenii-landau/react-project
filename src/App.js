import React from 'react';
import './App.css';


function App() {
	return (
   	<div className='app-wrapper'>
			<header className='header'>
				<img src='https://e7.pngegg.com/pngimages/993/394/png-clipart-graphics-open-computer-icons-github-logo-svg-face-logo-thumbnail.png     '></img>
			</header>
			<nav className='nav'>
				<div>
					<a>Profile</a>
				</div>
				<div>
					<a>Messages</a>
				</div>
				<div>
					<a>News</a>
				</div>
				<div>
					<a>Music</a>
				</div>
				<div>
					<a>Settings</a>
				</div>
			</nav>
			<div className='content'>
				<img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"></img>
				<div>
					ava + disc
				</div>
				<div>
					My posts
					<div>
						New post
					</div>
				</div>
				<div>
					<div>
						post 1
					</div>
					<div>
						post 1
					</div>
				</div>
			</div>
			<footer className='footer'>
				
			</footer>

   	</div>
	);
}

export default App;

