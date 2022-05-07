import React, { useState } from "react";

import classes from "./auth.module.css";

const ForgetPassword = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  const emailSubmitHandler = (e) => {
    e.preventDefault();
    setIsSubmit((isSubmit) => !isSubmit);
  };

  return (
    <div className={classes.wrapper}>
      {!isSubmit && (
        <form className={classes.form} onSubmit={emailSubmitHandler}>
          <h3>Forget Password</h3>
          <input type="email" placeholder="Email Address" />
          <input type="submit" value="Submit" />
        </form>
      )}
      {isSubmit && (
        <form className={classes.form}>
          <input type="text" placeholder="Enter OTP" />
          <input type="password" placeholder="New Password" />
          <input type="password" placeholder="Confirm Password" />
          <input type="submit" value="Update Password" />
        </form>
      )}
    </div>
  );
};

export default ForgetPassword;
