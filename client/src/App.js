import React, { useEffect }  from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Welcome from "./components/welcome_page/Welcome";
import Signin from "./components/Authentication/Signin";
import Signup from "./components/Authentication/Signup";
import ForgetPassword from "./components/Authentication/ForgetPassword";
import Navigation from "./components/Navigation/Navigation";
import UserRequest from "./components/UserRequest/UserRequest";
import LoanRequest from "./components/LoanRequest/LoanRequest";
import Profile from "./components/Profile/Profile";
import Dashboard from "./components/Dashboard/Dashboard";
import { authActions } from "./store/userAuthSlice";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  useEffect(() => {
    const token = localStorage.getItem("authentication-token");
    if (token) {
      const { userEmail } = JSON.parse(token);
      dispatch(
        authActions.login({
          email: userEmail,
        })
      )
    }
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/>
        {!isLoggedIn && (
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forget_password" element={<ForgetPassword />} />
          </Routes>
        )}
        {isLoggedIn && (
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/userrequests" element={<UserRequest/>}/>
            <Route path="/requestloan" element={<LoanRequest/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
        )}
      </header>
    </div>
  );
}

export default App;
