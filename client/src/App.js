import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './containers/Home'
import Login from './containers/Login'
import Signup from './containers/Signup'
import ParkList from './containers/ParkList'


const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar component={NavBar} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/parks" component={ParkList} />
      </div>
    </Router>
  );
};

export default App
