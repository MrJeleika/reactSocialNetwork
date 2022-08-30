import axios from 'axios';
import React, { useEffect } from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css'
import ProfileLinks from './ProfileLink/ProfileLinks';

const ProfileInfo = (props) => {
  useEffect(() => {
    if(props.myId){
      let userId = props.router.params.userId
      // Default profile id
      if(!userId) userId = props.myId | 2
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
        props.setUserProfile(response.data)
      })
      
    }

  }, [props.router.params.id] );

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
