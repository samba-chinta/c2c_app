import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./welcome.module.css";

const Welcome = (props) => {
  return (
    <div className={classes.wrapper}>
      <h2>Need a Personal loan?</h2>
      <div className={classes.authBtn}>
        <NavLink to="/signin" className={classes.link}>
          Sign In
        </NavLink>
        <NavLink to="/signup" className={classes.link}>
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};

export default Welcome;
