import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="landing-page">
        <div className="lp-background-images">
          <img src="./assets/pic1.jpg" alt="Background" />
          <img src="./assets/pic4.jpg" alt="Background" />
          <img src="./assets/pic5.jpg" alt="Background" />
        </div>
        <div className="lp-centered-content">
          <img src="./assets/Afrotennis_logo_white.png" alt="Logo" />
          <h1>Join the first African Tennis Club and get in touch with tennis players
        all over the world</h1>
          <div className="lp-buttons">
            <button><Link to="/signup">Sign up</Link></button>
            <button><Link to="/signin">Sign in</Link></button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
