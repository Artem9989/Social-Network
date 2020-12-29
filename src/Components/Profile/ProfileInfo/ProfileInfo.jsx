import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileCSS from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = (props) => {

    if (!props.profile){
        return <Preloader/>
    }
    
    return (<div>
        {/* <div className={ProfileCSS.div_content_img}>
            <img className={ProfileCSS.map_content_img} src="http://www.brodyaga.ru/pages/photos/Russia/Barneo%20Camp%20Russia%201527668862(www.brodyaga.com).jpg" alt='Нет фотографии' />
        </div> */}
        <div>
            <ProfileStatusWithHooks status = {props.status} updateStatus= {props.updateStatus}/>
            <img className={ProfileCSS.Avatar} src={props.profile.photos.small} alt='Фотография не загружена' />
            <span> Я {props.profile.fullName}  </span>
            <span> \ Обо мне: {props.profile.aboutMe}  </span>
            <div> Facebook: {props.profile.contacts.facebook} </div>
            <div> VK: {props.profile.contacts.vk} </div>
            <div> instagram: {props.profile.contacts.instagram}</div>
   </div>
    </div>
    );
}
export default ProfileInfo;