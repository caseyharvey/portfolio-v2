import React from "react"

import Heading from "../components/Heading/Heading"
import Layout from "../components/Layout/Layout"
// import Text from "../components/Text/Text"
import SEO from "../components/seo"

const BlogPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Heading
      heading="Blog"
      tagLine="Coming soon"
      info="Currently in production"
    />
  </Layout>
)

export default BlogPage
