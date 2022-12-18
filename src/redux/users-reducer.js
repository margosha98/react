
let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SET_USERS'
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
let SET_USERS_COUNT = 'SET_USERS_COUNT'

let initialState = {
    users: [],
    currentPage: 3,
    totalUsers: 20,
    pageSize: 7,

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

        default:
            return state;
    }
}

export const FollowAC = (id) => {
    return {type: FOLLOW, idUser: id}
}

export const UnfollowAC = (id) => {
    return { type: UNFOLLOW, idUser:id}
}

export const setUsersAC = (users) => {
    return { type: SET_USERS, users}
}

export const setCurrentPageAC = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage}
}

export const setUsersCountAC = (totalUsers) => {
    return { type: SET_USERS_COUNT, totalUsers}
}




window.state = initialState;
export default userReducer;