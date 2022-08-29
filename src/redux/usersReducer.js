const FOLLOW = 'FOLLOW'
const LOAD_USERS = 'LOAD-USERS'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_FETCHING = 'TOGGLE-FETCHING'
const SET_USER_ID = 'SET-USER-ID'

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 100,
    loadedUsers: 4,
    currentPage: 1,
    isFetching: false,
    userId: 2,
}

const UsersReducer = (state = initialState, action) => {
  let stateCopy = ''
  switch (action.type) {
    case SET_USERS: 
      return {
        ...state,
        users: [...action.users],
       
      }
    case LOAD_USERS:
      stateCopy = {...state}
      if(stateCopy.loadedUsers <  stateCopy.users.length){
        stateCopy.loadedUsers += 4;
      }
      return stateCopy
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          return u.id === action.id ? {...u, followed: !u.followed} : u;
        })
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    case TOGGLE_FETCHING:
      return{
        ...state,
        isFetching: action.isFetching
      }
    case SET_USER_ID:
      console.log(action.userId);
      return{
        ...state,
        userId: action.userId
      }

    default:
      stateCopy = {...state}
      return stateCopy
  }
}

export const loadUsers = () => ({type:LOAD_USERS})
export const follow = (id) => ({type: FOLLOW, id})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})
export const setUserId = (userId) => ({type: SET_USER_ID, userId})

export default UsersReducer;
