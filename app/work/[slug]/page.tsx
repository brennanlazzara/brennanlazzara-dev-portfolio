import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { getProjectBySlug, projects } from "@/lib/data"
import { Button } from "@/components/ui/button"

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.summary,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Back Button */}
        <Button asChild variant="ghost" size="sm">
          <Link href="/work">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Work
          </Link>
        </Button>

        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <span>{project.role}</span>
            <span>•</span>
            <span>{project.period}</span>
          </div>
          <p className="text-xl text-muted-foreground">{project.summary}</p>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.links?.live && (
              <Button asChild variant="default">
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  View Live Site
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
            {project.links?.github && (
              <Button asChild variant="outline">
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        {project.description && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">About the Project</h2>
            <p className="text-muted-foreground">{project.description}</p>
          </div>
        )}

        {/* Highlights Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Highlights</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg border bg-muted"
                >
                  <div className="aspect-video relative bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">
                      Screenshot {index + 1}
                    </p>
                    {/* Replace with actual Image component when screenshots are added */}
                    {/* <Image src={image} alt={`${project.title} screenshot ${index + 1}`} fill className="object-cover" /> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Challenges</h2>
            <ul className="space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Solutions */}
        {project.solutions && project.solutions.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Solutions</h2>
            <ul className="space-y-2">
              {project.solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-xs font-bold text-green-600 dark:text-green-400">
                    ✓
                  </span>
                  <span className="text-muted-foreground">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Impact */}
        {project.impact && project.impact.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Impact</h2>
            <ul className="space-y-2">
              {project.impact.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary">▸</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Results */}
        {project.results && project.results.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Results</h2>
            <ul className="space-y-2">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary">▸</span>
                  <span className="text-muted-foreground">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
