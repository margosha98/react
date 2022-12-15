import {combineReducers, legacy_createStore as createStore} from "redux"; 
import { dialogsReducer } from "./dialogs-reducer";
import { friendsReducer } from "./friends-reducer";
import {musicReducer} from "./music-reducer";
import { profileReducer } from "./profile-reducer";
import userReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogPage : dialogsReducer,
    usersPage: userReducer,
    musicPage: musicReducer,
    // navbar : friendsReducer
})

let store = createStore(reducers);


export default store;