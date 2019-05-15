import React, { Component } from 'react'
import {connect} from 'react-redux'
import { selectPark } from '../actions/ParkActions'
import '../App.css'
import { bindActionCreators } from 'redux'

class AllParks extends Component {

  render() {

    console.log(this.props)

    const renderParksTable = () => {
      return this.props.allParks.map((park, index) => {
        return (
          <div className="item" key={park.parkCode}>
            <div className="content">
              <i className="caret up icon"></i>
              <a className="header" onClick={() => this.props.selectPark(park)}>{park.name}</a>
              <div className="description">{park.description.substring(0, 75)}...</div>
            </div>
          </div>
        )
      })
    }

    return (
      <div className="ui list">
        {renderParksTable()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allParks: state.parks.allParks,
    selectedState: state.parks.selectedState
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  selectPark
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AllParks)
