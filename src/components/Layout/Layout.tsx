import "./layout.sass"

import React, { ReactNode } from "react"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Nav from "../Nav/Nav"
import ThemeContext from "../../context/ThemeContext"

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={theme.dark ? "dark" : "light"}>
          <Nav />
          <main className="main-container">
            <div className="light-dark-btn" onClick={theme.toggleDark}>
              {theme.dark ? (
                <FontAwesomeIcon icon={faSun} />
              ) : (
                <FontAwesomeIcon icon={faMoon} />
              )}
            </div>
            {children}
          </main>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default Layout
