import React from "react"

import Heading from "../components/Heading/Heading"
import ContactForm from "../components/ContactForm/ContactForm"
import Layout from "../components/Layout/Layout"
import Content from "../components/Content/Content"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Heading
      heading="Contact"
      tagLine={<a href="mailto:im@caseys.tech?">im@caseys.tech</a>}
      info="Copy to clipboard"
    />
    <Content>
      <ContactForm />
    </Content>
  </Layout>
)

export default ContactPage
