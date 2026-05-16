import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://brennanlazzara.dev"

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ]
}
