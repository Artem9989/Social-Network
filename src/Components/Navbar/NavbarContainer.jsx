// import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
// import { friendsNav } from '../../redux/siteBar-reducer';



const mapStateToProps = (state) => {
    return {
        friendsNav: state.siteBarPage.friendsNav,
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {

    }   
}

const NavbarContainer = connect (mapStateToProps,mapDispatchToProps) (Navbar);
export default NavbarContainer;