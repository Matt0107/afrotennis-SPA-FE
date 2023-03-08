import React from "react";
import { Link } from "react-router-dom";
import NavBarHome from "../components/NavBarHome";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import Game from "../components/Game"
import GameTable from "../components/GameTable"

const Profile = () => {
  const [userDB, setUserDB] = useState(null);
  const { user } = useContext(AuthContext);
console.log(user)
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`http://localhost:5005/users/${user._id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setUserDB(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);

  if (!userDB) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <NavBarHome />
      <div id="main-info">
        <section id="player-info">
          <img src="./assets/profile.png" alt="" />
          <table>
            <tbody>
              <tr>
                <td className="left-row">First Name</td>
                <td>{userDB.firstName}</td>
              </tr>
              <tr>
                <td className="left-row">Last Name</td>
                <td>{userDB.lastName}</td>
              </tr>
              <tr>
                <td className="left-row">Age</td>
                <td>{userDB.age}</td>
              </tr>
              <tr>
                <td className="left-row">Plays</td>
                <td>{userDB.plays}</td>
              </tr>
              <tr>
                <td className="left-row">Backhand</td>
                <td>{userDB.backhand}</td>
              </tr>
              <tr>
                <td className="left-row">City</td>
                <td>{userDB.city}</td>
              </tr>
              <tr>
                <td className="left-row">Country</td>
                <td>{userDB.country}</td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
          <button>
            <Link to="/edit-profile">Edit my profile</Link>
          </button>
        </section>
        <section id="game">
          <h1>Graph</h1>
          <Game user={user}/>
        </section>
      </div>
      <section id="stats">
      <h1>My Games</h1>
      <GameTable/>
      </section>
    </div>
  );
};

export default Profile;
