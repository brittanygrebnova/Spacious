import React, { Component } from "react";
import { connect } from "react-redux";
import { selectPark } from "../actions/parkActions";
import "../App.css";
import NoDataHeader from "../components/NoDataHeader";
import { bindActionCreators } from "redux";

class AllParks extends Component {
  render() {
    console.log(this.props);
    if (this.props.allParks && this.props.currentUser) {
      return (
        <div className="ui list">
          {this.props.allParks.map((park, index) => (
            <div className="item" key={park.parkCode}>
              <div className="content">
                <i className="caret up icon" />
                <a
                  className="header"
                  onClick={() => this.props.selectPark(park)}
                >
                  {park.name}
                </a>
                <div className="description">
                  {park.description.substring(0, 75)}...
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    } else if (this.props.currentUser && this.props.selectedState) {
      return <div class="ui active centered inline loader" />;
    } else {
      return (
        <div>
          <NoDataHeader />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    allParks: state.parks.allParks,
    selectedState: state.parks.selectedState,
    currentUser: state.user.currentUser
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectPark
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllParks);
