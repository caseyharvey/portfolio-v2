import "./layout.sass"

import React, { ReactNode } from "react"
import ThemeControl from "../ThemeControl"

import Nav from "../Nav/Nav"

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
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
