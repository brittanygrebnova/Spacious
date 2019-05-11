import React, { Component } from 'react'
import Park from '../components/park'
import {connect} from 'react-redux'
import '../App.css'
import { fetchParks } from '../actions/parkActions'
import Login from '../components/login'
import FavoriteParks from '../containers/favoriteParks'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AllParks extends Component {

  componentDidMount() {
    this.props.fetchParks()
  }

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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchParks: () => dispatch(fetchParks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllParks)
