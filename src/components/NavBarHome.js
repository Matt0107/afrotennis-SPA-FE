import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Menubtn from "./Menubtn";

const NavBarHome = () => {
  const { user} = useContext(AuthContext);
  console.log(user);
  return (
    <div className="navbar">
      <img
        src="./assets/Afrotennis_logo_black.png"
        alt="logo"
        className="logonav"
      />
      {user&&<h1>Welcome, {user.username} </h1>}
      <Menubtn/>
    </div>
  );
};

export default NavBarHome;
