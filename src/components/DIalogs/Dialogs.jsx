import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'
import ChatContainer from './Chat/ChatContainer';

const DialogItem = (props)=>{
  const path = '/dialogs/' + props.id
  return (
    <div className={s.item}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}

const Dialogs = (props) => {
    return (
      <div className="content">
        <div className={s.dialogs}>
            <div className={s.users}>
              {props.dialogsPage.dialogsList.map((dialog, i) => 
                <DialogItem id={i+1} name={dialog.name}/>
              )}
            </div>
            <ChatContainer className={s.chat}/>
        </div>
      </div>
    );
}

export default Dialogs;
