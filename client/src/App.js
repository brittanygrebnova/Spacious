import React, { Component } from 'react'
import Home from './containers/Home'
import AllParksContainer from './containers/AllParksContainer'
import FavoritesContainer from './containers/FavoritesContainer'
import ParkDetail from './components/ParkDetail'
import AllParks from './components/AllParks';
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
              <Route exact path="/all" component={AllParksContainer}/>
              <Route exact path="/favorites" component={FavoritesContainer}/>
            </React.Fragment>
          </BrowserRouter>
        </div>
      </div>
    )

}


export default App
