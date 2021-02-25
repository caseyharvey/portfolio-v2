import ContactForm from "../components/ContactForm/ContactForm"
import Content from "../components/Content/Content"
import EmailLinks from "../components/Links/EmailLinks"
import H1 from "../components/H1/H1"
import Heading from "../components/Heading/Heading"
import Layout from "../components/Layout/Layout"
import Links from "../components/Links/Links"
import React from "react"
import SEO from "../components/seo"
import Section from "../components/Section/Section"

const ContactPage: React.FC = () => (
  <Layout>
    <SEO
      title="Contact me - Here are my details"
      description="This page contains my contact information and a few different options for getting in touch"
    />
    <H1 name="contact me - here are my details" />
    <Section>
      <Heading heading="Email me" tagLine="im@caseys.tech" />
      <EmailLinks />
      <Links
        linkOne="https://github.com/caseyharvey"
        textOne="GitHub"
        linkTwo="https://www.linkedin.com/in/casey-harvey-a85a72207/"
        textTwo="LinkedIn"
      />
      <Content>
        <ContactForm />
      </Content>
    </Section>
  </Layout>
)

export default ContactPage
