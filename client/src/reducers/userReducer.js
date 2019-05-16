const initialState = {
  loading: false,
  allUsers: [],
  currentUser: null,
  currentUserFavorites: []
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
      return { ...state, currentUser: state.allUsers.filter(user => user.id === action.payload.id) }
    case 'ADD_TO_FAVORITES':
      return { ...state, currentUserFavorites: [...state.currentUserFavorites, action.payload] }
    case 'REMOVE_FROM_FAVORITES':
      return { ...state, currentUserFavorites: state.currentUserFavorites.filter(park => park.name !== action.payload.name) }
    default: return state
  }
}
