

const addNewMessage = 'ADD-NEW-MESSAGE'
const updateTextMessage = 'UPDATE-TEXT-MESSAGE'

let initialState = {
    dialogs : [
        {id: 1 , name: 'Lada'},
        {id: 2 , name: 'Kolya'},
        {id: 3 , name: 'Sonya'},
        {id: 4 , name: 'Arina'},
      ],
    messages : [
        {id: 1, message: 'Hello! How are you?'},
        {id: 2, message: 'I love you'},
        {id: 3, message: 'OMG'},
        {id: 4, message: 'Really?'},
      ]
}

export const dialogsReducer = (state = initialState,action) => {
    switch (action.type) {
        case addNewMessage: {
          let newMessage = {
              id:5,
              message: action.message,
          };
          return {
              ...state,
              messages: [...state.messages, newMessage],
          }
        }
        default:
            return state;
    }
}

export const addNewMessageCreator = (message) => ({
    type: addNewMessage, message
  })

