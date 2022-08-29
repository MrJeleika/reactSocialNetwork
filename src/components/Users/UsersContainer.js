import React from 'react';
import { connect } from "react-redux";
import {follow, loadUsers, setCurrentPage, setTotalUsersCount, setUsers, toggleFetching, setUserId} from "../../redux/usersReducer";
import UsersAPIComponent from './UsersAPIComponent';

const mapStateToProps = (state) =>{
  return {
    usersPage: state.usersPage,
  }
}


const mapDispatchToProps = {
  loadUsers,
  follow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleFetching,
  setUserId,
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer;
