import {combineReducers, legacy_createStore as createStore} from 'redux'
import authReducer from './authReducer';
import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import UsersReducer from './usersReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: UsersReducer,
  auth: authReducer,
})

let store = createStore(reducers);

export default store