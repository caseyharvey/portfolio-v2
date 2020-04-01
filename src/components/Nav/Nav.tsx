import { Link } from "gatsby"
import React from "react"

const Nav = () => (
  <nav>
    <div className="nav-container">
      <div className="link-container">
        <Link className="page-link" to="/">
          about
        </Link>
        <Link className="page-link" to="/projects">
          projects
        </Link>
        <Link className="page-link" to="/contact">
          contact
        </Link>
        <a
          className="page-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://blog.caseys.tech/"
        >
          blog
        </a>
      </div>
    </div>
  </nav>
)

export default Nav
