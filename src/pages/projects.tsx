import H1 from "../components/H1/H1"
import Layout from "../components/Layout/Layout"
import ProjectList from "../components/Project/ProjectList"
import React from "react"
import SEO from "../components/seo"

const ProjectsPage: React.FC = () => (
  <Layout>
    <SEO
      title="Projects - The portfolio of Casey Harvey"
      description="This page contains all of the recent projects created by Casey Harvey. There are links to the projects and the GitHub repositories along with a brief description"
    />
    <H1 name="projects - the portfolio of casey harvey" />
    <ProjectList />
  </Layout>
)

export default ProjectsPage
