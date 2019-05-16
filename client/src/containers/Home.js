import React, { Component } from 'react'
import {connect} from 'react-redux'
import { selectPark } from '../actions/ParkActions'
import '../App.css'
import { bindActionCreators } from 'redux'
import Login from '../components/Login'
import HomeHeader from '../components/HomeHeader'

class Home extends Component {

  render() {
    return (
      <div>
        <div>
          <HomeHeader/>
        </div>
        <div>
          <Login/>
        </div>
      </div>

    )
  }
}

export default Home
