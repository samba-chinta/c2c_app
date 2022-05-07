import React from "react";

import UserCard from "../UserCard/UserCard";
import classes from "./userrequest.module.css";

const dummy_data = [
  {
    username: "Samba",
    amount: 10000,
    interest: 1.5,
    time: 2,
    cibil: 400,
  }, 
  {
    username: "Satya Sri",
    amount: 20000,
    interest: 1.5,
    time: 1,
    cibil: 700,
  },
  {
    username: "Prabhavathi",
    amount: 15000,
    interest: 1,
    time: 4,
    cibil: 600,
  },
  {
    username: "Varshini",
    amount: 25000,
    interest: 1,
    time: 2,
    cibil: 500,
  }
]

const UserRequest = () => {
  return (
    <div className={classes.wrapper}>
      {
        dummy_data.map(user => {
          return <UserCard user = {user} key = {Math.random()}/>
        })
      }
    </div>
  )
}

export default UserRequest;