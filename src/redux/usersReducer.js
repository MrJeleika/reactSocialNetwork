const FOLLOW = 'FOLLOW'
const LOAD_USERS = 'LOAD-USERS'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_FETCHING = 'TOGGLE-FETCHING'

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 100,
    loadedUsers: 4,
    currentPage: 1,
    isFetching: false,
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
    default:
      stateCopy = {...state}
      return stateCopy
  }
}

export const loadUsersAC = () => ({type:LOAD_USERS})
export const followAC = (id) => ({type: FOLLOW, id})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAc = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleFetchingAC = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})

export default UsersReducer;
