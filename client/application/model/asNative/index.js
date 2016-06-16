// Request -> {(...)}
export default ({text}) => {
  if (text) {
    return JSON.parse(text)
  }

  return {}
}
