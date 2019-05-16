import React, { Component } from 'react'
import Login from '../components/Login'
import HomeHeader from '../components/HomeHeader'
import StateDropdown from '../components/StateDropdown'
import { selectPark } from '../actions/ParkActions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

const Home = () => {

    return (
      <div>
        <div>
          <HomeHeader/>
        </div>
        <div className="ui two column grid">
          <div className="column">
            <Login/>
          </div>
          <div className="column">
            <StateDropdown/>
          </div>
        </div>
      </div>
    )

}

export default Home
