const initialState = {
  currentUser: {},
  currentUserFavorites: []
}

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_USER':
      return { ...state, currentUser: action.payload }
    case 'ADD_TO_FAVORITES':
      return { ...state, currentUserfavorites: [...state.currentUserfavorites, action.payload] }
    case 'REMOVE_FROM_FAVORITES':
      return { ...state, currentUserfavorites: state.currentUserfavorites.filter(park => park.id !== action.payload.id) }
    default: return state
  }
}
