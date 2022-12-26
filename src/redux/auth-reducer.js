import {headerAPI} from '../api/api'

const SET_AUTH_DATA = 'SET_AUTH_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
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
        default:
            return state;
    }
}


export const setAuthData = (userId, login, email) => ({
    type: SET_AUTH_DATA, data:{userId, login, email}
})

export const getUserLoginThunk = () => {
    return (dispatch) => {
        headerAPI.getLogin().then(data => {
            if (data.resultCode===0) {
                let {id, login, email} = data.data
                dispatch(setAuthData(id, login, email));
            }
        })
                            
    }
} 