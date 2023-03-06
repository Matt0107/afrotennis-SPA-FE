import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import NavBarHome from '../components/NavBarHome';

const API_URL = "http://localhost:5005";
const ProfileEdit = (props) => {
    const [age, setAge] = useState("");
    const [plays, setPlays] = useState("");
    const [backhand, setBackhand] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    return (
        <div>
        <NavBarHome/>
          <h1>edit my profile</h1> 
          <form>
        <label>Plays</label>
        <input
          type="text"
          name="title"
          value={plays}
          onChange={(e) => setPlays(e.target.value)}
        />
        
        
 
        <input type="submit" value="Submit" />
      </form>
        </div>
    );
};

export default ProfileEdit;