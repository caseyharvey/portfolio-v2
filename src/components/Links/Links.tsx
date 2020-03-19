import React from "react"

import "./links.sass"

interface Props {
  app: string
  code: string
}

function Links({ app, code }: Props) {
  return (
    <div className="links-container">
      <div className="links">
        <a href={app}>the app</a>
        <a href={code}>the code</a>
      </div>
    </div>
  )
}

export default Links
