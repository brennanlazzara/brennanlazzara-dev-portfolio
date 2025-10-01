import { MetadataRoute } from "next"
import { projects } from "@/lib/data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://brennanlazzara.dev"

  const staticPages = ["", "/work", "/projects", "/about", "/contact"].map((p) => ({
    url: `${baseUrl}${p}`,
    lastModified: new Date(),
  }))

  const projectPages = projects.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: new Date(),
  }))

  return [...staticPages, ...projectPages]
}
