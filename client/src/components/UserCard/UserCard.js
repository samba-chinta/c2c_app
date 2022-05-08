import React, { useState } from "react";

import user_icon from "../../assest/user_icon.png";
import classes from "./usercard.module.css";

const UserCard = (props) => {
  const [isVerified, setIsVerified] = useState(false);
  const divClass = `${classes.cardWrapper} + ${
    isVerified ? classes.verified : ""
  }`;

  const verifyHandler = (e) => {
    setIsVerified(true);
  };

  return (
    <div className={divClass}>
      <div className={classes.userDetails}>
        <img src={user_icon} alt="User Icon" />
        <p>{props.user.username}</p>
      </div>
      <div className={classes.loanDetails}>
        <p>Amount: {props.user.amount}</p>
        <p>Interest: {props.user.interest}</p>
        <p>Time Period: {props.user.time}months</p>
      </div>
      <div className={classes.status}>
        <p>Cibil Score: {props.user.cibil}</p>
        <div>
          <button className={classes.acceptBtn} onClick={verifyHandler}>
            Accept
          </button>
          <button className={classes.rejectBtn} onClick={verifyHandler}>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
