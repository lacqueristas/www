export default function pushAccount ({attributes, client}: {attributes: FreshAccountAttributesType, client: HSDKClientType}): Promise<any> {
  return client
    .accounts
    .v1
    .create({
      payload: {
        data: {
          type: "accounts",
          attributes,
        },
      },
    })
}
