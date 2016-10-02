import React, {PropTypes} from "react"

export default function PageHat ({children}) {
  return <header className="hero is-primary is-medium">
    <section className="hero-body">
      <section className="container">
        {children}
      </section>
    </section>
  </header>
}

PageHat.propTypes = {
  children: PropTypes.node.isRequired
}
