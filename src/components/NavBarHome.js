import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

const NavBarHome = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useContext(AuthContext);
  console.log(user);
  function handleLogOut(){
    logoutUser()
    navigate("/")
  }
  return (
    <div className="navbar">
      <img
        src="./assets/Afrotennis_logo_black.png"
        alt="logo"
        className="logonav"
      />
      {user&&<h1>Welcome, {user.username} </h1>}
      <button onClick={handleLogOut} className="logout-btn">Log Out</button>
    </div>
  );
};

export default NavBarHome;
