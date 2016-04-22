export default (response) => {
  if (response.text !== "") {
    return JSON.parse(response.text)
  }

  return {}
}
