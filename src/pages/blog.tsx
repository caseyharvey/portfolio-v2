import React from "react"

import Content from "../components/Content/Content"
import Heading from "../components/Heading/Heading"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

const BlogPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Heading
      heading="Blog"
      tagLine="Coming soon"
      info="Currently in production"
    />
    <Content>
      <p>
        This will be a place where i can share all the valuable things I have
        learnt along the way.
      </p>
    </Content>
  </Layout>
)

export default BlogPage
