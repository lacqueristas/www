export default (mapping) => (value, key) => {
  console.log(key, value)
  console.log(mapping[key])
  switch (mapping[key]) {
    case "date": {
      console.log(new Date(value))
      return new Date(value)
    }
    default: {
      return value
    }
  }
}
