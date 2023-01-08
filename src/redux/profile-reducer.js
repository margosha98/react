import {profileAPI} from '../api/api'

const addNewPost = 'ADD-NEW-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
    posts: [
        {id: 0, message: 'Hello, it is my first post!', likes: 6},
        {id: 1, message: 'I like pizza!', likes: 100},
      ],
    newPostText: 'it-k',
    userProfile: null,
    userStatus: ''
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addNewPost: {
            let newPost = {
                id:3,
                message: action.post,
                likes: 8
              };
            return {
                ...state,
                posts : [...state.posts, newPost],
                newPostText: '',
            }
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile : action.userProfile
                }
        case SET_USER_STATUS: 
            return {
                ...state,
                userStatus: action.userStatus
            }
        default:
            return state;
    }
}

export const addNewPostActionCreator = (post) => ({
    type: addNewPost, post
  })

export const setUserProfile = (userProfile) => ({
    type: SET_USER_PROFILE, userProfile
})

export const setUserStatus = (userStatus) => ({
    type: SET_USER_STATUS, userStatus
})


export const getUserProfileThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId).then(data => {
            dispatch(setUserProfile(data));
             //dispatch(setUsersCount(data.totalCount))
         })
                            
    }
} 

export const getUserStatusThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId).then( data => {
            dispatch(setUserStatus(data))
        })
    }
}

export const updateUserStatusThunk = (userStatus) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(userStatus).then( data => {
            if (data.resultCode === 0) {
                dispatch(setUserStatus(userStatus))
            }
        })
    }
}