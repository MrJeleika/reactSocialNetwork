import {combineReducers, legacy_createStore as createStore} from 'redux'
import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import UsersReducer from './usersReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: UsersReducer,
})

let store = createStore(reducers);

export default store