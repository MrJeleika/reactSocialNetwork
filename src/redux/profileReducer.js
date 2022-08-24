const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE-POST'
const UPDATE_NEW_POST_TITLE = 'UPDATE-NEW-POST-TITLE'
const UPDATE_NEW_POST_BODY = 'UPDATE-NEW-POST-BODY'

let initialState= {
  postList : [
    {id:1, title: "Gay", text: 'asdasdsadasd'},
    {id:2, title: "GAss", text: 'asdasdsadasd'},
    {id:3, title: "GasdasdAss", text: 'asdasdsadasd'},
    {id:4, title: "GAasdasdss", text: 'asdasdsadasd'},
  ],
  newPostTitleText: '',
  newPostBodyText: '',
}

const profileReducer = (state = initialState, action) => {
  let stateCopy = {...state}
  switch (action.type) {
    case ADD_POST:
      stateCopy.postList = [...stateCopy.postList, {
        id: state.postList.length+1,
        title: state.newPostTitleText,
        text: state.newPostBodyText,
      }]
      stateCopy.newPostTitleText = ''
      stateCopy.newPostBodyText = ''
      return stateCopy;
    case DELETE_POST:
      stateCopy.postList = [...state.postList]
      stateCopy.postList.splice(action.id-1,1)
      return stateCopy;
    case UPDATE_NEW_POST_TITLE:
      stateCopy.newPostTitleText = {...state.newPostTitleText}
      stateCopy.newPostTitleText = action.text
      return stateCopy;
    case UPDATE_NEW_POST_BODY:
      stateCopy.newPostBodyText = {...state.newPostBodyText}
      stateCopy.newPostBodyText = action.text
      return stateCopy;
    default:
      return stateCopy;
  }
}


export const addPostCreator = () => ({type: ADD_POST})
export const deletePostCreator = (id) => ({type: DELETE_POST, id})
export const updateNewPostTitleCreator = (text) => ({type: UPDATE_NEW_POST_TITLE, text})
export const updateNewPostBodyCreator = (text) => ({type: UPDATE_NEW_POST_BODY, text})

export default profileReducer