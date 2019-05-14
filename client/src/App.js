import React, { Component } from 'react'
import Login from './components/Login'
import ParkDetail from './components/ParkDetail'
import AllParks from './containers/AllParks';
import StateDropdown from './components/StateDropdown'
import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

class App extends Component {

  render() {

    return(
      <div>
        <div>
          <h1 className="header">Spacious</h1>
          <h2 className="header">Discover America's National Parks</h2>
        </div>
          <div className="ui grid">
            <div className="eight wide column">
              <Login />
            </div>
            <div className="eight wide column">
              <StateDropdown />
            </div>
          </div>
        <div className="ui grid">
          <div className="eight wide column">
            <AllParks />
          </div>
          <div className="eight wide column">
            <ParkDetail />
          </div>
        </div>
      </div>
    )
  }
}


export default App
