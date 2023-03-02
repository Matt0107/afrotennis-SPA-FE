import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>Bienvenue sur notre site de tennis !</h1>
      <p>
        Ici, vous pouvez créer un profil joueur, rechercher des partenaires et
        organiser des matchs.
      </p>
      <Link to="/signup">S'inscrire</Link>
      <Link to="/signin">Se connecter</Link>
    </div>
  );
};

export default LandingPage;
