import React from 'react';

import user_icon from '../../assest/user_icon.png';
import classes from "./style.module.css";

const YourAccepts = (props) => {
  return (
    <div className={classes.cardWrapper}>
      <div className={classes.userDetails}>
        <img src={user_icon} alt="User Icon"/>
        <p>{props.user.username}</p>
      </div>
      <div className={classes.loanDetails}>
        <p>Amount: {props.user.amount}</p>
        <p>Interest: {props.user.interest}</p>
        <p>Time Period: {props.user.time}months</p>
      </div>
      <div className={classes.statusAc}>
        <p>Cibil Score: {props.user.cibil}</p>
        <p>Date of Acceptance: {props.user.timeOfAccept}</p>
        <p>Due Date: {props.user.due}</p>
        {/* <div>
          <button className={classes.acceptBtn} disabled>Accepted</button>
        </div> */}
      </div>
    </div>
  )
}

export default YourAccepts;