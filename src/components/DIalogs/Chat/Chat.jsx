import React, { Component } from 'react';
import s from './Chat.module.css'
import Message from './Message/Message';


const Chat = (props) => {


    const clearInput = () =>{
      document.querySelector(`.${s.input}`).value = ''
    }
    return (
      <div className={s.chat}>
        <div className={s.messages}>
            {props.dialogsPage.messagesList.map((message,i)=>
            <Message className={s.message} key={i} dispatch={props.dispatch} message={message.text}/>
            )}
        </div>
        <div>
          <input onChange={(e)=> props.updateNewMessageText(e.currentTarget.value)} value={props.dialogsPage.newMessageText} placeholder='Message' className={s.input} type="text" />
          <button onClick={() => {props.addChatMessage(); clearInput()} } className={s.button}>Отправить</button>
        </div>
      </div>

    );
}

export default Chat;
