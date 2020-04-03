import React from "react"

const Content: React.FC = ({ children }) => {
  return (
    <div className="content-container">
      <div className="content">{children}</div>
    </div>
  )
}

export default Content
