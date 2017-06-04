import hsdk from "hsdk"

export default function sdk () {
  return hsdk({
    url: `${window.env.ORIGIN_LOCATION}/v1/resources`,
    headers: {Accept: "application/vnd.api+json"},
  })
}
