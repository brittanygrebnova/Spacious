import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './containers/Home'
import ParkList from './containers/ParkList'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


const App = (props) => {

  // const isLoggedIn = () => {
  //   !this.props.username = ''
  // }
  return (
    <Router>
      <div>
        <NavBar component={NavBar} />
        <Route exact path="/" component={Home} />
        <Route exact path="/parks" component={ParkList} />
      </div>
    </Router>
  );
};

export default App
