import React from 'react';

import user_icon from '../../assest/user_icon.png';
import classes from './usercard.module.css';

const UserCard = (props) => {
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
      <div className={classes.status}>
        <p>Cibil Score: {props.user.cibil}</p>
        <div>
          <button className={classes.acceptBtn}>Accept</button>
          <button className={classes.rejectBtn}>Reject</button>
        </div>
      </div>
    </div>
  )
}

export default UserCard;