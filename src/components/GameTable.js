import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

const GameTable = () => {
  const [games, setGames] = useState([]);
  const { user } = useContext(AuthContext);

 function getAllGames(){
    axios
    .get(`http://localhost:5005/user/${user._id}/games`)
    .then((response) => {
      setGames(response.data.games);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  useEffect(() => {
    getAllGames()
  }, []);
  const handleDelete = (id) => {
    console.log(id)
    axios
      .delete(`http://localhost:5005/user/${user._id}/games/${id}`)
      .then((response) => {
       getAllGames();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!games) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Opponent</th>
            <th>Form</th>
            <th>Surface</th>
            <th>Score</th>
            <th>Win</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game._id}>
              <td>{game.opponent}</td>
              <td>{game.form}</td>
              <td>{game.surface}</td>
              <td>{game.score}</td>
              <td>{game.win}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(game._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GameTable;
