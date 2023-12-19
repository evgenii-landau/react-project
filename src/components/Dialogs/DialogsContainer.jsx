import { sendMessageActionCreator, changeTextAreaDialogsActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => {
			dispatch(sendMessageActionCreator())
		},
		changeTextAreaDialogsActionCreator: (text) => {
			dispatch(changeTextAreaDialogsActionCreator(text))
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
