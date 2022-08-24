import React, { Component } from 'react'
import * as axios from 'axios'
import Users from './Users';


export default class UsersAPIComponent extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    if(this.props.usersPage.users.length === 0){
      this.props.toggleFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`).then(response => {
        this.props.toggleFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
    }
  }
  onPageChange = (pageNumber) =>{
    this.props.setCurrentPage(pageNumber)
    this.props.toggleFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`).then(response => {
      this.props.toggleFetching(false)
      this.props.setUsers(response.data.items)
    })
  }

  render() {

    return (
      <>

        <Users usersPage={this.props.usersPage}
               isFetching={this.props.isFetching} 
               follow={this.props.follow} 
               onPageChange={this.onPageChange} 
               loadUsers={this.props.loadUsers}/>
      </>

    )
  }
}
