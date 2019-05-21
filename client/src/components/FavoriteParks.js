import React, { Component } from 'react'
import ParkDetail from '../components/ParkDetail'
import FavoritesHeader from '../components/FavoritesHeader'
import NoDataHeader from '../components/NoDataHeader'
import { removeParkFromUserFavorites } from '../actions/UserActions'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

class FavoriteParks extends Component {

  render() {


      if (this.props.currentUser) {
        console.log('in favorite parks currentUser.favorites is', this.props.currentUserFavorites)
        return (
          <div>
            <div><FavoritesHeader/></div>
            <div className="ui cards">
              {this.props.currentUserFavorites.map((park, index) =>
                  <div className="card" key={park.parkCode}>
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
                    <div className="ui bottom attached button" onClick={() => this.props.removeParkFromUserFavorites(park, this.props.currentUser)}>
                      <i className="add icon"></i>
                      Remove From Favorites
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        }
    else {
      return <div><NoDataHeader /></div>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    currentUserFavorites: state.user.currentUserFavorites
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  removeParkFromUserFavorites
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteParks)
