import React, { Component } from 'react'
import {connect} from 'react-redux'
import { fetchParks, selectPark } from '../actions/parkActions'
import '../App.css'
import { bindActionCreators } from 'redux'

class AllParks extends Component {

  //build an onSelectPark function to show park details
  //filter parks by state to reduce load time
  componentDidMount() {
    this.props.fetchParks()
  }

  render() {

    console.log(this.props)

    const renderParksTable = () => {
      return this.props.allParks.map((park, index) => {
        return (
          <tbody key={park.parkCode}>
            <tr>
              <th>{park.name}</th>
            </tr>
            <tr>
              <td>{park.description}</td>
            </tr>
            <tr>
              <td><button onClick={() => this.props.selectPark(park)}>View All Details</button></td>
            </tr>
          </tbody>
        )
      })
    }

    return (
      <div id="parks-table">
        <h1>All The Parks</h1>
          <table id="all-parks">
            {renderParksTable()}
          </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allParks: state.parks.allParks
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchParks,
  selectPark
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AllParks)
