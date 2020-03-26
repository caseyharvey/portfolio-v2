import Content from "../components/Content/Content"
import H1 from "../components/H1/H1"
import Heading from "../components/Heading/Heading"
import Layout from "../components/Layout/Layout"
import React from "react"
import SEO from "../components/seo"
import Section from "../components/Section/Section"

const IndexPage = () => (
  <Layout>
    <SEO
      title="caseys.tech - The portfolio of Casey Harvey"
      description="Welcome to the home page of Casey Harvey, a software developer from NSW Australia. This page has some information about me and why i love to code."
    />
    <H1 name="about me - this is why i love to code" />
    <Section>
      <Heading heading="Casey Harvey" tagLine="Software Developer" />
      <Content>
        <p>
          I love developing software and writing code. The whole process is
          deeply satisfying and never ending. There is always something new to
          learn, some improvement to be made and something just out of reach. I
          get rush from solving problems and leveling up my skills. This keeps
          me motivated and inspired to push through the inevitable challenges
          along the way.
        </p>
        <p>
          Writing code and seeing it come to life is extremely rewarding. The
          reward comes from the fact that doing it well is not easy. It takes
          time, dedication and passion. I am hooked on the process and not the
          end result. I focus on having solid habits that improve with every win
          and every loss. these habits ensure that I always deliver my best.
        </p>
        <p>
          Thanks to the internet and all the amazing people producing valuable
          content I have taught myself how to code. Since making the decision to
          learn a programming language my life has been forever changed and I
          could not imagine myself doing anything else.
        </p>
      </Content>
    </Section>
  </Layout>
)

export default IndexPage
