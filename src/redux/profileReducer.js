const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE-POST'
const UPDATE_NEW_POST_TITLE = 'UPDATE-NEW-POST-TITLE'
const UPDATE_NEW_POST_BODY = 'UPDATE-NEW-POST-BODY'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState= {
  postList : [
    {id:1, title: "Gay", text: 'asdasdsadasd'},
    {id:2, title: "GAss", text: 'asdasdsadasd'},
    {id:3, title: "GasdasdAss", text: 'asdasdsadasd'},
    {id:4, title: "GAasdasdss", text: 'asdasdsadasd'},
  ],
  newPostTitleText: '',
  newPostBodyText: '',
  profile: null
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
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: {...action.profile}
      }
    default:
      return stateCopy;
  }
}


export const addPost = () => ({type: ADD_POST})
export const deletePost = (id) => ({type: DELETE_POST, id})
export const updateNewPostTitle = (text) => ({type: UPDATE_NEW_POST_TITLE, text})
export const updateNewPostBody = (text) => ({type: UPDATE_NEW_POST_BODY, text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer