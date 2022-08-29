import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css'
import ProfileLinks from './ProfileLink/ProfileLinks';

const ProfileInfo = (props) => {

  if(props.profile == null){
    return <Preloader/>
  }
  return (
    <div>
        <div className={s.bio}>
          <div className={s.ava}>
             <img src={props.profile.photos.small != null ? props.profile.photos.large : 
              "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://i.imgur.com/fO3tI1t.png"} alt="" />        
          </div>
          <div className={s.body}>
            <div className={s.info}>
              <div className={s.name}>
                {props.profile.fullName}
              </div>
              <div className={s.status}>
                {props.profile.aboutMe}
              </div>
            </div>
            <div className={s.links}>
              <ProfileLinks contacts={props.profile.contacts}/>
            </div>
          </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
