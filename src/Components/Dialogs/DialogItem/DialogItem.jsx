import React from 'react';
import DialogsCSS from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  //  let path ='/dialogs/' + props.id;
    return ( <div className={DialogsCSS.dialogActive}>
      <img  alt = 'нет фото' className={DialogsCSS.DialogAvatar} src='https://vraki.net/sites/default/files/inline/images/1551511784_4.jpg' />
        <NavLink to={'/dialogs/' + props.id} activeClassName={DialogsCSS.dialog}> {props.name} </NavLink>
    </div>
    );
}
export default DialogItem;