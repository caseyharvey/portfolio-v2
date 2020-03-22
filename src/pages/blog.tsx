import Content from "../components/Content/Content"
import Heading from "../components/Heading/Heading"
import Layout from "../components/Layout/Layout"
import React from "react"
import SEO from "../components/seo"
import Section from "../components/Section/Section"

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
