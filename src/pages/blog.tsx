import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import Section from "../components/Section/Section"
import Heading from "../components/Heading/Heading"
import Content from "../components/Content/Content"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <Section>
      <Heading heading="Blog" tagLine="Coming soon" />
      <Content>
        <p>
          This will be a place where i can share all the valuable things I have
          learnt along the way.
        </p>
      </Content>
    </Section>
  </Layout>
)

export default BlogPage
