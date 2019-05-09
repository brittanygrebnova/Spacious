import React, { Component } from 'react'
import Park from '../components/Park'
import {connect} from 'react-redux'

class ParkList extends Component {

  render() {

    console.log(this.props.allParks)

    const renderParks = this.props.allParks.map((park, index) => <Park key={park.id} park={park}/>)

    return (
      <div>{renderParks}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allParks: state.parks.allParks
  }
}

export default connect(mapStateToProps)(ParkList)
