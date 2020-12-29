import React from 'react';
import { connect } from 'react-redux';
import { Follow, UnFollow, SetCurrentPage, ToggleFollowingProgress, requestUsers } from '../../redux/Users-reducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import {withAuthRedirect } from '../../HOC/withAuthRedirect'
import { compose } from 'redux';
import  { getUsersSuperSelector, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getIsAuth } from '../../redux/users-selector';


class UsersContainer extends React.Component {



    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
        // this.props.ToggleIsFetching(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.ToggleIsFetching(false);
        //         this.props.setUsers(data.items)
        //         this.props.SetTotalUsersCount(data.totalCount)
        //     });
    }



    onPageChanged = (pageNumber) => {

        this.props.requestUsers(pageNumber, this.props.pageSize);
         this.props.SetCurrentPage(pageNumber)
        // this.props.ToggleIsFetching(true);
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.ToggleIsFetching(false);
        //         this.props.setUsers(data.items)
        //     });
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null}
            <Users totalItemsCount={this.props.totalItemsCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                UnFollow={this.props.UnFollow}
                Follow={this.props.Follow}
                users={this.props.users}
                FollowingInProgress = {this.props.FollowingInProgress}
            />
        </>
    }

}


/*const mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        FollowingInProgress: state.UsersPage.FollowingInProgress,
        isAuth: state.auth.isAuth,
    }
}*/
const mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector (state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        FollowingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state),
    }
}


/*const mapDispatchToProps = (dispatch) => {
    return {
        Follow: (userId) => {
            dispatch(FollowAC(userId));
        },
        UnFollow: (userId) => {
            dispatch(UnFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(SetCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(SetTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(ToggleIsFetchingAC(isFetching))
        }
    }
}*/
// let AuthRedurectComponent = withAuthRedirect(UsersContainer);


export default compose(connect(mapStateToProps,
    {
        Follow,
        UnFollow,
        // setUsers,
        SetCurrentPage,
        // SetTotalUsersCount,
        // ToggleIsFetching,
        ToggleFollowingProgress,
        requestUsers
    }),withAuthRedirect)(UsersContainer);

// connect(mapStateToProps,
//     {
//         Follow,
//         UnFollow,
//         // setUsers,
//         SetCurrentPage,
//         // SetTotalUsersCount,
//         // ToggleIsFetching,
//         ToggleFollowingProgress,
//         getUsers
//     })(AuthRedurectComponent);