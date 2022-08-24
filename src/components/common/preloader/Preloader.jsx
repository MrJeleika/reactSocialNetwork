import React from 'react';
import s from './Preloader.module.css'
import preloader from '../../../assets/images/284.svg'

const Preloader = (props) => {
  return (
      <div className={s.preloader}>
        <img src={preloader} /> 
      </div>
  );
}

export default Preloader;
