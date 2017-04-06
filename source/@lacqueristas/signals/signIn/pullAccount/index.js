export default function pushAccount ({attributes, client}: {attributes: JSONAPIRelationType, client: HSDKClientType}): Promise<any> {
  const {id} = attributes

  return client
    .accounts
    .v1
    .show({id})
}
