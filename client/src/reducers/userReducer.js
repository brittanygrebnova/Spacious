const initialState = {
  loading: false,
  allUsers: [],
  currentUser: null
}

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case 'LOADING_USERS':
      return { ...state, loading: true}
    case 'FETCH_USERS':
      return { ...state, loading: false, allUsers: action.payload}
    case 'RETRIEVING_SELECTED_USER':
      return { ...state, loading: true }
    case 'SET_USER':
      return { ...state, currentUser: state.allUsers.find(user => user.id === action.payload.id) }
    case 'ADD_TO_FAVORITES':
      return { ...state, currentUser: {...state.currentUser, favorites: action.payload }}
    case 'REMOVE_FROM_FAVORITES':
      return { ...state, currentUser: {...state.currentUser, favorites: action.payload }}
    default: return state
  }
}
