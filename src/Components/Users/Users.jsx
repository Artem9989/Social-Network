import React from 'react';
import UsersCSS from './UsersCSS.module.css';
import Paginator from '../Common/Paginator/Paginator';
import User from './User';

let Users = ({currentPage,onPageChanged, totalItemsCount, pageSize, users, ...props}) => {



    // let pagesCount = Math.ceil(totalUsersCount / pageSize);
    // let pages = []
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i);
    //     if (i > 40) {
    //         break;
    //     }
    // }




    return (
        <div className={UsersCSS.settings}>
            <Paginator currentPage = {currentPage} onPageChanged={onPageChanged} totalItemsCount ={totalItemsCount} pageSize={pageSize}/>
            {/* <div className={UsersCSS.Page}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && UsersCSS.selectPage}
                        onClick={(e) => { props.onPageChanged(p) }} > |{p}|</span>
                })}
            </div> */}
            <div>
            {
                users.map(u => <User user={u} key={u.id} FollowingInProgress={props.FollowingInProgress} Follow={props.Follow} UnFollow={props.UnFollow}/> )
            }
            </div>
        </div>
    )
}

export default Users;