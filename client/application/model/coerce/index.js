export default (mapping: Object): Function => (value: any, key: string|void): any => {
  switch (mapping[key]) {
    case "date": {
      return new Date(value)
    }
    default: {
      return value
    }
  }
}
