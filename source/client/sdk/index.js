import hsdk from "hsdk"

export default function sdk () {
  return hsdk({home: `${window.env.ORIGIN_LOCATION}/v1/resources`})
}
