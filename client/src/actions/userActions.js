import fetch from 'isomorphic-fetch'

export function fetchUsers(dispatch) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USERS' })
    return fetch('/api/users')
    .then(response => {
      return response.json()
    }).then(users => {
      return dispatch({ type: 'FETCH_USERS', payload: users })
    })
  }
}

export const setUser = (user)  => {
  return (dispatch) => {
    dispatch({ type: 'RETRIEVING_SELECTED_USER' })
    return fetch (`/api/users/${user.id}`)
    .then(response => {
      return response.json()
    }).then (user => {
      return dispatch({ type: 'SET_USER', payload: user })
    })
  }
}
