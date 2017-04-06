export default function pushSessions ({attributes, client}: {attributes: FreshSessionsAttributesType, client: HSDKClientType}): Promise<any> {
  return client
    .sessions
    .v1
    .create({
      payload: {
        data: {
          type: "sessions",
          attributes,
        },
      },
    })
}
