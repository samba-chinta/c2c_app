import React from "react";
import { Link } from "react-router-dom";

import classes from "../Authentication/auth.module.css";

const LoanRequest = (props) => {
  return (
    <div className={classes.wrapper}>
      <form className={classes.form}>
        <h3>Request Loan</h3>
        <input type="text" placeholder="Amount Required*" />
        <input type="number" placeholder="Tenure (in months)*" />
        <input type="text" placeholder="At which Interest*"/>
        <input type="submit" value="Request Amount" />
      </form>
    </div>
  );
};

export default LoanRequest;
