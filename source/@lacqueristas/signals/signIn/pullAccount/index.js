export default function pushAccount ({attributes, client}) {
  const {id} = attributes

  return client
    .accounts
    .v1
    .show({id})
}
