import "./links.sass"

import React from "react"

interface Props {
  linkOne: any
  linkTwo: any
  textOne: string
  textTwo: string
}

function Links({ linkOne, linkTwo, textOne, textTwo }: Props) {
  return (
    <div className="links-container">
      <div className="links">
        <a href={linkOne} target="_blank" rel="noopener noreferrer">
          {textOne}
        </a>
        <a href={linkTwo} target="_blank" rel="noopener noreferrer">
          {textTwo}
        </a>
      </div>
    </div>
  )
}

export default Links
