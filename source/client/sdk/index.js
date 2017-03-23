import hsdk from "hsdk"

export default function sdk (): Promise<HSDKClientType> {
  return hsdk({
    url: `${window.env.ORIGIN_LOCATION}/v1/resources`,
    headers: {Accept: "application/vnd.api+json"},
  })
}
