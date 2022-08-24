import React from 'react';
import { connect } from "react-redux";
import {followAC, loadUsersAC, setCurrentPageAc, setTotalUsersCountAC, setUsersAC, toggleFetchingAC } from "../../redux/usersReducer";
import UsersAPIComponent from './UsersAPIComponent';

const mapStateToProps = (state) =>{
  return {
    usersPage: state.usersPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: ()=>{
      dispatch(loadUsersAC())
    },
    follow: (id) => {
      dispatch(followAC(id))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (currentPage) =>{
      dispatch(setCurrentPageAc(currentPage))
    },
    setTotalUsersCount: (totalCount) =>{
      dispatch(setTotalUsersCountAC(totalCount))
    },
    toggleFetching: (isFetching) =>{
      dispatch(toggleFetchingAC(isFetching))
    }
  }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer;
