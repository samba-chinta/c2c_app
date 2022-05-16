import { Schema, model } from "mongoose";

const format = {
  type: String,
  required: true,
}

const userSchema = Schema({
  email: format,
  password: format,
  username: format,
  phone: format,
  profile: format,
  createdOn: {
    type: Date,
    default: Date.now(),
  }
}, {
  collection: "c2c_users",
})

const User = model("user", userSchema);

export default User;