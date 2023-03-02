import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>Why Afrotennis?</h1>
      <NavLink to="/signup">register for free</NavLink>
    </div>
  );
};

export default About;
