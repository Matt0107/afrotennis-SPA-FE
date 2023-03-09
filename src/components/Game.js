import React, { useState } from "react";
import axios from "axios";

const Game = ({user, onAddGame}) => {
  const [form, setForm] = useState({
    opponent: "",
    form: "",
    surface: "",
    score: "",
    result: "",
  });
  console.log(user)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const storedToken = localStorage.getItem("authToken");
      const response = await axios.post(
        "http://localhost:5005/addgame",
        {
          opponent: form.opponent,
          form: form.form,
          surface: form.surface,
          score: form.score,
          result: form.result,
          user: user,
        },
        { headers: { Authorization: `Bearer ${storedToken}` } }
        );
      onAddGame(response.data);   
      alert("Success! Game session added");
    } catch (error) {
      console.error(error);
      alert("Something wrong happened");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Add A Game</h1>
      <form onSubmit={handleSubmit} className="form-game">
        <div>
          <label htmlFor="player">Opponent :</label>
          <input
            type="text"
            id="opponent"
            name="opponent"
            value={form.opponent}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="form">Mood :</label>
          <select
            id="form"
            name="form"
            value={form.form}
            onChange={handleChange}
            required
          >
            <option value="">Choose an option</option>
            <option value="Injured">Injured</option>
            <option value="Tired">Tired</option>
            <option value="Good">Good</option>
            <option value="Excellent">Excellent</option>
          </select>
        </div>
        <div>
          <label htmlFor="surface">Surface :</label>
          <select
            id="surface"
            name="surface"
            value={form.surface}
            onChange={handleChange}
            required
          >
            <option value="">Choose</option>
            <option value="Hard Court">Hard Court</option>
            <option value="Grass">Grass</option>
            <option value="Clay">Clay</option>
            <option value="Carpet">Carpet</option>
          </select>
        </div>
        <div>
          <label htmlFor="score">Score :</label>
          <input
            type="text"
            id="score"
            name="score"
            value={form.score}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="result">Result :</label>
          <select
            id="result"
            name="result"
            value={form.result}
            onChange={handleChange}
            required
          >
            <option value="">Choose</option>
            <option value="Won">Won</option>
            <option value="Lost">Lost</option>
          </select>
        </div>
        <button type="submit">Save Game</button>
      </form>
    </div>
  );
};

export default Game;
