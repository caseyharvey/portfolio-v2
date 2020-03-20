import React from "react"

import Content from "../components/Content/Content"
import Heading from "../components/Heading/Heading"
import Section from "../components/Section/Section"
import Layout from "../components/Layout/Layout"
import Links from "../components/Links/Links"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Section>
      <Heading
        heading="timeIsMoney"
        tagLine="dollar value timer"
        info="react redux redux-form"
      />
      <Links
        linkOne="https://timeismoney.caseys.tech/"
        textOne="the app"
        linkTwo="https://github.com/caseyharvey/time-is-money/tree/master/src"
        textTwo="the code"
      />
      <Content>
        <p>
          I built this app as a way to keep track of time while I study. We all
          know how precious time is but we don't always use it for things that
          matter. This app can help you clarify whats important in your life by
          giving it a dollar value.
        </p>
      </Content>
    </Section>
  </Layout>
)

export default ProjectsPage
