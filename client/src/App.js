import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchParks } from './actions/parkActions'
import ParkList from './containers/ParkList'


class App extends Component {

  componentDidMount() {
    this.props.fetchParks()
  }

  render() {
    return (
      <div className="App">
        <ParkList />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchParks: () => dispatch(fetchParks())
  }
}


export default connect(null, mapDispatchToProps) (App)
