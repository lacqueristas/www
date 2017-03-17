import hsdk from "hsdk"

export default function sdk (): Promise<any> {
  return hsdk({home: `${window.env.ORIGIN_LOCATION}/v1/resources`})
}
