import React, { type JSX } from "react";
import { ModeToggle } from "./ui/mode-toggle";
import logo from "../assets/images/logo.svg";
import logoDark from "../assets/images/logo-dark.svg";
import { useTheme } from "./theme-provider";

export function Header(): JSX.Element {
  const { theme } = useTheme();

  return (
    <div className="flex justify-between p-3 rounded-xl bg-card dark:bg-neutral-800 shadow-sm mb-8">
      <img
        src={theme === "dark" ? logoDark : logo}
        alt="Browser Extension Manager Logo"
      />
      <ModeToggle />
    </div>
  );
}
export default Header;
