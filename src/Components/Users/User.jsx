import React from 'react';
import UsersCSS from './UsersCSS.module.css';
import userPhoto from '../../assets/images/Avatar_Custome.jpg';
import { NavLink } from 'react-router-dom';

let User = ({user,FollowingInProgress, UnFollow, Follow}) => {

    return (
                <div>
                    <span>
                        <div>
                            <NavLink to={/profile/ + user.id}>
                                <img  alt = 'нет фото' className={UsersCSS.UserPhoto} src={user.photos.small != null ? user.photos.small : userPhoto}>
                                </img>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed?
                             <button disabled = {FollowingInProgress.some(id => id === user.id)} onClick={() => {
                                UnFollow(user.id);
                                }} >Отписаться</button>

                                : <button disabled = {FollowingInProgress.some(id => id === user.id)} onClick={() => {
                                    Follow(user.id);
                                }} >Подписаться </button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <span>
                                <div> Имя: {user.name}</div>
                                <div>Статус: {user.status}</div>
                            </span>
                            <span>
                                <div>Город: Уфа</div>
                                <div>Страна: Россия </div>
                                {/* <div>Город: Уфа</div> {"user.location.city"}
                            <div>Страна: Россия </div> {"user.location.country"} */}
                            </span>
                        </span>
                    </span>
                </div>)
}

export default User;