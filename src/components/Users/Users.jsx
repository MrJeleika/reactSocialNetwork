import React from 'react';
import User from './User/User';
import s from './Users.module.css'

import Preloader from '../common/preloader/Preloader';

const Users = (props) => {
  const pagesCount = Math.ceil(props.usersPage.totalUsersCount / props.usersPage.pageSize)
  let pages = []
  for(let i = 1; i <= pagesCount; i++){
    pages.push(i)
  }
  return (
<div className='content'>
  {props.usersPage.isFetching ? <Preloader/>  : null}
  <div className={s.title}>
    Users
  </div>
  <div className={s.body}>
    <div className={s.pages}>
      {pages.map(p => {
      return <div onClick={() => props.onPageChange(p)} className={p === props.usersPage.currentPage ? `${s.page} ${
        s.currentPage}` : s.page}>{p}</div>
      })}
    </div>
    {props.usersPage.users.map((user, i) => 
    i < props.usersPage.loadedUsers ? <User follow={props.follow} key={i} usersPage={props.usersPage}
      user={user} id={user.id} /> : ''
    )}
    <button onClick={()=> props.loadUsers()} className={s.button}>Show more</button>
  </div>
</div>

  );
}

export default Users;