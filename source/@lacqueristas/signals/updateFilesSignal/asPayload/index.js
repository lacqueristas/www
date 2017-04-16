export default function asPayload (slug: string): Function {
  return function asPayloadSlug (name: string): Function {
    return function asPayloadSlugName (file: any): UpdateFilePayloadType {
      return {
        slug,
        name,
        file,
        multiple: true,
      }
    }
  }
}
