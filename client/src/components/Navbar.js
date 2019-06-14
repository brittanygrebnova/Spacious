import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () =>
  <div className="ui three item menu">
    <NavLink className="item" to="/" exact>Home</NavLink>
    <NavLink className="item" to="/all" exact>All Parks</NavLink>
    <NavLink className="item" to="/favorites" exact>Favorites</NavLink>
  </div>

export default Navbar
// <a className="item">
