import hsdk from "hsdk"

export default function sdk (): Promise<HSDKClientType> {
  return hsdk({home: `${window.env.ORIGIN_LOCATION}/v1/resources`})
}
