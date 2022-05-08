import React from "react";

import styles from './style.module.css';

const YourRequests = (props) => {
  return (
    <div className={styles.cardWrapper}>
      <div>
        <p>Amount: {props.user.amount}</p>
        <p>Interest: {props.user.interest}</p>
        <p>Time Period: {props.user.time}months</p>
      </div>
      <div>
        <p>Status: {props.user.isAccepted ? "Accepted": "No One Reacted"}</p>
        {props.user.isAccepted && 
          <p>Accepted by: {props.user.acceptedBy}</p>
        }
      </div>
      <button className={styles.editBtn}>Edit Request</button>
    </div>
  )
}

export default YourRequests;