import React from "react";

import YourAccepts from "./YourAccepts";
import YourRequests from "./YourRequest";
import classes from "./style.module.css";

const dummy_data = [
  {
    username: "Samba",
    amount: 10000,
    interest: 1.5,
    time: 2,
    cibil: 400,
    timeOfAccept: new Date().toLocaleDateString(),
    due: new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 2,
      1
    ).toLocaleDateString(),
  },
  {
    username: "Varshini",
    amount: 10000,
    interest: 2,
    time: 3,
    cibil: 700,
    timeOfAccept: new Date().toLocaleDateString(),
    due: new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 3,
      1
    ).toLocaleDateString(),
  },
];

const req_dummy_data = [
  {
    amount: 10000,
    interest: 1.5,
    time: 2,
    isAccepted: true,
    acceptedBy: "Mahesh",
  },
  {
    amount: 2000,
    interest: 1,
    time: 3,
    isAccepted: false,
  },
];

const Dashboard = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.accepts}>
        <h3>User's Loans you Accepted</h3>
        {dummy_data.map((user) => {
          return <YourAccepts user={user} key={Math.random()} />;
        })}
      </div>
      <div className={classes.requests}>
        <h3>Your Loan Requests</h3>
        {req_dummy_data.map((user) => {
          return <YourRequests user={user} key={Math.random()} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
