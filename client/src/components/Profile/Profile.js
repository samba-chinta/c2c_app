import React from "react";

import classes from "./profile.module.css";
import user_icon from "../../assest/user_icon.png";

const Profile = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.userInfo}>
        <img src={user_icon} alt="User Icon" />
        <h3>Samba Siva Reddy</h3>
        <p>
          Status: <span className={classes.state}>Not Verified</span>
        </p>
      </div>
      <form className={classes.profileForm}>
        <input type="text" placeholder="Aadhar Number" />
        <input type="text" placeholder="Pan Number" />
        <input type="text" placeholder="Bank Account Number" />
        <input type="text" placeholder="CTC (in INR)" />
        <label>
          <small>Aadhar Card:</small> <input type="file" />
        </label>
        <label>
          <small>PAN Card:</small> <input type="file" />
        </label>
        <label>
          <small>Salary:</small> <input type="file" />
        </label>
        <label>
          <small>Your Photo:</small> <input type="file" />
        </label>
        <input type="submit" value="Verify and Update Profile" />
      </form>
    </div>
  );
};

export default Profile;
