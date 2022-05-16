import { Schema, model } from "mongoose";

const loanSchema = Schema({
  email :{
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  tenure: {
    type: Number,
    required: true,
  },
  interest: {
    type: Number,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  }
}, {
  collection: "user_loan_Collection",
})

const UserTakenLoans = model("UserTakenLoans", loanSchema);

export default UserTakenLoans;