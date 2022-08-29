import axios from 'axios';
import React, { Component } from 'react';
import Profile from './Profile';

export default class ProfileAPIContainer extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.usersPage.userId}`).then(response => {
      this.props.setUserProfile(response.data)
    })
  }
  componentDidUpdate(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.usersPage.userId}`).then(response => {
      this.props.setUserProfile(response.data)
    })
  }

  render() {
    return (
      
      <Profile {...this.props}/>
    );
  }
}

