import React from 'react';
import { connect } from 'react-redux';
import { addPostCreator, deletePostCreator, updateNewPostBodyCreator, updateNewPostTitleCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';



const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    addPost: () => {
      dispatch(addPostCreator())
    },
    deletePost: (id) => {
      dispatch(deletePostCreator(id))
    },
    updateNewPostTitle: (text) =>{
      dispatch(updateNewPostTitleCreator(text))
    },
    updateNewPostBody: (text) =>{
      dispatch(updateNewPostBodyCreator(text))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
