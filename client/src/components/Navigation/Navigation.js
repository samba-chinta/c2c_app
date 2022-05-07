import React from "react";
import { NavLink } from "react-router-dom";

import classes from './navigation.module.css';

const Navigation = () => {
  return (
    <header className={classes.header}>
      <h2>C2C</h2>
      <nav className={classes.navigation}>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/requestloan">Request Loan</NavLink>
        <NavLink to="/userrequests">User Requests</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/logout">Logout</NavLink>
      </nav>
    </header>
  )
}

export default Navigation;