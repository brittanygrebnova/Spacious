import React, {Component} from "react";
import '../Login.css'

class Login extends Component {

  render() {

    console.log(this.props.allUsers)

    this.handleClick = (event) => {
      event.preventDefault()
      history.push("/all")
    }

    const mapUsersForDropdown = this.props.allUsers.map((user, index) => <a href="/all" key={index}  id={user.id}>{user.firstname} {user.lastname}</a>)

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

export default Login
