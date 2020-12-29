import React from 'react';
import UsersCSS from './UsersCSS.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/Avatar_Custome.jpg';


const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            });
        }
    }

    return (
        <div className={UsersCSS.settings}>
            <button onClick={getUsers}> Получить Пользователей</button>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img alt = 'нет фото' className={UsersCSS.UserPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}>
                            </img>
                        </div>
                        <div>
                            {u.Followed
                                ? <button onClick={() => { props.UnFollow(u.id) }} >Отписаться</button>
                                : <button onClick={() => { props.Follow(u.id) }} >Подписаться </button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <span>
                                <div> Имя: {u.name}</div>
                                <div>Статус: {u.status}</div>
                            </span>
                            <span>
                                <div>Город: Уфа</div>
                                <div>Страна: Россия </div>
                                {/* <div>Город: Уфа</div> {"u.location.city"}
                                <div>Страна: Россия </div> {"u.location.country"} */}
                            </span>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;