import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { fetchUsers } from './actions/userActions'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    return(
      <Login allUsers={this.props.allUsers} setUser={this.props.setUser}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allUsers: state.user.allUsers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    setUser: () => dispatch(setUser())
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (App)
