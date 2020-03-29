import React from "react"
import { faAdjust } from "@fortawesome/free-solid-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

interface Props {
  theme: string
  toggleTheme: (theme: string) => void
}

function ThemeControl() {
  return (
    <div>
      <ThemeToggler>
        {({ theme, toggleTheme }: Props) => (
          <div
            className="light-dark-btn"
            onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
          >
            <FontAwesomeIcon icon={faAdjust} />
          </div>
        )}
      </ThemeToggler>
    </div>
  )
}

export default ThemeControl
