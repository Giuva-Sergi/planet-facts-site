import { useEffect } from "react";
export function usePlanet(currentPlanet) {
  useEffect(() => {
    document.title = currentPlanet
      ? `SolarSync 🌌 ${currentPlanet.name}`
      : document.title;
    return () => (document.title = "SolarSync");
  }, [currentPlanet]);

  return usePlanet;
}
