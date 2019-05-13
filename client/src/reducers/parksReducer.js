const initialState = {
  loading: false,
  selectedPark: null,
  allParks: [],
}

export default function parksReducer(state = initialState, action) {
  switch(action.type) {
    case 'LOADING_PARKS':
      return { ...state, loading: true }
    case 'FETCH_PARKS':
      return { ...state, loading: false, allParks: action.payload }
    case 'PARK_SELECTED':
      return { ...state, loading: false, selectedPark: action.payload}
    default: return state
  }
}
