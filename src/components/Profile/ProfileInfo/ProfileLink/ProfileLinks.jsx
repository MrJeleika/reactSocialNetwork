import React from 'react';
import s from '../ProfileInfo.module.css'
import facebook from '../../../../assets/images/facebook.svg'
import website from '../../../../assets/images/website.svg'
import vk from '../../../../assets/images/vk.svg'
import twitter from '../../../../assets/images/twitter.svg'
import instagram from '../../../../assets/images/instagram.svg'
import youtube from '../../../../assets/images/youtube.svg'
import github from '../../../../assets/images/github.svg'
import link from '../../../../assets/images/link.svg'

const ProfileLink = (props) => { 
  return (
      <>
      <a href={`${props.contacts.facebook}`} className={props.contacts.facebook ? s.link : s.hidden}>
        <img src={facebook} alt="Facebook" title='Facebook'/>
      </a>
       <a href={`#${props.contacts.website}`} className={props.contacts.website ? s.link : s.hidden}>
        <img src={website} alt="website" title='website'/>
      </a>
       <a href={props.contacts.vk} className={props.contacts.vk ? s.link : s.hidden}>
        <img src={vk} alt="vk" title='vk'/>
      </a>
       <a href={props.contacts.twitter} className={props.contacts.twitter ? s.link : s.hidden}>
        <img src={twitter} alt="twitter" title='twitter'/>
      </a>
       <a href={props.contacts.instagram} className={props.contacts.instagram ? s.link : s.hidden}>
        <img src={instagram} alt="instagram" title='instagram'/>
      </a>
       <a href={props.contacts.youtube} className={props.contacts.youtube ? s.link : s.hidden}>
        <img src={youtube} alt="youtube" title='youtube'/>
      </a>
       <a href={props.contacts.github} className={props.contacts.github ? s.link : s.hidden}>
        <img src={github} alt="github" title='github'/>
      </a>
       <a href={props.contacts.mainLink} className={props.contacts.mainLink ? s.link : s.hidden}>
        <img src={link} alt="mainLink" title='mainLink'/>
      </a>
    
      </>
  )
}

export default ProfileLink;
