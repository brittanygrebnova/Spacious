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
