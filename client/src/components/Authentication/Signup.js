import React, { useRef } from "react";
import { Link } from "react-router-dom";

import classes from "./auth.module.css";

const Signup = (props) => {
  const email = useRef("");
  const username = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");
  const phone = useRef();
  
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const emailRegex = new RegExp("^[a-zA-Z0-9+_.-]+@gmail.com$");

    if (
      email.current.value == "" ||
      username.current.value == "" ||
      password.current.value == "" ||
      confirmPassword.current.value == "" ||
      !phone.current.value
    ) {
      alert("Please enter all the details");
    } else {
      if (username.current.value.length < 8) {
        alert("Username length must be atleast 8");
      } else if (!emailRegex.test(email.current.value)) {
        alert("Invalid Email Address")
      }else if (password.current.value != confirmPassword.current.value) {
        alert("Both password and confirm password must Match");
      } else if (
        phone.current.value.length != 10 &&
        phone.current.value[0] in [0, 1, 2, 3, 4, 5]
      ) {
        alert("Invalid Phone Number");
      } else {
        alert("Registered Successfully");
      }
    }
  };

  return (
    <div className={classes.wrapper}>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <h3>SignUp</h3>
        <input type="text" placeholder="Username" ref={username} />
        <input type="email" placeholder="Email Address" ref={email} />
        <input type="tel" placeholder="Phone Number" ref={phone} />
        <input type="password" placeholder="Password" ref={password} />
        <input
          type="password"
          placeholder="Confirm Password"
          ref={confirmPassword}
        />
        <input type="submit" value="Sign In" />
        <Link to="/signin" className={classes.link}>
          Already Have an Account? Signin!
        </Link>
      </form>
    </div>
  );
};

export default Signup;
