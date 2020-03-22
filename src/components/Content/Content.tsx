import "./content.sass"

import React, { ReactNode } from "react"

interface Props {
  children: ReactNode
}

function Content({ children }: Props) {
  return (
    <div className="content-container">
      <div className="content">{children}</div>
    </div>
  )
}

export default Content
