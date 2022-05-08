import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { authActions } from "../../store/userAuthSlice";
import classes from "./auth.module.css";

const Signin = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const emailChangeHandler = (e) => {
    setUserEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setUserPassword(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // const emailRegex = new RegExp("^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$");
    if (userEmail === "" || userPassword === "") {
      alert("Please fill all the details");
    } else {
      localStorage.setItem(
        "authentication-token",
        JSON.stringify({
          userEmail,
        })
      );
      navigate('/');
      dispatch(authActions.login({
        email: userEmail,
      }))
    }
  };

  return (
    <div className={classes.wrapper}>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <h3>SignIn</h3>
        <input
          type="email"
          placeholder="Email Address"
          onChange={emailChangeHandler}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={passwordHandler}
        />
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
