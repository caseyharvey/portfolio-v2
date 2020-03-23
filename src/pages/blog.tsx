import Content from "../components/Content/Content"
import H1 from "../components/H1/H1"
import Heading from "../components/Heading/Heading"
import Layout from "../components/Layout/Layout"
import React from "react"
import SEO from "../components/seo"
import Section from "../components/Section/Section"

const BlogPage = () => (
  <Layout>
    <SEO
      title="My Blog - A place to share the good stuff"
      description="This page is a Blog authored by Casey Harvey. The content is focused on sharing knowledge around software development"
    />
    <H1 name="my blog - a place to share the good stuff" />
    <Section>
      <Heading heading="1st post" tagLine="Coming soon" />
      <Content>
        <p>
          This will be a place where i can share all the valuable things I learn
          along the way.
        </p>
      </Content>
    </Section>
  </Layout>
)

export default BlogPage
