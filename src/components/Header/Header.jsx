import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
const Header = (props) => {
  
    return (
     <header className={s.header}>
      <div className={s.img}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/100x100_logo.png" alt="" />
      </div>
      <div className={s.loginBlock}>
        {props.auth.isAuth ? 
           <NavLink to={'/profile'} className={s.link}>
              {props.auth.login}
           </NavLink>
        : 
            <NavLink to={'/login'} className={s.link}>
               Login
            </NavLink>
        }

      </div>
    </header>
    );
}

export default Header;
