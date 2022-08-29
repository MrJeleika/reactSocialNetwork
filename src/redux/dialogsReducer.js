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
  switch(action.type){
    case UPDATE_CHAT_MESSAGE:
      return{
        ...state,
        newMessageText: action.text
      }
    case ADD_MESSAGE: 
      return{
        ...state,
        messagesList: [...state.messagesList,{
          id: state.messagesList.length+1,
          text: state.newMessageText
        }],
        newMessageText: ''
      }
    default:
       return state
  }
}
export const updateChatMessageCreator = (text) => ({type: UPDATE_CHAT_MESSAGE, text})
export const addChatMessageCreator = () => ({type: ADD_MESSAGE})



export default dialogsReducer