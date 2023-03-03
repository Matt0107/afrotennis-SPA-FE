import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome on Afrotennis !</h1>
      <p>
        Join the first African Tennis Club and get in touch with tennis players
        all
      </p>
      <Link to="/signup">Sign up</Link>
      <Link to="/signin">Sign in</Link>
    </div>
  );
};

export default LandingPage;
