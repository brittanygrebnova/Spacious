import fetch from 'isomorphic-fetch'

export const fetchUsers = stateCode => {
  console.log(stateCode)
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
}

export const addParkToUserFavorites = (selectedPark, user) => {
  let id = user[0].id
  let data = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ park: selectedPark })
  }

  return dispatch => {
    fetch (`/api/users/${id}/add_to_favorites`, data)
      .then(response => response.json())
      .then(park => dispatch({
        type: 'ADD_TO_FAVORITES',
        payload: park
      }))
  }
}

export const removeParkFromUserFavorites = (selectedPark, user) => {
  let id = user[0].id
  let data = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ park: selectedPark })
  }

  return dispatch => {
    fetch (`/api/users/${id}/remove_from_favorites`, data)
      .then(response => response.json())
      .then(park => dispatch({
        type: 'REMOVE_FROM_FAVORITES',
        payload: park
      }))
  }
}
