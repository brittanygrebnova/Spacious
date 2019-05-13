import React, { Component } from 'react'
import './App.css'
import Login from './components/login'
import ParkDetail from './components/ParkDetail'
import AllParks from './containers/allParks';
import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

class App extends Component {

  render() {

    return(
      <Router history={history}>
        <div id="login">
          <Login />
        </div><br/>
        <div id="all-parks">
          <AllParks />
        </div><br/>
        <div id="park-detail">
          <ParkDetail />
        </div>
      </Router>
    )
  }
}


export default App
