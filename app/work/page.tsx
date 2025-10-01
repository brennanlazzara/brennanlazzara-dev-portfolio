import type { Metadata } from "next"
import { ProjectCard } from "@/components/project-card"
import { workProjects } from "@/lib/data"

export const metadata: Metadata = {
  title: "Work",
  description: "Professional projects and case studies showcasing my work as a full-stack developer.",
}

export default function WorkPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Work
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            A collection of professional projects and case studies highlighting my experience in building scalable web applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
