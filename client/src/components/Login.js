import React, {Component} from "react";
import '../Login.css';
import { fetchUsers, setUser } from '../actions/UserActions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class Login extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  handleChange(event) {
    console.log(event.target.value)
    this.props.setUser(event.target.value)
  }

  render() {

    console.log(this.props.allUsers)

    const mapUsersForDropdown = this.props.allUsers.map((user, index) => {
      return (
        <option value={user.id} key={user.id} id={user.id}>
          {user.firstname} {user.lastname}
        </option>
      )
    })

    return (
      <select className="ui search dropdown" onChange={(e) => this.handleChange(e)}>
        <option value="">Find Your Name</option>
        {mapUsersForDropdown}
      </select>
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
