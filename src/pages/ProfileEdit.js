import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import NavBarHome from "../components/NavBarHome";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";
const ProfileEdit = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [plays, setPlays] = useState("");
  const [backhand, setBackhand] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const { user } = useContext(AuthContext);
  // Get the URL parameter `:userId`
  const { userId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (user){
    axios
      .get(`http://localhost:5005/users/${user._id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneUser = response.data;
        console.log(response.data)
        setFirstName(oneUser.firstName);
        setLastName(oneUser.lastName);
        setUsername(oneUser.username);
        setBirthdate(oneUser.birthdate);
        setPlays(oneUser.plays);
        setBackhand(oneUser.backhand);
        setCity(oneUser.city);
        setCountry(oneUser.country);
      })
      .catch((error) => console.log(error));}
  }, [user]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      firstName,
      lastName,
      username,
      birthdate,
      plays,
      backhand,
      city,
      country,
    };
    //Put request to update user
    const storedToken = localStorage.getItem("authToken");
    axios.put(`${API_URL}/users/${user._id}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      }).then((response) => {
      navigate(`/profile`);
    });
  };
  return (
    <div>
      <NavBarHome />
      <h1>edit my profile</h1>
      <form onSubmit={handleFormSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Date of Birth:</label>
        <input
          type="date"
          name="birthdate"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />

        <label>Plays:</label>
        <select
          name="plays"
          value={plays}
          onChange={(e) => setPlays(e.target.value)}
        >
          <option value="">-- Select --</option>
          <option value="Right">Right</option>
          <option value="Left">Left</option>
        </select>

        <label>Backhand:</label>
        <select value={backhand} onChange={(e) => setBackhand(e.target.value)}>
          <option value="">--Choose an option--</option>
          <option value="One-handed">One-handed</option>
          <option value="Two-handed">Two-handed</option>
        </select>

        <label>City:</label>
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ProfileEdit;
