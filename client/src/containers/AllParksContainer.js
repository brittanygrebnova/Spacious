import React, { Component } from 'react'
import { selectPark } from '../actions/parkActions'
import ParkDetail from '../components/ParkDetail'
import AllParks from '../components/AllParks';
import StateDropdown from '../components/StateDropdown'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

const ParksContainer = () => {

    return (
      <div>
        <div>
          <div className="column">
            <StateDropdown/>
          </div>
        </div>
        <div className="ui two column grid">
          <div className="column">
            <AllParks />
          </div>
          <div className="column">
            <ParkDetail />
          </div>
        </div>
      </div>
    )
  }


export default ParksContainer
