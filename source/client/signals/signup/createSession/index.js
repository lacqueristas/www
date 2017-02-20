export default function createSessions ({attributes, client}) {
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
