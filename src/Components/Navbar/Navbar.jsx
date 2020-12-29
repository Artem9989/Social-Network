import React from 'react';
import NavbarCSS from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Friends from './Friends/Friends.jsx'
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
    let friendsElements = props.friendsNav.map (friend => <Friends friendName={friend.friendName} key = {friend.id} id={friend.id} />);
    return (
        <nav className={NavbarCSS.nav}>
            <div className={`${NavbarCSS.item}`}>
                <NavLink to="/profile" activeClassName={NavbarCSS.activeLink}>Мой профиль </NavLink>
            </div>
            <div className={NavbarCSS.item}>
                <NavLink to="/dialogs" activeClassName={NavbarCSS.activeLink}>Сообщения </NavLink>
            </div>
            <div className={NavbarCSS.item}>
                <NavLink to="/news" activeClassName={NavbarCSS.activeLink}>Новости </NavLink>
            </div>
            <div className={NavbarCSS.item}>
                <NavLink to="/music" activeClassName={NavbarCSS.activeLink}>Музыка</NavLink>
            </div>
            <div className={NavbarCSS.item}>
                <NavLink to="/settings" activeClassName={NavbarCSS.activeLink}>Настройки</NavLink>
            </div>
            <div className={NavbarCSS.item}>
                <NavLink to="/users" activeClassName={NavbarCSS.activeLink}>Найти друзей</NavLink>
            </div>
            {friendsElements}
        </nav>
    );
}
export default Navbar;