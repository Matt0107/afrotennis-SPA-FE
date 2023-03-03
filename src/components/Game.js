import React, { useState } from "react";
import axios from "axios";

const Game = () => {
  const [form, setForm] = useState({
    player: "",
    form: "",
    surface: "",
    score: "",
    win: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "/auth/addgame",
        {
          player: form.player,
          form: form.form,
          surface: form.surface,
          score: form.score,
          win: form.win,
        },
        { withCredentials: true }
      );
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
      <h1>Add a game</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="player">Player :</label>
          <input
            type="text"
            id="player"
            name="player"
            value={form.player}
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
            <option value="won">Won</option>
            <option value="lost">Lost</option>
          </select>
        </div>
        <button type="submit">Save Game</button>
      </form>
    </div>
  );
};

export default Game;
