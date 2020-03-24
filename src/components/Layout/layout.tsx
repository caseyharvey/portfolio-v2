import "./layout.sass"

import React, { ReactNode } from "react"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import Nav from "../Nav/Nav"

interface Props {
  theme: string
  toggleTheme: (theme: string) => void
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Nav />
      <main className="main-container">
        <ThemeToggler>
          {({ theme, toggleTheme }: Props) => (
            <div
              className="light-dark-btn"
              onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <FontAwesomeIcon icon={faSun} />
              ) : (
                <FontAwesomeIcon icon={faMoon} />
              )}
            </div>
          )}
        </ThemeToggler>
        {children}
      </main>
    </div>
  )
}

export default Layout
