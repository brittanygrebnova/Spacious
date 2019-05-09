import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <nav class="navbar navbar-default">
      <div class="container-fluid">
      </div>
      <ul class="nav navbar-nav">
        <li><NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
        >Home</NavLink></li>
        <li><NavLink
          to="/parks"
          exact
        >Parks</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar;
