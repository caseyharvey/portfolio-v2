import { Link } from "gatsby"
import React from "react"

import "./nav.sass"

interface Props {
  siteTitle: string
}

const Nav = ({ siteTitle }: Props) => (
  <nav>
    <div className="link-container">
      <Link to="/">{siteTitle}</Link>
    </div>
  </nav>
)

export default Nav
