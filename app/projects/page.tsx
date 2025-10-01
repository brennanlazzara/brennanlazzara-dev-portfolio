import type { Metadata } from "next"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/data"

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of side projects and open source contributions.",
}

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="space-y-8">
        <div className="animate-fade-in space-y-4">
          <h1 className="from-foreground to-foreground/70 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-6xl">
            Projects
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Side projects, experiments, and open source contributions I&apos;ve worked on in my free
            time.
          </p>
        </div>

        <div
          className="animate-fade-in-up grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          style={{ animationDelay: "200ms" }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
