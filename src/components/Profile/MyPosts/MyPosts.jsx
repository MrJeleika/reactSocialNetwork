import React, { Component } from 'react';
import { useState } from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {

  // очистка инпута после добавления поста

  const clearInput = () =>{
    let inputs = document.querySelectorAll(`.${s.input}`)
    inputs.forEach(input => input.value = '')
  }
    return (
      <div className={s.myPosts}>
        <div className={s.title}>
          My Posts
        </div>
          <input className={s.input} onChange={(e)=> {props.updateNewPostTitle(e.target.value)}} value={props.profilePage.newPostTitleText} type="text" placeholder='Title' />
          <input className={s.input} onChange={(e)=> {props.updateNewPostBody(e.target.value)}} value={props.profilePage.newPostBodyText} type="text" placeholder='Text' />
          <button onClick={() => {props.addPost(); clearInput()} } className={s.button}>Отправить</button>
        
        <div className={s.posts}>
          {props.profilePage.postList.map((post,i) =>
            <Post deletePost={props.deletePost} dispatch={props.dispatch} key={i} id={i+1} title={post.title} text={post.text}/>
          )}
        </div>
      </div>
    );
}

export default MyPosts;
