import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"; 
import { dialogsReducer } from "./dialogs-reducer";
import { friendsReducer } from "./friends-reducer";
import { authReducer } from "./auth-reducer";
import {musicReducer} from "./music-reducer";
import { profileReducer } from "./profile-reducer";
import userReducer from "./users-reducer";
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import { appReducer } from "./app-reducer";

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogPage : dialogsReducer,
    usersPage: userReducer,
    musicPage: musicReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
    // navbar : friendsReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;