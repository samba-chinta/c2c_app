import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/userAuthSlice";
import { Navbar, Nav, Container} from 'react-bootstrap';

import classes from "./navigation.module.css";

const Navigation = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const logoutHandler = (e) => {
    localStorage.removeItem("authentication-token");
    navigate("/");
    dispatch(authActions.logout());
  };

  return (
    // <header className={classes.header}>
    //   {/* <h2>C2C</h2>
    //   {isLoggedIn && (
    //     <nav className={classes.navigation}>
    //       <NavLink to="/">Dashboard</NavLink>
    //       <NavLink to="/requestloan">Request Loan</NavLink>
    //       <NavLink to="/userrequests">User Requests</NavLink>
    //       <NavLink to="/profile">Profile</NavLink>
    //       <NavLink to="/" onClick={logoutHandler}>Logout</NavLink>
    //     </nav>
    //   )}
    //   {!isLoggedIn && (
    //     <nav className={classes.navigation}>
    //       <NavLink to="/">Home</NavLink>
    //       <NavLink to="/signin">SignIn</NavLink>
    //       <NavLink to="/signup">SignUp</NavLink>
    //     </nav>
    //   )} */}

    // </header>
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className={classes.header}
    >
      <Container className={classes.container}>
        <h2>C2C</h2>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
          style={{ width: "100%" }}
        >
          <Nav className={classes.navigation}>
            {!isLoggedIn && (
              <NavLink to="/" exact="true">
                Home
              </NavLink>
            )}
            {isLoggedIn && (
              <NavLink to="/" exact="true">
                Dashboard
              </NavLink>
            )}
            {!isLoggedIn && (
              <NavLink to="/signin" exact="true">
                SignIn
              </NavLink>
            )}
            {!isLoggedIn && (
              <NavLink to="/signup" exact="true">
                SignUp
              </NavLink>
            )}
            {isLoggedIn && (
              <NavLink to="/requestloan">Request Loan</NavLink>
            )}
            {isLoggedIn && (
              <NavLink to="/userrequests">User Requests</NavLink>
            )}
            {isLoggedIn && (
              <NavLink to="/profile" exact="true">
                My Profile
              </NavLink>
            )}
            {isLoggedIn && (
              <NavLink to="/" onClick={logoutHandler}>
                Logout
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
