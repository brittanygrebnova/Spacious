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

export const signupUser = (user) => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
  }

  return dispatch => {
    fetch(`/api/signup`, data)
      .then(response => response.json())
      .then(user => {

        dispatch({
          type: 'SET_USER',
          payload: user
        })

        callback()
      })
      .catch(err => err)
  }
}

export const fetchUser = () => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }

  return dispatch => {
    fetch(`/api/user`, data)
      .then(response => response.json())
      .then(user => {
        dispatch({
          type: 'SET_USER',
          payload: user
        })
      })
      .catch(err => err)
  }
}
