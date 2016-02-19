import {button, section} from "@cycle/dom"

const up = button(".up", "Up")
const down = button(".down", "Down")

export default () => section([up, down])
