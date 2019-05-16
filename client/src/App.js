import React, { Component } from 'react'
import Home from './containers/Home'
import ParkDetail from './components/ParkDetail'
import AllParks from './containers/AllParks';
import StateDropdown from './components/StateDropdown'
import createHistory from 'history/createBrowserHistory';
import Navbar from './components/Navbar'
import FavoriteParks from './components/FavoriteParks'
import { BrowserRouter, Route } from 'react-router-dom';

const history = createHistory();

const App = () => {

    return(
      <div>
        <div>
          <BrowserRouter>
            <React.Fragment>
              <Route>
                <Navbar />
              </Route>
              <Route exact path="/" component={Home}/>
              <Route exact path="/all" component={AllParks}/>
              <Route exact path="/favorites" component={FavoriteParks}/>
            </React.Fragment>
          </BrowserRouter>
        </div>
      </div>
    )

}


export default App
