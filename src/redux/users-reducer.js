import {
    userAPI
} from './../api/api'

let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SET_USERS'
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
let SET_USERS_COUNT = 'SET_USERS_COUNT'
let IS_FETCH_LOADING = 'IS_FETCH_LOADING'
let IS_FETCH_TOGGLE_BUTTON = 'IS_FETCH_TOGGLE_BUTTON'

let initialState = {
    users: [],
    currentPage: 3,
    totalUsers: 30,
    pageSize: 10,
    isLoading: false,
    isToggle: [],

}

let userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (action.idUser === user.id) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return {
                        ...user
                    }
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (action.idUser === user.id) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return {
                        ...user
                    }
                })
            };
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_USERS_COUNT: {
            return {
                ...state,
                totalUsers: action.totalUsers
            }
        }
        case IS_FETCH_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case IS_FETCH_TOGGLE_BUTTON: {
            return {
                ...state,
                isToggle: (
                    action.isToggle ? [...state.isToggle, action.id] :
                    state.isToggle.filter(id => id !== action.id)

                )
            }
        }



        default:
            return state;
    }
}

export const toFollow = (id) => {
    return {
        type: FOLLOW,
        idUser: id
    }
}

export const toUnfollow = (id) => {
    return {
        type: UNFOLLOW,
        idUser: id
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setUsersCount = (totalUsers) => {
    return {
        type: SET_USERS_COUNT,
        totalUsers
    }
}

export const isFetchLoading = (isLoading) => {
    return {
        type: IS_FETCH_LOADING,
        isLoading
    }
}

export const isFetchToogleButton = (isToggle, id) => {
    return {
        type: IS_FETCH_TOGGLE_BUTTON,
        isToggle,
        id
    }
}


export const getUsersThunk = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(isFetchLoading(true))
        userAPI.getUsers(pageSize, currentPage).then(data => {
            dispatch(isFetchLoading(false))
            dispatch(setUsers(data.items));
            dispatch(setUsersCount(data.totalCount))
        })
    }
}

export const toUnfollowThunk = (userId) => async (dispatch) => {

    dispatch(isFetchToogleButton(true, userId))
    let data = await userAPI.toUnfollowRequest(userId)
    if (data.resultCode === 0) {
        dispatch(toUnfollow(userId))
    }
    dispatch(isFetchToogleButton(false, userId))

}

export const toFollowThunk = (userId) => async (dispatch) => {

    dispatch(isFetchToogleButton(true, userId))
    let data = await userAPI.toFollowRequest(userId)
    if (data.resultCode === 0) {
        dispatch(toFollow(userId))
    }
    dispatch(isFetchToogleButton(false, userId))

}



window.state = initialState;
export default userReducer;