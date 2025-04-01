import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import PokemonCard from "./components/PokemonCard.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <PokemonCard pokemon={name} />
  </StrictMode>
);
