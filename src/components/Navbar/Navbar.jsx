import React, { Component } from 'react';
import s from './Navbar.module.css'
import {  BrowserRouter, Routes,Route, NavLink,} from 'react-router-dom'

const Navbar = () => {
    return (
      <nav className={s.nav}>
      <ul className={s.list}>
        <li>
          <NavLink to="/profile"  className={({ isActive }) => (isActive ? `${s.linkActive} ${s.link}` : s.link)}>Profile </NavLink>
        </li>
        <li>
          <NavLink to="/dialogs" className={({ isActive }) => (isActive ? `${s.linkActive} ${s.link}` : s.link)}>Messages</NavLink>
        </li>
        <li>
          <NavLink to="/news" className={({ isActive }) => (isActive ? `${s.linkActive} ${s.link}` : s.link)}>News</NavLink>
        </li>
        <li>
          <NavLink to="/music" className={({ isActive }) => (isActive ? `${s.linkActive} ${s.link}` : s.link)}>Music</NavLink>
        </li>
        <li>
          <NavLink to="/users" className={({ isActive }) => (isActive ? `${s.linkActive} ${s.link}` : s.link)}>Users</NavLink>
        </li>
      </ul>
    </nav>
    );
}

export default Navbar;
