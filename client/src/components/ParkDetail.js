import React from 'react'
import { connect } from 'react-redux'

const ParkDetail = (props) => {

  console.log(props)

  const renderParkDetail = () => {
      if (props.selectedPark) {
        return (
        <div className="ui cards">
          <div className="card">
            <div className="content">
              <div className="header">{props.selectedPark.name}</div>
              <div className="description">
                <strong>Description: </strong>{props.selectedPark.description}
              </div>
              <div className="description">
                <strong>States: </strong>{props.selectedPark.states}
              </div>
              <div className="description">
                <strong>Directions: </strong><a href={props.selectedPark.directionsUrl} target="_blank">{props.selectedPark.directionsUrl}</a>
              </div>
              <div className="description">
                <strong>Weather: </strong>{props.selectedPark.weatherInfo}
              </div>
            </div>
            <div className="ui bottom attached button" onClick={() => this.props.addToFavorites()}>
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
    selectedPark: state.parks.selectedPark
  }
}


export default connect(mapStateToProps)(ParkDetail)
