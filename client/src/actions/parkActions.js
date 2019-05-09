import fetch from 'isomorphic-fetch'

export function fetchParks(dispatch) {
  const apiKey = 'wKNLKokoUQpza8hntMcGzdtVxYVKZbhETAxDBiAD'
  return (dispatch) => {
    dispatch({ type: 'LOADING_PARKS' });
    return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=&api_key=${apiKey}`)
    .then(response => {
      return response.json()
    }).then(parks => {
     return dispatch({ type: 'FETCH_PARKS', payload: parks.data })
   }, () => console.log(this.state.allParks))
  }
}
