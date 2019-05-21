import React, { Component } from 'react'
import Login from '../components/Login'
import HomeHeader from '../components/HomeHeader'
import { selectPark } from '../actions/parkActions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

const Home = () => {

    return (
      <div>
        <div>
          <HomeHeader/>
        </div>
        <div class="ui section divider"></div>
        <div className="column">
          <Login/>
        </div>
      </div>
    )

}

export default Home
