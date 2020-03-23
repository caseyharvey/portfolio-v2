import ContactForm from "../components/ContactForm/ContactForm"
import Content from "../components/Content/Content"
import EmailLinks from "../components/Links/EmailLinks"
import Heading from "../components/Heading/Heading"
import Layout from "../components/Layout/Layout"
import Links from "../components/Links/Links"
import React from "react"
import SEO from "../components/seo"
import Section from "../components/Section/Section"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" description='This page contains Casey Harveys contact information and a few different options for getting in touch'/>
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
