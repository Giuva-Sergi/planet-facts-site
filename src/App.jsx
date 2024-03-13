import Navbar from "./components/Navbar";
import PlanetPage from "./pages/PlanetPage";
import data from "./data.json";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  const planets = data;

  // const randomPlanet = planets.at(
  //   Math.floor(Math.random() * planets.length)
  // ).name;

  return (
    <>
      <Navbar planets={planets} />
      <Routes>
        <Route path="/" element={<Navigate to={`/${planets.at(2).name}`} />} />
        {planets.map((planet) => (
          <Route
            key={planet.name}
            path={`/${planet.name}`}
            element={<PlanetPage planet={planet} />}
          />
        ))}
        {/* <Route path="/:planet" element={<PlanetPage planets={planets} />} /> */}
      </Routes>
    </>
  );
}

export default App;
