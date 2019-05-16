import React, { Component } from 'react'
import { selectPark } from '../actions/ParkActions'
import ParkDetail from '../components/ParkDetail'
import AllParks from '../components/AllParks';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

const ParksContainer = () => {

    return (
      <div className="ui two column grid">
        <div className="column">
          <AllParks />
        </div>
        <div className="column">
          <ParkDetail />
        </div>
      </div>
    )
  }


export default ParksContainer
