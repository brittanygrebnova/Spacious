const initialState = {
  current: {},
  all: [],
  favorites: []
}

export default function parksReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_PARKS':
      return { ...state, all: action.payload }
    case 'ADD_TO_FAVORITES':
      return { ...state, favorites: [...state.favorites, action.payload] }
    case 'REMOVE_FROM_FAVORITES':
      return { ...state, favorites: state.favorites.filter(park => park.id !== action.payload.id) }
    default: return state
  }
}
