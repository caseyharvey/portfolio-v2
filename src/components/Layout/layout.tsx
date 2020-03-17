import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "../Nav/Nav"
import "./layout.sass"

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Nav siteTitle={data.site.siteMetadata.title} />
      <main className="main-container">{children}</main>
      <footer>© {new Date().getFullYear()} caseyharvey</footer>
    </>
  )
}

export default Layout
