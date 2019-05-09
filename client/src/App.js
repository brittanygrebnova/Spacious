import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchParks } from './actions/parkActions'
import AllParks from './containers/AllParks'
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
            <ul>
              <li>
                <Link to="/">All Parks</Link>
              </li>
              <li>
                <Link to="/favorites">Your Favorites</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={AllParks} />
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
