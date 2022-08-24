import React, { Component } from 'react';
import { deletePostCreator } from '../../../../redux/profileReducer';
import s from './Post.module.css'

const Post = (props) => {

  
return (
<div className={s.post}>
  <div className={s.row}>
    <div className={s.title}>
      {props.id}. {props.title}
    </div>
    <div onClick={()=> {props.deletePost(props.id)}} className={s.button} >
      <span className={`${s.span} ${s.firstSpan}`}></span>
      <span className={`${s.span} ${s.secondSpan}`}></span>
    </div>
  </div>
  <div className={s.text}>
    {props.text}
  </div>

</div>
);
}

export default Post;