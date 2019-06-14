import React from 'react'
import Home from './containers/Home'
import AllParksContainer from './containers/AllParksContainer'
import FavoritesContainer from './containers/FavoritesContainer'
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom';

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
