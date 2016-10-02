import React, {PropTypes} from "react"

export default function SectionHeading ({children, style}) {
  return <h2 className="subtitle" style={{...style}}>
    {children}
  </h2>
}

SectionHeading.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object
}
