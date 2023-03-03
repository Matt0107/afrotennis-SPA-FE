import React from "react";
import { AuthContext } from "../context/auth.context";
import { useState, useContext } from "react";

const HomePage = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h1>Welcome, {user.username} </h1>
    </div>
  );
};

export default HomePage;
