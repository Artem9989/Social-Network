import { usersAPI } from '../api/api';
import {updateObjectInArray } from './utils/validators/objects-helpers'

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_USERS = 'SET_USERS';
let SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
let TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
let TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

let initialState = {
    users: [],
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    FollowingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage };
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                FollowingInProgress: action.isFetching
                    ? [...state.FollowingInProgress, action.userId]
                    : state.FollowingInProgress.filter(id => id !== action.userId)
            }
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray( state.users, action.userId, "id" , {followed: true})
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return { ...u, followed: true }
                //     }
                //     return u;
                // })

            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray( state.users, action.userId, "id" , {followed: false})
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return { ...u, followed: false }
                //     }
                //     return u;
                // })

            };
        }
        case SET_USERS: {
            return { ...state, users: action.users }// users: action.users [...state.users, action.users]
        }
        default:
            return state;
    }

}

export const SetCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const SetTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const FollowSuccess = (userId) => ({ type: FOLLOW, userId });
export const UnFollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const ToggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const ToggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

// export const requestUsers = (currentPage, pageSize) => {
//     return async (dispatch) => {
//         dispatch(ToggleIsFetching(true));
//         .then(data usersAPI.getUsers(currentPage, pageSize)
//         dispatch(ToggleIsFetching(false));
//         dispatch(setUsers(data.items));
//         dispatch(SetTotalUsersCount(data.totalCount));
//     }
// }

export const requestUsers = (currentPage,pageSize) => {
    return async (dispatch) => {
    dispatch(ToggleIsFetching(true));
   let data = await usersAPI.getUsers(currentPage, pageSize)
            dispatch( ToggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(SetTotalUsersCount(data.totalCount));
}
}

const followUnFollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(ToggleFollowingProgress(true, userId));
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(ToggleFollowingProgress(false, userId));
}

export const Follow = (userId) => {
    return async (dispatch) => {
        followUnFollowFlow(dispatch, userId, usersAPI.Follow.bind(usersAPI), FollowSuccess);
    }
}

export const UnFollow = (userId) => {
    return async (dispatch) => {
        followUnFollowFlow(dispatch, userId, usersAPI.UnFollow.bind(usersAPI), UnFollowSuccess);

        // dispatch(ToggleFollowingProgress(true, userId));
        // let response = apiMethod(userId)
        // if (response.data.resultCode === 0) {
        //     dispatch(actionCreator(userId));
        // }
        // dispatch(ToggleFollowingProgress(false, userId));
    }
}
export default usersReducer;