import React, {Component} from "react";

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.props.fetchUsers()
  }
}

// <h1>O beautiful
//     for SPACIOUS skies,
//     for amber waves of grain
// </h1>
// <h3>Find Your Username</h3>
