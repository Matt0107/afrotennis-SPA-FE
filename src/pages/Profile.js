import React from "react";
import Game from "../components/Game";
import Graph from "../components/Graph";

const Profile = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="performance" style={{ flex: 1 }}>
        <Graph />
      </div>
      <div style={{ flex: 1 }}>
        <Game />
      </div>
    </div>
  );
};

export default Profile;
