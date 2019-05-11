import React, {Component} from "react";
import '../Login.css';
import Home from '../containers/home';
import { withRouter } from 'react-router';

class Login extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {

    console.log(this.props.allUsers)

    this.handleClick = (event) => {
      event.preventDefault()
      this.props.setUser(event.target.id)
      this.props.history.push('/all')
    }

    const mapUsersForDropdown = this.props.allUsers.map((user, index) => {
      return (
        <a href="/all" key={user.id} id={user.id} onClick={this.handleClick}>
          {user.firstname} {user.lastname}
        </a>
      )
    })

    return (
      <div className="center-dropdown">
      <h1>SPACIOUS</h1>
        <div className="dropdown">
          <button className="dropbtn">Choose Your Username</button>
          <div className="dropdown-content">
            {mapUsersForDropdown}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
