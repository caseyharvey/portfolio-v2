import React, { ReactNode } from "react"
import "./section.sass"

interface Props {
  children: ReactNode
}

function Section({ children }: Props) {
  return <div className="section">{children}</div>
}

export default Section
