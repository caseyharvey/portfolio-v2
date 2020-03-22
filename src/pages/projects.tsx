import Layout from "../components/Layout/Layout"
import ProjectList from "../components/Project/ProjectList"
import React from "react"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <ProjectList />
  </Layout>
)

export default ProjectsPage
