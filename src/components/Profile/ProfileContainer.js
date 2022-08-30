
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {setUserProfile} from '../../redux/profileReducer'
import {setUserData} from '../../redux/authReducer'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function withRouter(Component){

  function ComponentWithRouterProp(props){
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return(
      <Component {...props} router={{location, navigate,params}}/>
    )
  }
  return ComponentWithRouterProp;
}


const mapStateToProps = (state) => {
  return{
    profile: state.profilePage.profile,
    myId: state.auth.userId
  }
}

const mapDispatchToProps = {
  setUserProfile,
  setUserData,
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile));
export default UsersContainer