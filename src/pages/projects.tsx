import React from "react"

import ProjectList from "../components/Project/ProjectList"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <ProjectList />
  </Layout>
)

export default ProjectsPage
