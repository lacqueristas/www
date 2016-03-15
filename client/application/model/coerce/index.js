export default (mapping) => (key, value) => {
  switch (mapping[key]) {
    case "date": {
      return new Date(value)
    }
    default: {
      return value
    }
  }
}
