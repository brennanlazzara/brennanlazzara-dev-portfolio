import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://brennanlazzara.dev"

  return ["", "/work", "/projects"].map((p) => ({
    url: `${baseUrl}${p}`,
    lastModified: new Date(),
  }))
}
