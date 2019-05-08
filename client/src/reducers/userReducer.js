const initialState = {
  current: {},
  favorites: []
}

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_USER':
      return { ...state, current: action.payload }
    case 'ADD_TO_FAVORITES':
      return { ...state, favorites: [...state.favorites, action.payload] }
    case 'REMOVE_FROM_FAVORITES':
      return { ...state, favorites: state.favorites.filter(park => park.id !== action.payload.id) }
    default: return state
  }
}
