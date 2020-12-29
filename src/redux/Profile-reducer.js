import { profileAPI, usersAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [
        { id: 1, postMessage: 'Привет', likeCount: 12 },
        { id: 2, postMessage: 'Меня зовут Артем', likeCount: 22 },
        { id: 3, postMessage: 'Я люблю React', likeCount: 32 },
        { id: 4, postMessage: 'Я соскучилась', likeCount: 42 },
        { id: 5, postMessage: 'Мур' },
        { id: 6, postMessage: 'Гав гав' }],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };

        case ADD_POST:
            let newPost = {
                id: 5,
                postMessage: action.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId),
            };
        // stateCopy.posts = [...state.posts];
        // stateCopy.posts.push(newPost);
        // stateCopy.newPostText = '';

        case SET_STATUS:
            return { ...state, status: action.status };
        default:
            return state;
    }

}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export const requestStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}

export default profileReducer;