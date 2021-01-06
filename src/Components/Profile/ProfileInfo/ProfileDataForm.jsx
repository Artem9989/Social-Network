import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../Common/FormsControls/FormsControls'
import ProfileCSS from './ProfileInfo.module.css';
import LoginCSS from '../../Login/Login.module.css';

const ProfileDataForm = ({handleSubmit,profile, error }) => { 
    return <form onSubmit={handleSubmit}> 
        <div><button > Сохранить</button> </div>
        {error && <div className={LoginCSS.formSummaryError}>
                {error}
            </div>}
        <div>
            <b>ФИО:</b><Field name={"fullName"} placeholder={"Полное имя"} component={Input} />
        </div>
        <div>
            <b>обо мне:</b><Field name={"aboutMe"} placeholder={"О себе"} component={Textarea} />
        </div>
        <div>
            <b>Работа:</b><Field name={"lookingForAJob"} type={"checkbox"} placeholder={"Работа"} component={Input} />
        </div>
        <div>
            <b>Что я умею:</b><Field name={"lookingForAJobDescription"} placeholder={"Мои знания"} component={Textarea} />
        </div>

        <div> <b> Contacts: </b> {Object.keys(profile.contacts).map(key => {
         return <div className={ProfileCSS.contact}>
             <b>{key}: </b> <div>
            <Field name={"contacts." + key} placeholder={key} component={Input} />
        </div>
         </div> 
        })}
         </div> 

    </form>
}

const ProfileDataFormReduxFrom = reduxForm({ form: 'edit-profile' })(ProfileDataForm);

export default ProfileDataFormReduxFrom;