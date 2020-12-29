import { createSelector } from "reselect";

export const getUsers = (state) => {
    return state.UsersPage.users;
}

export const getUsersSelector = (state) => {
    return getUsers(state).filter(u => true);
}

export const getUsersSuperSelector =  createSelector(getUsers, (users) => {
   return users.filter(u => true);
});


export const getPageSize = (state) => {
    return state.UsersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.UsersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.UsersPage.currentPage;
}
export const getIsFetching= (state) => {
    return state.UsersPage.isFetching;
}
export const getFollowingInProgress = (state) => {
    return state.UsersPage.FollowingInProgress;
}
export const getIsAuth = (state) => {
    return state.auth.isAuth;
}

// сложный селектор с for, math m большие массивы. каунт ретурн