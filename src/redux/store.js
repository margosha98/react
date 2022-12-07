// import {profileReducer} from './profile-reducer'
// import {dialogsReducer} from './dialogs-reducer'
// import { friendsReducer } from './friends-reducer'


// let store = {
//   _state: {
//     profilePage: {
//       posts: [
//           {id: 0, message: 'Hello, it is my first post!', likes: 6},
//           {id: 1, message: 'I like pizza!', likes: 100},
//         ],
//       newPostText: 'it-k'
//   },
//     dialogPage: {
//       dialogs : [
//           {id: 1 , name: 'Lada'},
//           {id: 2 , name: 'Kolya'},
//           {id: 3 , name: 'Sonya'},
//           {id: 4 , name: 'Arina'},
//         ],
//       messages : [
//           {id: 1, message: 'Hello! How are you?'},
//           {id: 2, message: 'I love you'},
//           {id: 3, message: 'OMG'},
//           {id: 4, message: 'Really?'},
//         ],
//       newTextMessage: 'okey'
//     },
//     navbar: {
//       friends:[
//           {id: 0, name: 'Diana', img: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'}, 
//           {id: 1, name: 'Alisa', img: 'https://cdn-icons-png.flaticon.com/512/194/194938.png'},  
//           {id: 2, name: 'Petr', img: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'},  
//       ]
//     },
//   },
//   rerenderPage() {
//     console.log('statee')
//   },

//   dispatch(action) {
//     profileReducer(this._state.profilePage,action)
//     dialogsReducer(this._state.dialogPage,action)
//     friendsReducer(this._state.dialogPage,action)
    
//     this.rerenderPage(this._state)
    
//   },

//   subscribe(observer) {
//     this.rerenderPage = observer;
//   },
//   getState(){
//     return this._state
//   },
// }

// window.store = store;
// export default store;

