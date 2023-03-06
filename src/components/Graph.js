import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

const Graph = () => {
const [winCount, setWinCount] = useState(0);
const [loseCount, setLoseCount] = useState(0);

useEffect(() => {
const fetchGameData = async () => {
try {
const response = await axios.get("/auth/games", {
withCredentials: true,
});
const games = response.data;
const winGames = games.filter((game) => game.win === true);
const loseGames = games.filter((game) => game.win === false);
setWinCount(winGames.length);
setLoseCount(loseGames.length);
} catch (error) {
console.error(error);
}
};
fetchGameData();
}, []);

return (
<div>
<Chart
width={"100%"}
height={"400px"}
chartType="PieChart"
loader={<div>Loading Chart</div>}
data={[
["Task", "Count"],
["Wins", winCount],
["Losses", loseCount],
]}
options={{
title: "Wins and Losses",
pieHole: 0.6,
colors: ["#32CD32", "#FF6347"],
legend: "bottom",
animation: {
startup: true,
easing: "linear",
duration: 1500,
},
}}
rootProps={{ "data-testid": "1" }}
/>
</div>
);
};

export default Graph;