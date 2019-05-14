import React, { Component } from 'react'
import Login from './components/Login'
import ParkDetail from './components/ParkDetail'
import AllParks from './containers/AllParks';
import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

class App extends Component {

  render() {

    return(
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <AllParks />
          </div>
          <div className="column eight wide">
            <ParkDetail />
          </div>
          </div>
        </div>

    )
  }
}


export default App
