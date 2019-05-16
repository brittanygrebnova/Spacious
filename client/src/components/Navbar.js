import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () =>
  <div class="ui three item menu">
    <a class="item"><NavLink to="/" exact>Home</NavLink></a>
    <a class="item"><NavLink to="/all" exact>All Parks</NavLink></a>
    <a class="item"><NavLink to="/favorites" exact>Favorites</NavLink></a>
  </div>

export default Navbar
