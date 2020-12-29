import React, { useState, useEffect } from 'react';
// import ProfileCSS from './ProfileInfo.module.css';
// import Preloader from '../../Common/Preloader/Preloader';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);


    const activateEditMode = () =>{
        setEditMode(true);
    }
    
    const deactivatedEditMode = () => {
        setEditMode(false);
       props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus( e.currentTarget.value);
        
    }

        return (<>
            <div>
                { !editMode &&
                    <span onDoubleClick={activateEditMode}> {props.status || "Нет статуса"}</span>
                }
            </div>
            <div>
                {editMode &&
                    <input onChange={onStatusChange} autoFocus={true} onBlur= {deactivatedEditMode}  value={status}/>
                }
            </div>
        </>);

}
export default ProfileStatusWithHooks;