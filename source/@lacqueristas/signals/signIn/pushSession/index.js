export default function pushSessions ({attributes, client}: {attributes: FreshSessionsAttributesType, client: HSDKClientType}): Promise<any> {
  const {email} = attributes
  const {password} = attributes

  return client
    .sessions
    .v1
    .create({
      payload: {
        data: {
          type: "sessions",
          attributes: {
            email,
            password,
          },
        },
      },
    })
}
