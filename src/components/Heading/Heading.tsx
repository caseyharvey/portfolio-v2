import React from "react"

import "./heading.sass"

interface Props {
  heading: string
  tagLine: string
  info: string
}

function Heading({ heading, tagLine, info }: Props) {
  return (
    <div className="heading-container">
      <div className="heading-card">
        <span className="heading">{heading}</span>
        <span className="tag-line">{tagLine}</span>
        <span className="info">{info}</span>
      </div>
    </div>
  )
}

export default Heading
