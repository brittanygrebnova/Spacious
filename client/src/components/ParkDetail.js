import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addParkToUserFavorites } from '../actions/UserActions'

class ParkDetail extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const renderParkDetail = () => {
        if (this.props.selectedPark) {
          return (
          <div className="ui cards">
            <div className="card">
              <div className="content">
                <div className="header">{this.props.selectedPark.name}</div>
                <div className="description">
                  <strong>Description: </strong>{this.props.selectedPark.description}
                </div>
                <div className="description">
                  <strong>States: </strong>{this.props.selectedPark.states}
                </div>
                <div className="description">
                  <strong>Directions: </strong><a href={this.props.selectedPark.directionsUrl} target="_blank">{this.props.selectedPark.directionsUrl}</a>
                </div>
                <div className="description">
                  <strong>Weather: </strong>{this.props.selectedPark.weatherInfo}
                </div>
              </div>
              <div className="ui bottom attached button" onClick={() => this.props.addParkToUserFavorites(this.props.selectedPark, this.props.currentUser)}>
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
