import React, { Component } from "react";
import NoDataHeader from "../components/NoDataHeader";
import LikeButton from "../components/LikeButton";
import { removeParkFromUserFavorites } from "../actions/userActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class FavoriteParks extends Component {
  render() {
    if (this.props.currentUser) {
      console.log(
        "in favorite parks currentUser.favorites is",
        this.props.currentUser.favorites
      );
      return (
        <div>
          <div className="ui cards">
            {this.props.currentUser.favorites.map((park, index) => (
              <div className="card" key={index}>
                <div className="content">
                  <div className="header">{park.name}</div>
                  <div className="description">
                    <strong>States: </strong>
                    {park.states}
                  </div>
                  <div className="description">
                    <strong>Description: </strong>
                    {park.description}
                  </div>
                  <div className="description">
                    <strong>Web: </strong>
                    <a href={park.url}>{park.url}</a>
                  </div>
                  <LikeButton />
                </div>
                <div
                  className="ui bottom attached button"
                  onClick={() =>
                    this.props.removeParkFromUserFavorites(
                      park,
                      this.props.currentUser
                    )
                  }
                >
                  <i className="add icon" />
                  Remove From Favorites
                </div>
              </div>
            ))}
          </div>
        </div>
      );
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
    currentUser: state.user.currentUser
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removeParkFromUserFavorites
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteParks);
