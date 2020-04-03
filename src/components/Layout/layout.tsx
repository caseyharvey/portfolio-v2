import "./layout.sass"

import React from "react"
import ThemeControl from "../ThemeControl"

import Nav from "../Nav/Nav"

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Nav />
      <main className="main-container">
        <ThemeControl />
        {children}
      </main>
    </div>
  )
}

export default Layout
