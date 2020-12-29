import React from 'react';
import FriendsCSS from './Friends.module.css';
//import { NavLink } from 'react-router-dom';
// Модуль создает класс с объектами:
// const NavbarCSS = {
//     'nav': 'Navbar_nav__14I7f',
//     'item': 'Navbar_item__3_yZ-'
// }

// console.log(NavbarCSS);

// let c1 = "active";
// let c2 = "item";

// let classes = c1 + " " + c2;
// let classesNew = `${NavbarCSS.item} ${NavbarCSS.active}`;

const Navbar = (props) => {

    return (
            <div className={FriendsCSS.Friends}>
                <div className={FriendsCSS.Friend}> <img className={FriendsCSS.Avatar} src="https://forumavatars.ru/img/avatars/0019/78/98/627-1590321886.jpg" alt="Нет фото"></img>
                    <div className={FriendsCSS.NameFriends}><a href='s'> {props.friendName} </a>
                    </div>
                </div>
            </div>
    );
}
export default Navbar;