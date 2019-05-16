import React, { Component } from 'react'
import ParkDetail from '../components/ParkDetail'
import FavoritesHeader from '../components/FavoritesHeader'
import {connect} from 'react-redux'

class FavoriteParks extends Component {

  render() {

    console.log(this.props.currentUser)
      if (this.props.currentUser) {
        return (
          <div>
            <div><FavoritesHeader/></div>
            <div className="ui cards">
              {this.props.currentUser[0].favorites.map((park, index) =>
                  <div className="card">
                    <div className="content">
                      <div className="header">{park.name}</div>
                      <div className="description">
                        <strong>Description: </strong>{park.description}
                      </div>
                      <div className="description">
                        <strong>States: </strong>{park.states}
                      </div>
                      <div className="description">
                        <strong>Directions: </strong><a href={park.directionsUrl} target="_blank">{park.directionsUrl}</a>
                      </div>
                      <div className="description">
                        <strong>Weather: </strong>{park.weatherInfo}
                      </div>
                    </div>
                    <div className="ui bottom attached button">
                      <i className="add icon"></i>
                      Add A Review
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        }
      else {
        return null
      }
    }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser
  }
}

export default connect(mapStateToProps)(FavoriteParks)
