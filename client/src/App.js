import React, { Component } from 'react'
import Login from './components/Login'
import ParkDetail from './components/ParkDetail'
import AllParks from './containers/AllParks';
import StateDropdown from './components/StateDropdown'
import createHistory from 'history/createBrowserHistory';
import Navbar from './components/Navbar'
import FavoriteParks from './components/FavoriteParks'
import { BrowserRouter, Route } from 'react-router-dom';

const history = createHistory();

class App extends Component {

  render() {

    return(
      <div>
        <div>
          <BrowserRouter>
            <React.Fragment>
              <Route>
                <Navbar />
              </Route>
              <Route exact path="/" component={Login}/>
              <Route exact path="/all" component={AllParks}/>
              <Route exact path="/favorites" component={FavoriteParks}/>
            </React.Fragment>
          </BrowserRouter>
        </div>
        <div>
          <div>
            <h1 className="header">Spacious</h1>
            <h2 className="header">Discover America's National Parks</h2>
          </div>
            <div className="ui grid">
            </div>
          </div>
        </div>
    )
  }
}


export default App
