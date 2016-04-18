export default (mapping) => (value, key) => {
  switch (mapping[key]) {
    case "date": {
      return new Date(value)
    }
    default: {
      return value
    }
  }
}
