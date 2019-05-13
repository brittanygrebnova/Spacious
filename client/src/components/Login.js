import React, {Component} from "react";
import '../Login.css';
import { fetchUsers, setUser } from '../actions/userActions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class Login extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {

    console.log(this.props.allUsers)

    this.handleClick = (event) => {
      event.preventDefault()
      this.props.setUser(event.target.id)
      console.log(this.props)
    }

    const mapUsersForDropdown = this.props.allUsers.map((user, index) => {
      return (
        <a href="/all" key={user.id} id={user.id} onClick={this.handleClick} name={user.firstname}>
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

const mapStateToProps = (state) => {
  return {
    allUsers: state.user.allUsers,
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchUsers,
  setUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
