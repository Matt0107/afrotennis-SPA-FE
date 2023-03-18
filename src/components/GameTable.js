import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

const GameTable = ({ games, setGames }) => {
  const [token, setToken] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    setToken(storedToken);
  }, []);

const handleDelete = async (id) => {
  try {
    await axios.delete(
      `http://localhost:5005/games/${user._id}/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setGames(prevGames => prevGames.filter((game) => game._id !== id));
  } catch (error) {
    console.error(error);
  }
};
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
