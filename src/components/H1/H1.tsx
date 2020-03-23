import React from "react"

interface Props {
  name: string
}

function H1({ name }: Props) {
  return (
    <div className="h1-container">
      <h1>{name}</h1>
    </div>
  )
}

export default H1
