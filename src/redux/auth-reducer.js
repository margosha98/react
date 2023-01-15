import {
    headerAPI
} from '../api/api'
import {
    stopSubmit
} from 'redux-form'

const SET_AUTH_DATA = 'SET_AUTH_DATA'
const TO_BAN_ENTER = 'TO_BAN_ENTER'

let initialState = {
    userId: null,
    email: null,
    password: null,
    isAuth: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                    isAuth: true,
            }
            case TO_BAN_ENTER:
                return {
                    ...state,
                    isAuth: false
                }
                default:
                    return state;
    }
}


export const setAuthData = (userId, login, email) => ({
    type: SET_AUTH_DATA,
    data: {
        userId,
        login,
        email
    }
})

export const toBanEnter = () => ({
    type: TO_BAN_ENTER,
})

export const getUserLoginThunk = () => async (dispatch) => {
    let data = await headerAPI.getLogin()
    if (data.resultCode === 0) {
        let {
            id,
            login,
            email
        } = data.data
        dispatch(setAuthData(id, login, email));
    }
}




export const toLogin = (email, password, rememberMe) => async (dispatch) => {

    let data = await headerAPI.toLoginAPI(email, password, rememberMe)

    if (data.resultCode === 0) {
        let {
            userId,
            email,
            password
        } = data.data
        dispatch(setAuthData(userId, email, password));
    } else {
        let messages = data.messages.length > 0 ? data.messages[0] : 'Common error'
        dispatch(stopSubmit('loginForm', {
            _error: messages
        }))
    }
}



export const toLogout = () => async (dispatch) => {
    let data = await headerAPI.toLogoutAPI()

    if (data.resultCode === 0) {
        dispatch(toBanEnter());
    }
}