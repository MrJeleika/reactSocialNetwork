import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import s from './User.module.css'

const User = (props) => {


  return (
    <div className={s.item}>
      <div className={s.ava}>
        <NavLink to={`/profile/${props.id}`}>
           <img onClick={() => props.setUserId(props.id)} src={props.user.photos.small != null ? props.user.photos.small : "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://i.imgur.com/fO3tI1t.png"} alt="" />
        </NavLink>
        {props.user.followed ? 
        <button onClick={() => props.follow(props.id)} className={s.button}>Follow</button> :
        <button onClick={() => props.follow(props.id)} className={s.button}>Unfollow</button>}
      </div>
      <div className={s.body}>
        <div className={s.about}>
          <div className={s.name}>
            {props.user.name}
          </div>
          <div className={s.status}>
             {props.user.status}
          </div>
        </div>
        <div className={s.location}>
          {props.user.country}<br/>
          {props.user.city}
        </div>
      </div>
    </div>
  );
  
}

export default User;
