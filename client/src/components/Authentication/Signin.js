import React from "react";
import { Link } from "react-router-dom";

import classes from "./auth.module.css";

const Signin = (props) => {
  return (
    <div className={classes.wrapper}>
      <form className={classes.form}>
        <h3>SignIn</h3>
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Sign In" />
        <Link to="/signup" className={classes.link}>
          Don't Have an Account? Signup!
        </Link>
        <Link to="/forget_password" className={classes.link}>
          Forget Password? Get Help
        </Link>
      </form>
    </div>
  );
};

export default Signin;
