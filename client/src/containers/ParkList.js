import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchUser } from '../actions/userActions'

const ParkList = () => {
  return (
    <div>
      <h1>Park List</h1>
    </div>
  );
};

export default ParkList
