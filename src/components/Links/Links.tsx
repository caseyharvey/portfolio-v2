import React from "react"

import "./links.sass"

interface Props {
  linkOne: any
  linkTwo: any
  textOne: string
  textTwo: string
  target?: string
}

function Links({ linkOne, linkTwo, textOne, textTwo, target }: Props) {
  return (
    <div className="links-container">
      <div className="links">
        <a href={linkOne} target={target} rel="noopener noreferrer">
          {textOne}
        </a>
        <a href={linkTwo} target={target} rel="noopener noreferrer">
          {textTwo}
        </a>
      </div>
    </div>
  )
}

export default Links
