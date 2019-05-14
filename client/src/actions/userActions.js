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

export const setUser = id => {
  console.log(id)
  let data = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    fetch (`/api/users/${id}`, data)
    .then(response => {
      return response.json()
    }).then (user => {
      return dispatch({
        type: 'SET_USER',
        payload: user
      })
    })
  }

//create addToFavorites: post request to loggedInUser.favorites
}

export const addParkToUserFavorites = (park, user) => {
  console.log(park, user)
}
