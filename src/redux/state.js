let state = {
	dialogsPage: {
		dialogs: [{id: 1, name: 'Dmitrii', avatar: require('img/DialogItem/avatar.png').default},
				{id: 2, name: 'Sasha', avatar: require('img/DialogItem/avatar.png').default},
				{id: 3, name: 'David', avatar: require('img/DialogItem/avatar.png').default},
				{id: 4, name: 'Daria', avatar: require('img/DialogItem/avatar.png').default},
				{id: 5, name: 'Volodya', avatar: require('img/DialogItem/avatar.png').default}],

		messages: [{id: 1, message: 'Hello'},
						{id: 2, message: 'How are you?'},
						{id: 3, message: 'What are you up tonigth?'},
						{id: 4, message: 'Are you ok?'},
						{id: 5, message: 'Good evening ;)'}],
	},
	profilePage: {
		posts: [{postText: 'text post 1'}, 
				{postText: 'text post 2'}, 
				{postText: 'text post 3'}, 
				{postText: 'text post 4'}]
	}
}

export default state