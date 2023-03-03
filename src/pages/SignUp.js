import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    if (!formState.username || !formState.email || !formState.password) {
      setError("Please fill in all fields");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5005/signup",
        formState
      );
      console.log(response.data);
      navigate("/home");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <h2>Create an account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formState.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">E-mail Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formState.password}
            onChange={handleInputChange}
            required
            minLength={7}
            // pattern="/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]{7,}$/"
            // title="Le mot de passe doit contenir au moins 7 caractères, une majuscule, un caractère spécial et un chiffre"
          />
        </div>
        <div>{errorMessage && errorMessage}</div>
        <button type="submit">Sign</button>
      </form>
    </div>
  );
};

export default SignUpPage;
