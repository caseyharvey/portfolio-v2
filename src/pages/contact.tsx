import React from "react"

import Heading from "../components/Heading/Heading"
import Layout from "../components/Layout/Layout"
import Text from "../components/Text/Text"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Heading
      heading="Time is money"
      tagLine="Dollar value timer"
      info="React Redux Redux-form"
    />
    <Text>
      <p>
        I built this app as a way to keep track of time while I study. We all
        know how precious time is but we don't always use it for things that
        matter. This app can help you clarify whats important in your life by
        giving it a dollar value.
      </p>
    </Text>
  </Layout>
)

export default ContactPage
