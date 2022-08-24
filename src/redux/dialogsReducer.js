const UPDATE_CHAT_MESSAGE = 'UPDATE-CHAT-MESSAGE'
const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
  messagesList:[
    {id:1, text: 'asdasdad'},
  ],
  dialogsList:[
    {id:1, name: 'Karina'},
    {id:2, name: 'asdasd'},
  ],
  newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
  let stateCopy = {...state}
  switch(action.type){
    case UPDATE_CHAT_MESSAGE:
      stateCopy.newMessageText = {...state.newMessageText}
      stateCopy.newMessageText = action.text;
      return stateCopy
    case ADD_MESSAGE:
      stateCopy.messagesList = [... state.messagesList,{
        id: state.messagesList.length+1,
        text: stateCopy.newMessageText,
      }]
      stateCopy.newMessageText = {...state.newMessageText}
      stateCopy.newMessageText = ''
      return stateCopy
    default:
       return stateCopy
  }
}
export const updateChatMessageCreator = (text) => ({type: UPDATE_CHAT_MESSAGE, text})
export const addChatMessageCreator = () => ({type: ADD_MESSAGE})



export default dialogsReducer