import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';


const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar component={NavBar} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/parks" component={ParkList} />
        <Route exact path="/favorites" component={Favorites} />
      </div>
    </Router>
  );
};

export default App
