import React, { Component } from 'react'

class ParkList extends Component {

  render() {
    const parks = this.props.parks.map((park, index) => <Park key={park.id} name={park.name}/>)
  }
  return (
    <div>{parks}</div>
  );
};

export default ParkList
