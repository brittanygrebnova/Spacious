import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { fetchUsers, setUser } from './actions/userActions'
import Login from './components/login'
import AllParks from './containers/allParks';
import FavoriteParks from './containers/favoriteParks';
import Home from './containers/home'
import { Router } from 'react-router';
import { Route, Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return(
      <Router history={history}>
        <Login allUsers={this.props.allUsers} fetchUsers={this.props.fetchUsers} setUser={this.props.setUser} currentUser={this.props.currentUser}/>
          <nav>
            <Link to="/all">All Parks</Link><br />
            <Link to="/favorites">Your Favorites</Link>
          </nav>
        <Route exact path="/all" component={AllParks} />
        <Route exact path="/favorites" component={FavoriteParks} />
    </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allUsers: state.user.allUsers,
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    setUser: (id) => dispatch(setUser(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (App)
