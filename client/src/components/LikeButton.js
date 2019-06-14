import React, { Component } from 'react'

class LikeButton extends Component {

  state = {
    count: 0
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }

  render() {
    return (
      <div>
        <h2>Likes: {this.state.count}</h2>
        <button onClick={() => this.handleClick()}>Like</button>
      </div>
    )
  }
}

export default LikeButton
