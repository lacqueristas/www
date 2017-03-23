import {path} from "ramda"

export default function pushProject ({attributes, client, session}: {attributes: FreshProjectAttributesType, client: HSDKClientType, session: SessionType}): Promise<any> {
  const {name} = attributes
  const {description} = attributes
  const secret = path(["attributes", "bearer"], session)

  return client
    .projects
    .v1
    .create({
      authentication: {
        scheme: "bearer",
        secret,
      },
      payload: {
        data: {
          type: "projects",
          attributes: {
            name,
            description,
          },
        },
      },
    })
}
