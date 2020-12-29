import React from 'react';
import MyPostsContainer from './MyPost/MyPostsContainer';
//import ProfileCSS from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {
    return (<div >
        <ProfileInfo profile={props.profile} status ={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer store={props.store}/>
    </div>
    );
}
export default Profile; 