import React, { Component } from 'react'
import Park from '../components/Park'
import {connect} from 'react-redux'

class FavoriteParks extends Component {

  render() {

    console.log(this.props.favoriteParks)

    const renderParks = this.props.favoriteParks.map((park, index) => <Park key={park.id} park={park}/>)

    return (
      <div>{renderParks}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteParks: state.users.favorites
  }
}

export default connect(mapStateToProps)(FavoriteParks)
