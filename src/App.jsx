import Navbar from "./components/Navbar";
import PlanetPage from "./pages/PlanetPage";
import data from "./data.json";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  const planets = data;

  const randomPlanet = planets.at(
    Math.floor(Math.random() * planets.length)
  ).name;

  return (
    <>
      <Navbar planets={planets} />
      <Routes>
        <Route path="/" element={<Navigate to={`/${randomPlanet}`} />} />
        <Route path="/:planet" element={<PlanetPage planets={planets} />} />
      </Routes>
    </>
  );
}

export default App;
