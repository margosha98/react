let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SET_USERS'

let initialState = {
    users: []
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
            return { ...state, users: [ ...state.users, ...action.users ]}
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

export default userReducer;