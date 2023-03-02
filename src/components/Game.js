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
      alert("Partie ajoutée avec succès.");
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue lors de l'ajout de la partie.");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Enregistrer une partie</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="player">Joueur :</label>
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
          <label htmlFor="form">Forme :</label>
          <select
            id="form"
            name="form"
            value={form.form}
            onChange={handleChange}
            required
          >
            <option value="">Choisir une option</option>
            <option value="Blessé">Blessé</option>
            <option value="Fatigué">Fatigué</option>
            <option value="Bien">Bien</option>
            <option value="Excellente forme">Excellente forme</option>
          </select>
        </div>
        <div>
          <label htmlFor="surface">Type de surface :</label>
          <select
            id="surface"
            name="surface"
            value={form.surface}
            onChange={handleChange}
            required
          >
            <option value="">Choisir une option</option>
            <option value="Dur">Dur</option>
            <option value="Gazon">Gazon</option>
            <option value="Terre-battue">Terre battue</option>
            <option value="Tapis">Tapis</option>
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
          <label htmlFor="result">Résultat :</label>
          <select
            id="result"
            name="result"
            value={form.result}
            onChange={handleChange}
            required
          >
            <option value="">Choisir une option</option>
            <option value="gagné">Gagné</option>
            <option value="perdu">Perdu</option>
          </select>
        </div>
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
};

export default Game;
