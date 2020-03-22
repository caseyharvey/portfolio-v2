import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import Section from "../components/Section/Section"
import Heading from "../components/Heading/Heading"
import EmailLinks from "../components/Links/EmailLinks"
import Links from "../components/Links/Links"
import Content from "../components/Content/Content"
import ContactForm from "../components/ContactForm/ContactForm"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Section>
      <Heading heading="Contact" tagLine="im@caseys.tech" />
      <EmailLinks />
      <Links
        linkOne="https://github.com/caseyharvey"
        textOne="GitHub"
        linkTwo="https://www.linkedin.com/in/casey-harvey-b931a71a0/"
        textTwo="LinkedIn"
      />
      <Content>
        <ContactForm />
      </Content>
    </Section>
  </Layout>
)

export default ContactPage
