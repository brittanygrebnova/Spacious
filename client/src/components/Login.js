import React, {Component} from "react";
import '../Login.css'

class Login extends Component {

  render() {

    console.log(this.props.allUsers)

    const mapUsersForDropdown = this.props.allUsers.map((user, index) => <a href="#" key={user.id}>{user.firstname} {user.lastname}</a>)

    return (
      <div class="center-dropdown">
      <h1>SPACIOUS</h1>
        <div class="dropdown">
          <button class="dropbtn">Choose Your Username</button>
          <div class="dropdown-content">
            {mapUsersForDropdown}
          </div>
        </div>
      </div>
    )
  }
}

export default Login
