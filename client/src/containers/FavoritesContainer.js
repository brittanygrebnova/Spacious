import React, { Component } from 'react'
import { selectPark } from '../actions/parkActions'
import FavoritesHeader from '../components/FavoritesHeader'
import FavoriteParks from '../components/FavoriteParks'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

const FavoritesContainer = () => {

    return (
      <div>
        <div className="ui four column grid">
          <div>
            <FavoriteParks />
          </div>
        </div>
      </div>
    )

}

export default FavoritesContainer
