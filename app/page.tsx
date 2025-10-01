import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { ProjectCard } from "@/components/project-card"
import { featuredProjects } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Featured Work Section */}
      <section className="container py-12 md:py-24">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Featured Work
              </h2>
              <p className="text-muted-foreground">
                A selection of my recent projects and case studies.
              </p>
            </div>
            <Button asChild variant="ghost">
              <Link href="/work">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="border-t bg-muted/50">
        <div className="container py-12 md:py-24">
          <div className="mx-auto max-w-3xl space-y-8 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Tech Stack
              </h2>
              <p className="text-muted-foreground">
                Technologies I work with to build modern web applications.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Frontend</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>TailwindCSS</li>
                  <li>Framer Motion</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Backend</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Node.js</li>
                  <li>Prisma / Drizzle</li>
                  <li>tRPC / GraphQL</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Tools & Platforms</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Git / GitHub</li>
                  <li>Vercel / AWS</li>
                  <li>Docker</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
