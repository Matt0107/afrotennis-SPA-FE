import React from "react";
import { AuthContext } from "../context/auth.context";
import { useState, useContext } from "react";

const HomePage = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h1>Welcome, {user.username} </h1>

      <div className="home-container">
        <div className="home-section">
          <img src="./assets/profile.png" alt="My Profile" />
          <h2>My Profile</h2>
          <p>View and edit your personal tennis profile</p>
          <button>My Profile</button>
        </div>

        <div className="home-section">
          <img src="./assets/buddy2.png" alt="Find a Buddy" />
          <h2>Find a Buddy</h2>
          <p>Find and connect with tennis players in your area or all over the world</p>
          <button>Find a Buddy</button>
        </div>

        <div className="home-section">
          <img
            src="./assets/association.png"
            alt="Support a Tennis Association"
          />
          <h2>Support a Tennis Association</h2>
          <p>
            Donate to a tennis association or view available volunteer
            opportunities in Africa
          </p>
          <button>Support a Tennis Association</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
