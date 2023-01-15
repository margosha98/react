import { addNewPostActionCreator , deletePostActionCreator, profileReducer} from "../profile-reducer"


it('array length is correct', () => {
    let state = {
        posts: [
            {id: 0, message: 'Hello, it is my first post!', likes: 6},
            {id: 1, message: 'I like pizza!', likes: 100},
          ],
        newPostText: 'it-k',
        userProfile: null,
        userStatus: 'ok'
    }
    let action = addNewPostActionCreator('new post')

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})

it(`message of new post is 'new post'`, () => {
    let state = {
        posts: [
            {id: 0, message: 'Hello, it is my first post!', likes: 6},
            {id: 1, message: 'I like pizza!', likes: 100},
          ],
        newPostText: 'it-k',
        userProfile: null,
        userStatus: 'ok'
    }
    let action = addNewPostActionCreator('new post')

    let newState = profileReducer(state, action)
    expect(newState.posts[2].message).toBe('new post')
})

it(`length of array is decremented'`, () => {
    let state = {
        posts: [
            {id: 0, message: 'Hello, it is my first post!', likes: 6},
            {id: 1, message: 'I like pizza!', likes: 100},
          ],
        newPostText: 'it-k',
        userProfile: null,
        userStatus: 'ok'
    }
    let action = deletePostActionCreator(1)

    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(1)
})

