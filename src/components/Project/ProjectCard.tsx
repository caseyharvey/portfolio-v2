import React from "react"

import Content from "../../components/Content/Content"
import Heading from "../../components/Heading/Heading"
import Section from "../../components/Section/Section"
import Links from "../../components/Links/Links"

interface Props {
  id: number
  key: number
  name: string
  tag: string
  url: string
  git: string
  info: string
}

function ProjectCard({ name, tag, url, git, info }: Props) {
  return (
    <Section>
      <Heading heading={name} tagLine={tag} />
      <Links linkOne={url} textOne="the app" linkTwo={git} textTwo="the code" />
      <Content>
        <p>{info}</p>
      </Content>
    </Section>
  )
}

export default ProjectCard
