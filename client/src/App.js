import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { fetchParks } from './actions/parkActions'
import AllParks from './containers/AllParks'
import Login from './containers/Login'
import FavoriteParks from './containers/FavoriteParks'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {

  componentDidMount() {
    this.props.fetchParks()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to="/">All Parks</Link><br />
            <Link to="/login">Log In</Link><br />
            <Link to="/favorites">Your Favorites</Link>
          </nav>

          <Route path="/" exact component={AllParks} />
          <Route path="/login" exact component={Login} />
          <Route path="/favorites" exact component={FavoriteParks} />
        </div>
      </Router>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchParks: () => dispatch(fetchParks())
  }
}


export default connect(null, mapDispatchToProps) (App)
