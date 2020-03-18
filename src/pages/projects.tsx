import React from "react"

import Heading from "../components/Heading/Heading"
import Layout from "../components/Layout/Layout"
import Content from "../components/Content/Content"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Heading
      heading="Time is money"
      tagLine="Dollar value timer"
      info="React Redux Redux-form"
    />
    <Content>
      <p>
        I built this app as a way to keep track of time while I study. We all
        know how precious time is but we don't always use it for things that
        matter. This app can help you clarify whats important in your life by
        giving it a dollar value.
      </p>
    </Content>
  </Layout>
)

export default ProjectsPage
