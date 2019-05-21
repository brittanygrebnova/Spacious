import fetch from 'isomorphic-fetch'

export const fetchParks = (selectedStateCode) => {
  const apiKey = '1TwbjGYfdkH1i5YQynffvD2ZvsEmRNdwcIXmI2h1'
  const parkCode = selectedStateCode
  return (dispatch) => {
    dispatch({ type: 'LOADING_PARKS' });
    return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=&stateCode=${selectedStateCode}&api_key=${apiKey}`)
    .then(response => {
      return response.json()
    }).then(parks => {
     return dispatch({ type: 'FETCH_PARKS', payload: parks.data })
   })
  }
}

export const selectState = (state) => {
  return dispatch => {
    dispatch({
      type: 'STATE_SELECTED',
      payload: state
    })
  }
}

export const selectPark = (park) => {
  return dispatch => {
    dispatch({
      type: 'PARK_SELECTED',
      payload: park
    })
  }
}
