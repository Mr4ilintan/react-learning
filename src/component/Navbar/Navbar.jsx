import React from 'react'
import nav from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return <nav className={nav.nav}>
    <div className={nav.item}>
      <NavLink to="/profile" activeClassName={nav.active} >Profile </NavLink>
    </div>
    <div className={nav.item}>
      <NavLink to="/dialogs" activeClassName={nav.active}>Messages </NavLink>
    </div>
    <div className={nav.item}>
      <a>News</a>
    </div>
    <div className={nav.item}>
      <a>Settings</a>
    </div>

  </nav>
}

export default Navbar;