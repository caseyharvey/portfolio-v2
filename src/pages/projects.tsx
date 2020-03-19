import React from "react"

import Content from "../components/Content/Content"
import Heading from "../components/Heading/Heading"
import Buttons from "../components/Buttons/Buttons"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Heading
      heading="timeIsMoney"
      tagLine="dollar value timer"
      info="react redux redux-form"
    />
    <Buttons
      app="https://timeismoney.caseys.tech/"
      code="https://github.com/caseyharvey/time-is-money/tree/master/src"
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
