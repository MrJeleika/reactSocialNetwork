import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"

let store = {
  _state: {
    profilePage:{
      postList : [
        {id:1, title: "Gay", text: 'asdasdsadasd'},
        {id:2, title: "GAss", text: 'asdasdsadasd'},
        {id:3, title: "GasdasdAss", text: 'asdasdsadasd'},
        {id:4, title: "GAasdasdss", text: 'asdasdsadasd'},
      ],
    },
    dialogsPage:{
      messagesList:[
        {id:1, text: 'asdasdad'},
      ],
      dialogsList:[
        {id:1, name: 'Karina'},
        {id:2, name: 'asdasd'},
      ],
      newMessageText: ''
    },
  },
  getState(){
    return this._state
  },
  rerenderEntireTree(){

  },
  subscribe(observer){
    this.rerenderEntireTree = observer;
  },

  dispatch(action){
    this._state.profilePage = profileReducer(this._state.profilePage,action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this.rerenderEntireTree(this._state)
  }
}


export default store