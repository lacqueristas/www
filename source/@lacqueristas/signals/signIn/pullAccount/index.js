export default function pushAccount ({attributes, client}: {attributes: FreshSessionsAttributesType, client: HSDKClientType}): Promise<any> {
  const {id} = attributes

  return client
    .accounts
    .v1
    .show({id})
}
