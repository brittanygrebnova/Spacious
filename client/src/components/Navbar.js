import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () =>
  <div className="ui three item menu">
    <a className="item"><NavLink to="/" exact>Home</NavLink></a>
    <a className="item"><NavLink to="/all" exact>All Parks</NavLink></a>
    <a className="item"><NavLink to="/favorites" exact>Favorites</NavLink></a>
  </div>

export default Navbar
