import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import ToggleIcon from "../assets/dark-mode-icon.svg"

interface Props {
  theme: string
  toggleTheme: (theme: string) => void
}

function ThemeControl() {
  return (
    <div>
      <ThemeToggler>
        {({ theme, toggleTheme }: Props) => (
          <ToggleIcon
            className="light-dark-btn"
            onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
          />
        )}
      </ThemeToggler>
    </div>
  )
}

export default ThemeControl
