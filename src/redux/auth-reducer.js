import { stopSubmit } from 'redux-form';
import { authAPI, securityAPI } from '../api/api';

let SET_USER_DATA = 'network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null, // Если капчи нет, то не обязательна
    //  isFetching: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }

}

export const SetAuthUserData = (id, login, email, isAuth) => ({ type: SET_USER_DATA, payload: { id, login, email, isAuth } })
export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } })

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(SetAuthUserData(id, login, email, true));
    }
};


export const login = (email, password, rememberMe, captcha) => async (dispatch) => {

    let response = await authAPI.login(email, password, rememberMe, captcha)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Ошибка"
        dispatch(stopSubmit("login", { _error: message }));
    }
}
export const getCaptchaUrl = () => async (dispatch) => {

    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(SetAuthUserData(null, null, null, false))
    }
}

export default authReducer;