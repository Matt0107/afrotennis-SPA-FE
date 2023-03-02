import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/auth/signup", formState);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    navigate("/home");
  };

  return (
    <div>
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
            // required
            // minLength={7}
            // pattern="/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]{7,}$/"
            // title="Le mot de passe doit contenir au moins 7 caractères, une majuscule, un caractère spécial et un chiffre"
          />
        </div>
        <button type="submit">Sign</button>
      </form>
    </div>
  );
};

export default SignUpPage;
