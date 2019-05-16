import React, {Component} from "react";
import '../Login.css';
import { fetchUsers, setUser } from '../actions/UserActions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import StateDropdown from '../components/StateDropdown'

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

    const sayHiToCurrentUser = () => {
      console.log(this.props.currentUser)
      if (this.props.currentUser) {
        const username = this.props.currentUser[0].firstname
        return (
          <div>
            <div>
              <h3>Hey, {username}! Choose A State</h3>
            </div>
            <div>
              <StateDropdown/>
            </div>
          </div>
        )
      }
    }

    return (
      <div>
        <select className="ui search dropdown" onChange={(e) => this.handleChange(e)}>
          <option value="">Find Your Name</option>
          {mapUsersForDropdown}
        </select><br/>
        <div>{sayHiToCurrentUser()}</div>
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
