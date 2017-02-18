import React, {PropTypes, PureComponent} from "react"
import cxs from "cxs"

const style = cxs({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  button: {
    margin: 2,
  },
  a: {
    margin: 2,
  },
})

export default class ButtonGroup extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render () {
    const {children} = this.props

    return <section className={style}>
      {children}
    </section>
  }
}
