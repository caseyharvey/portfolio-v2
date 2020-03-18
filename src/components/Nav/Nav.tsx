import { Link } from "gatsby"
import React from "react"

import "./nav.sass"

// interface Props {
//   siteTitle: string
// }
// { siteTitle }: Props

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
        <Link className="page-link" to="/blog">
          blog
        </Link>
      </div>
    </div>
  </nav>
)

export default Nav
