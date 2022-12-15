

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
      ],
    newTextMessage: 'okey'
}

export const dialogsReducer = (state = initialState,action) => {
    switch (action.type) {
        case addNewMessage: {
          let newMessage = {
              id:5,
              message: state.newTextMessage,
          };
          return {
              ...state,
              messages: [...state.messages, newMessage],
              newTextMessage: ''
          }
        }
        case updateTextMessage: {
            return {
              ...state,
              newTextMessage: action.text,
            }
        }
        default:
            return state;
    }
}

export const addNewMessageCreator = () => ({
    type: addNewMessage
  })
  
export const updateTextMessageCreator = (text) => ({
    type: updateTextMessage, text: text
})
