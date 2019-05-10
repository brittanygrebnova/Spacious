import React, {Component} from "react";
import '../Login.css'

class Login extends Component {

  render() {

    console.log(this.props.allUsers)

    // const mapUsersForDropdown = this.props.allUsers.map((user, index) => <a href="#" key={user.id}>user.firstname</a>)

    return (

      <div class="dropdown">
        <button class="dropbtn">Choose Your Username</button>
        <div class="dropdown-content">
          <a href="#">First User</a>
        </div>
      </div>
    )
  }
}

export default Login
