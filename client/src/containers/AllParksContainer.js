import React from 'react'
import ParkDetail from '../components/ParkDetail'
import AllParks from '../components/AllParks';
import StateDropdown from '../components/StateDropdown'

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
