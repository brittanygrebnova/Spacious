import fetch from 'isomorphic-fetch'

export function fetchUsers(dispatch) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USERS' });
    return fetch('/api/users')
    .then(response => {
      return response.json()
    }).then(users => {
      return dispatch({ type: 'FETCH_USERS', payload: users })
    }, () => console.log(this.state.user.allUsers))
  }
}

export const loginUser = (user) => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }

  return dispatch => {
    fetch(`/api/users/${user.id}`, data)
      .then(response => response.json())
      .then(userData => {

        dispatch({
          type: 'SET_USER',
          payload: userData
        })
      })
      .catch(err => err)
  }
}
