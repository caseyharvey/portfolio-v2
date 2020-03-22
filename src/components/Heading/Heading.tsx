import React from "react"

interface Props {
  heading: any
  tagLine: any
}

function Heading({ heading, tagLine }: Props) {
  return (
    <div className="heading-container">
      <div className="heading-card">
        <span className="heading">{heading}</span>
        <span className="tag-line">{tagLine}</span>
      </div>
    </div>
  )
}

export default Heading
