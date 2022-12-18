
let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SET_USERS'
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
let SET_USERS_COUNT = 'SET_USERS_COUNT'
let IS_FETCH_LOADING = 'IS_FETCH_LOADING'

let initialState = {
    users: [],
    currentPage: 3,
    totalUsers: 20,
    pageSize: 7,
    isLoading: false,

}

let userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map((user) => {
                    if (action.idUser === user.id) {
                        return {...user, followed: true}
                    }
                    return {...user}
                })
            };
        case UNFOLLOW: 
            return {
                ...state,
                users: state.users.map((user) => {
                    if (action.idUser === user.id) {
                        return {...user, followed: false}
                    }
                    return {...user}
                })
            };
        case SET_USERS: {
            return { ...state, users: [ ...action.users ]}
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }
        case SET_USERS_COUNT: {
            return { ...state, totalUsers: action.totalUsers}
        }
        case IS_FETCH_LOADING: {
            return { ...state, isLoading: action.isLoading}
        }

        default:
            return state;
    }
}

export const toFollow = (id) => {
    return {type: FOLLOW, idUser: id}
}

export const toUnfollow = (id) => {
    return { type: UNFOLLOW, idUser:id}
}

export const setUsers = (users) => {
    return { type: SET_USERS, users}
}

export const setCurrentPage = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage}
}

export const setUsersCount = (totalUsers) => {
    return { type: SET_USERS_COUNT, totalUsers}
}

export const isFetchLoading = (isLoading) => {
    return { type: IS_FETCH_LOADING, isLoading}
}





window.state = initialState;
export default userReducer;