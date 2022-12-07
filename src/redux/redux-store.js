import {combineReducers, legacy_createStore as createStore} from "redux"; 
import { dialogsReducer } from "./dialogs-reducer";
import { friendsReducer } from "./friends-reducer";
import { profileReducer } from "./profile-reducer";

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogPage : dialogsReducer,
    // navbar : friendsReducer
})

let store = createStore(reducers);


export default store;