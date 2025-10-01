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
      <section className="relative container overflow-hidden py-12 md:py-24">
        {/* Animated background accent */}
        <div className="from-primary/10 absolute top-0 right-0 -z-10 h-96 w-96 animate-pulse rounded-full bg-gradient-to-br to-purple-500/10 blur-3xl" />
        <div
          className="to-primary/10 absolute bottom-0 left-0 -z-10 h-96 w-96 animate-pulse rounded-full bg-gradient-to-tr from-purple-500/10 blur-3xl"
          style={{ animationDelay: "1s" }}
        />

        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h2 className="from-foreground to-foreground/70 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-5xl">
                Featured Work
              </h2>
              <p className="text-muted-foreground text-lg">
                A selection of my recent projects and case studies.
              </p>
            </div>
            <Button asChild variant="ghost" className="group hover:bg-primary/10 transition-all">
              <Link href="/work">
                View All
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
      <section className="from-muted/50 to-background relative border-t bg-gradient-to-b">
        <div className="container py-12 md:py-24">
          <div className="mx-auto max-w-3xl space-y-8 text-center">
            <div className="space-y-2">
              <h2 className="from-foreground to-foreground/70 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-5xl">
                Tech Stack
              </h2>
              <p className="text-muted-foreground text-lg">
                Technologies I work with to build modern web applications.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="group space-y-3">
                <div className="bg-primary/10 group-hover:bg-primary/20 mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
                  <span className="text-2xl">⚛️</span>
                </div>
                <h3 className="text-lg font-semibold">Frontend</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="hover:text-foreground cursor-default transition-colors">
                    React / Next.js
                  </li>
                  <li className="hover:text-foreground cursor-default transition-colors">
                    TypeScript
                  </li>
                  <li className="hover:text-foreground cursor-default transition-colors">
                    TailwindCSS
                  </li>
                  <li className="hover:text-foreground cursor-default transition-colors">
                    Framer Motion
                  </li>
                </ul>
              </div>

              <div className="group space-y-3">
                <div className="bg-primary/10 group-hover:bg-primary/20 mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-lg font-semibold">Backend</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="hover:text-foreground cursor-default transition-colors">
                    Node.js
                  </li>
                  <li className="hover:text-foreground cursor-default transition-colors">
                    Prisma / Drizzle
                  </li>
                  <li className="hover:text-foreground cursor-default transition-colors">
                    tRPC / GraphQL
                  </li>
                  <li className="hover:text-foreground cursor-default transition-colors">
                    PostgreSQL
                  </li>
                </ul>
              </div>

              <div className="group space-y-3">
                <div className="bg-primary/10 group-hover:bg-primary/20 mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="text-lg font-semibold">Tools & Platforms</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="hover:text-foreground cursor-default transition-colors">
                    Git / GitHub
                  </li>
                  <li className="hover:text-foreground cursor-default transition-colors">
                    Vercel / AWS
                  </li>
                  <li className="hover:text-foreground cursor-default transition-colors">Docker</li>
                  <li className="hover:text-foreground cursor-default transition-colors">Figma</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
