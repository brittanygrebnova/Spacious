import React, { Component } from 'react'
import ParkDetail from '../components/ParkDetail'
import {connect} from 'react-redux'

class FavoriteParks extends Component {

  render() {

    console.log(this.props.favoriteParks)

    const renderParks = () => {
      if (this.props.favoriteParks) {
        this.props.favoriteParks.map((park, index) => <ParkDetail key={park.id} park={park}/>)
      }
    }

    return (
      <div>{renderParks}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteParks: state.user.currentUser.favorites
  }
}

export default connect(mapStateToProps)(FavoriteParks)
