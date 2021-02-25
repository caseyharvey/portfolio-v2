import { Link } from "gatsby"
import React from "react"

const Nav: React.FC = () => (
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
      </div>
    </div>
  </nav>
)

export default Nav
