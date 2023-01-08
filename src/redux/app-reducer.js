import { getUserLoginThunk } from "./auth-reducer";

let INITIALIZED_SUCCESS = 'INITIALIZED'

let initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}



export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
})

// export const initializeApp = () => {
//     return (dispatch) => {
//         let promise = dispatch(getUserLoginThunk())

//     promise.all([promise]
//         .then(() => {
//         dispatch(initializedSuccess())
//     }))
                            
//     }
// } 