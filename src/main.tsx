import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CardsGrid from "./components/cardsGrid";
import { ThemeProvider } from "./components/theme-provider";
import Header from "./components/header";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-gradient-to-b from-[#EBF2FC] to-[#EEF8F9] dark:from-[#040918] dark:to-[#091540]">
        <div className=" mx-auto pt-10 pb-8 px-4 sm:px-8 md:px-20 lg:px-30">
          <Header />
          <main className="">
            <CardsGrid />
          </main>
        </div>
      </div>
    </ThemeProvider>
  </StrictMode>
);
