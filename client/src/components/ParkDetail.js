import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addParkToUserFavorites } from '../actions/UserActions'

const ParkDetail = ({ selectedPark, currentUser }) => {

  console.log({ selectedPark })

  const renderParkDetail = () => {
      if (selectedPark) {
        return (
        <div className="ui cards">
          <div className="card">
            <div className="content">
              <div className="header">{selectedPark.name}</div>
              <div className="description">
                <strong>Description: </strong>{selectedPark.description}
              </div>
              <div className="description">
                <strong>States: </strong>{selectedPark.states}
              </div>
              <div className="description">
                <strong>Directions: </strong><a href={selectedPark.directionsUrl} target="_blank">{selectedPark.directionsUrl}</a>
              </div>
              <div className="description">
                <strong>Weather: </strong>{selectedPark.weatherInfo}
              </div>
            </div>
            <div className="ui bottom attached button" onClick={() => console.log(currentUser)}>
              <i className="add icon"></i>
              Add To Favorites
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div>
      {renderParkDetail()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedPark: state.parks.selectedPark,
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addParkToUserFavorites
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(ParkDetail)
