
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {setUserProfile} from '../../redux/profileReducer'
import ProfileAPIContainer from './ProfileAPIContainer';


const mapStateToProps = (state) => {
  return{
    profile: state.profilePage.profile,
    usersPage: state.usersPage
  }
}

const mapDispatchToProps = {
  setUserProfile,
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAPIContainer);
export default UsersContainer