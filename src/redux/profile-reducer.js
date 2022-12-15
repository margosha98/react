const addNewPost = 'ADD-NEW-POST'
const updatePostText = 'UPDATE-POST-TEXT'

let initialState = {
    posts: [
        {id: 0, message: 'Hello, it is my first post!', likes: 6},
        {id: 1, message: 'I like pizza!', likes: 100},
      ],
    newPostText: 'it-k'
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