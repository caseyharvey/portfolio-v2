import React from "react"

interface Props {
  app: string
  code: string
}

function Buttons({ app, code }: Props) {
  return (
    <div>
      <a href={app}>the app</a>
      <a href={code}>the code</a>
    </div>
  )
}

export default Buttons
