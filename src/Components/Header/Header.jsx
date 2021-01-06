import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderCSS from './Header.module.css';
//import Logo from '../../../public/logo.jpg';
const Header = (props) => {
    return (
        <header className={HeaderCSS.header}>
            <div className={HeaderCSS.backHeader}>
            <img className={HeaderCSS.logo} src="/logo.png" alt="no download"/>
            <div className = {HeaderCSS.loginBlock}>
                {props.isAuth 
                ? <div> {props.login} <button onClick={props.logout}>Выход</button> </div>
                : <NavLink to={'/login'}>Логин </NavLink> }
            </div>
            </div>
           
        </header>
    );
}
export default Header;