import { Routes, Route } from "react-router-dom";

import Welcome from "./components/welcome_page/Welcome";
import Signin from "./components/Authentication/Signin";
import Signup from "./components/Authentication/Signup";
import ForgetPassword from "./components/Authentication/ForgetPassword";
import Navigation from "./components/Navigation/Navigation";
import UserRequest from "./components/UserRequest/UserRequest";
import LoanRequest from "./components/LoanRequest/LoanRequest";

function App() {
  const isLoggedIn = true;
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
            <Route path="/" element={<h2>Welcome to Home Page</h2>}/>
            <Route path="/userrequests" element={<UserRequest/>}/>
            <Route path="/requestloan" element={<LoanRequest/>}/>
          </Routes>
        )}
      </header>
    </div>
  );
}

export default App;