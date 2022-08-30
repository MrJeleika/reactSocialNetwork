import axios from 'axios';
import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {setUserData} from '../../redux/authReducer'

const HeaderAPIContainer = (props) => {

  useEffect(() =>{
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    }).then(response => {
      if(response.data.resultCode == 0){
        let {id, email, login} = response.data.data
        props.setUserData(id, email, login)
      }
    })
  }, [props.auth.userId])

  return (
          <Header {...props}/>
  );
}

const mapStateToProps = (state) =>{
  return{
    auth: state.auth
  }
}
const mapDispatchToProps = {
  setUserData,
}

const HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(HeaderAPIContainer)

export {HeaderAPIContainer};
export default HeaderContainer;



