import React from 'react';
import DialogsCSS from './Message.module.css';


const Message = (props) => {
    return (
        <div>
            <img  alt = 'нет фото' className={DialogsCSS.AvatarFriends} src='https://w7.pngwing.com/pngs/921/228/png-transparent-comics-dialog-cartoon-s-dialog-clouds-dialog-material-picture-dialog-box-dialog.png' />
            <div className={DialogsCSS.messages}>
               <div className={DialogsCSS.message}> {props.message} </div>
                <div  className={DialogsCSS.MyMessage}> {props.MyMessage} </div>   
            </div>
        </div>
    );
}

export default Message;