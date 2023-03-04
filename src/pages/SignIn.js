import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { storeToken, verifyStoredToken } = useContext(AuthContext);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5005/signin", {
        email,
        password,
      });
      const token = res.data.authToken;
      storeToken(token);
      verifyStoredToken().then(() => {
        // handle successful login
        navigate("/home");
      });
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="parent-container">
    <form onSubmit={handleSignIn}>
      {error && <div>{error}</div>}
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign In</button>
    </form>
  </div>
);
};

export default SignIn;
