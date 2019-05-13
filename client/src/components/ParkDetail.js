import React from 'react'
import { connect } from 'react-redux'

const ParkDetail = (props) => {
  console.log(props)
  const renderParkDetail = () => {
    return (
      <h1>Selected Park Detail</h1>
    )
  }

  return (
    <div>
      {renderParkDetail()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedPark: state.parks.selectedPark
  }
}


export default connect(mapStateToProps)(ParkDetail)
