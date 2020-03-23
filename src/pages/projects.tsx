import Layout from "../components/Layout/Layout"
import ProjectList from "../components/Project/ProjectList"
import React from "react"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" description='This page contains all of the recent projects created by Casey Harvey. There are links to the projects and the GitHub repositories along with a brief description'/>
    <ProjectList />
  </Layout>
)

export default ProjectsPage
