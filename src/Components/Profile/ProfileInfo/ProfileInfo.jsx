import React, {useState} from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileCSS from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import userPhoto from '../../../assets/images/Avatar_Custome.jpg';
import ProfileDataForm from './ProfileDataForm'
const ProfileInfo = (props) => {

const [editMode, seteditMode] = useState(false)

    if (!props.profile){
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData)
        .then ( () => {
            seteditMode(false);
        });
       // seteditMode(false);
    }
    return (<div>
        {/* <div className={ProfileCSS.div_content_img}>
            <img className={ProfileCSS.map_content_img} src="http://www.brodyaga.ru/pages/photos/Russia/Barneo%20Camp%20Russia%201527668862(www.brodyaga.com).jpg" alt='Нет фотографии' />
        </div> */}
        <div>
 
            
            <div>
            <img className={ProfileCSS.Avatar} src={props.profile.photos.large || userPhoto}  alt='Фотография не загружена' />
            </div>
            {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            <ProfileStatusWithHooks status = {props.status} updateStatus= {props.updateStatus}/>
            {editMode 
            ? <ProfileDataForm initialValues={props.profile} profile= {props.profile} onSubmit={onSubmit}/> 
            :<ProfileData profile = {props.profile} isOwner={props.isOwner} goToEditMode={() => seteditMode(true)}/>}
   </div>
    </div>
    );
}



const ProfileData = ({profile,isOwner, goToEditMode}) => {
   return <> {isOwner && <div><button onClick={goToEditMode}> Редактировать профиль</button> </div>}
          <div> <span> Я {profile.fullName}  </span>  </div>
   <span>  Обо мне: {profile.aboutMe}  </span>
    <div>
        <b>Ищу работу</b>: {profile.lookingForAJob ? "yes" : "no "}
    </div>
    { profile.lookingForAJob &&
    <div>
        <b>Мой скилл</b>: {profile.lookingForAJobDescription}
    </div>
    }
     <div> Contacts: {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} /> })}
        </div>

    </>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={ProfileCSS.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;