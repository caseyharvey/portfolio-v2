import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import ProjectList from "../components/Project/ProjectList"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <ProjectList />
  </Layout>
)

export default ProjectsPage
