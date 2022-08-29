import React from 'react';
import { connect } from 'react-redux';
import { addPost, deletePost, updateNewPostBody, updateNewPostTitle } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';



const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}


const mapDispatchToProps = {
    addPost,
    deletePost,
    updateNewPostTitle,
    updateNewPostBody,
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
