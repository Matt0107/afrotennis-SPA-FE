import React from "react";
import Game from "../components/Game";
import Graph from "../components/Graph";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import NavBarHome from "../components/NavBarHome";

const Profile = () => {
  return (
    <div>
      <NavBarHome/>
      <div id="main-info">
        <section id="player-info">
          <img src="./assets/profile.png" alt="" />
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Age</td>
                <td>ex 33</td>
              </tr>
              <tr>
                <td>Plays</td>
                <td>ex Right</td>
              </tr>
              <tr>
                <td>Backhand</td>
                <td>ex Two Hands</td>
              </tr>
              <tr>
                <td>City</td>
                <td>ex Kampala</td>
              </tr>
              <tr>
                <td>Country</td>
                <td>Uganda</td>
              </tr>
              <tr></tr>
            </tbody>
          </Table>
          <button><Link to="/edit-profile">Edit my profile</Link></button>
        </section>
        <section id="game">
          <h1>Graph</h1>
        </section>
      </div>
      <h1>Retro</h1>
    </div>
  );
};

export default Profile;
