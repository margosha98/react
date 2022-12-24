const addNewPost = 'ADD-NEW-POST'
const updatePostText = 'UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        {id: 0, message: 'Hello, it is my first post!', likes: 6},
        {id: 1, message: 'I like pizza!', likes: 100},
      ],
    newPostText: 'it-k',
    userProfile: null
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addNewPost: {
            let newPost = {
                id:3,
                message: state.newPostText,
                likes: 8
              };
            return {
                ...state,
                posts : [...state.posts, newPost],
                newPostText: '',
            }
        }
        case updatePostText:
            return {
                ...state,
                newPostText : action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile : action.userProfile
                }
        default:
            return state;
    }
}

export const addNewPostActionCreator = () => ({
    type: addNewPost
  })
  
export const onPostChangeActionCreator = (newText) => ({
    type: updatePostText, newText: newText
})

export const setUserProfile = (userProfile) => ({
    type: SET_USER_PROFILE, userProfile
})
