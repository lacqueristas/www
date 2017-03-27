export default function pushAccount ({attributes, client}: {attributes: FreshAccountAttributesType, client: HSDKClientType}): Promise<any> {
  const {name} = attributes
  const {email} = attributes
  const {password} = attributes

  return client
    .accounts
    .v1
    .create({
      payload: {
        data: {
          type: "accounts",
          attributes: {
            name,
            email,
            password,
          },
        },
      },
    })
}
