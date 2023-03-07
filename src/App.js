import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Buddy from "./pages/Buddy";
import Association from "./pages/Association";
import About from "./pages/About";
import ProfileEdit from "./pages/ProfileEdit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile/" element={<ProfileEdit />} />
          <Route path="/buddy" element={<Buddy />} />
          <Route path="/association" element={<Association />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
