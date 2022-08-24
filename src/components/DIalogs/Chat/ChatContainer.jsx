import React from 'react';
import { connect } from 'react-redux';
import { addChatMessageCreator, updateChatMessageCreator } from '../../../redux/dialogsReducer';
import Chat from './Chat';

const mapStateToProps = (state) =>{
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addChatMessage: () => {
      dispatch(addChatMessageCreator())
    },
    updateNewMessageText: (e) => {
      dispatch(updateChatMessageCreator(e))
    }
  }
}


const ChatContainer = connect(mapStateToProps,mapDispatchToProps)(Chat)

export default ChatContainer;
