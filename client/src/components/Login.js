import React, { Component } from "react";
import "../Login.css";
import { fetchUsers, setUser } from "../actions/userActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Login extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  handleChange(event) {
    console.log(event.target.value);
    this.props.setUser(event.target.value);
  }

  render() {
    console.log(this.props.allUsers);

    const mapUsersForDropdown = this.props.allUsers.map((user, index) => {
      return (
        <option value={user.id} key={user.id} id={user.id}>
          {user.firstname} {user.lastname}
        </option>
      );
    });

    const sayHiToCurrentUser = () => {
      console.log(this.props.currentUser);
      if (this.props.currentUser) {
        const username = this.props.currentUser.firstname;
        return (
          <div className="ui blue message">
            <div className="header">Welcome back, {username}!</div>
            <p>
              You can navigate to All Parks to find new parks or go to Favorites
              to see your list of saved parks
            </p>
          </div>
        );
      }
    };

    return (
      <div>
        <select
          className="ui search dropdown"
          onChange={e => this.handleChange(e)}
        >
          <option value="">Find Your Name</option>
          {mapUsersForDropdown}
        </select>
        <br />
        <div>{sayHiToCurrentUser()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allUsers: state.user.allUsers,
    currentUser: state.user.currentUser
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchUsers,
      setUser
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
