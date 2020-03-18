import React, { ReactNode } from "react"

import "./text.sass"

interface Props {
  children: ReactNode
}

function Text({ children }: Props) {
  return (
    <div className="text-container">
      <div className="text">{children}</div>
    </div>
  )
}

export default Text
