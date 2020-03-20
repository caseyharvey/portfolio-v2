import React from "react"

import ContactForm from "../components/ContactForm/ContactForm"
import Heading from "../components/Heading/Heading"
import Section from "../components/Section/Section"
import Content from "../components/Content/Content"
import Layout from "../components/Layout/Layout"
import Links from "../components/Links/Links"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Section>
      <Heading heading="Contact" tagLine="im@caseys.tech" />
      <Links
        linkOne="mailto:im@caseys.tech?"
        textOne="open in mail"
        linkTwo="https://www.linkedin.com/in/casey-harvey-b931a71a0/"
        textTwo="copy email"
      />
      <Links
        linkOne="https://github.com/caseyharvey"
        textOne="GitHub"
        linkTwo="https://www.linkedin.com/in/casey-harvey-b931a71a0/"
        textTwo="LinkedIn"
        target="_blank"
      />
      <Content>
        <ContactForm />
      </Content>
    </Section>
  </Layout>
)

export default ContactPage
