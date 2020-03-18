import React from "react"

import Heading from "../components/Heading/Heading"
import Layout from "../components/Layout/Layout"
import Text from "../components/Text/Text"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading
      heading="Casey Harvey"
      tagLine="Software Developer"
      info="JavaScript, React, Gatsby"
    />
    <Text>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
        praesentium odio eveniet omnis iure sint perspiciatis tempore nam!
        Voluptatibus, quam aperiam officiis repellendus quia nam labore
        consequuntur harum mollitia quo sunt laborum, nulla vitae, consequatur
        odio deserunt saepe molestiae rem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sed
        labore repellendus doloremque? Cupiditate incidunt iste vel sequi
        consequuntur porro cum quisquam fugiat expedita vero odio soluta saepe
        praesentium pariatur, officia maiores illo molestias voluptas.
      </p>
    </Text>
  </Layout>
)

export default IndexPage
