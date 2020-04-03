import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import ToggleIcon from "../assets/dark-mode-icon.svg"

interface Props {
  theme: string
  toggleTheme: (theme: string) => string
}

function ThemeControl() {
  return (
    <div>
      <ThemeToggler>
        {({ theme, toggleTheme }: Props) => (
          <span
            className="light-dark-btn"
            onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
          >
            <ToggleIcon />
          </span>
        )}
      </ThemeToggler>
    </div>
  )
}

export default ThemeControl
