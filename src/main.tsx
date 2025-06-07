import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Card from "./components/card";
import CardsGrid from "./components/cardsGrid";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CardsGrid />
  </StrictMode>
);
