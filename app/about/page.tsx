import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Download } from "lucide-react"

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my background, experience, and what I bring to every project.",
}

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground">
            Developer, problem solver, and continuous learner.
          </p>
        </div>

        {/* Bio */}
        <div className="prose prose-gray dark:prose-invert max-w-none space-y-4">
          <p className="text-lg text-muted-foreground">
            I&apos;m a full-stack developer with a passion for building exceptional digital experiences.
            With expertise in modern web technologies like React, Next.js, and TypeScript, I specialize
            in creating performant, accessible, and user-friendly applications.
          </p>
          <p className="text-lg text-muted-foreground">
            Throughout my career, I&apos;ve worked on a diverse range of projects—from enterprise analytics
            platforms handling millions of data points to sleek SaaS applications serving thousands of users.
            I thrive on tackling complex technical challenges and transforming them into elegant solutions.
          </p>
          <p className="text-lg text-muted-foreground">
            When I&apos;m not coding, you&apos;ll find me contributing to open source projects, writing technical
            blog posts, or exploring the latest developments in web development and AI.
          </p>
        </div>

        {/* Experience Highlights */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Experience Highlights</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Frontend Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    Deep expertise in React ecosystem, state management, performance optimization,
                    and creating beautiful, accessible user interfaces.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Full-Stack Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Proficient in building complete applications from database design to
                    deployment, with experience in Node.js, databases, and cloud platforms.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Technical Leadership</h3>
                  <p className="text-sm text-muted-foreground">
                    Led teams in delivering high-quality projects, mentored junior developers,
                    and established best practices for code quality and collaboration.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Open Source</h3>
                  <p className="text-sm text-muted-foreground">
                    Active contributor to open source projects with maintained libraries
                    used by thousands of developers worldwide.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Technical Skills</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-3">
              <h3 className="font-semibold">Languages</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>TypeScript / JavaScript</li>
                <li>Python</li>
                <li>SQL</li>
                <li>HTML / CSS</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">Frontend</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>React / Next.js</li>
                <li>TailwindCSS</li>
                <li>Framer Motion</li>
                <li>Redux / Zustand</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">Backend</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>Node.js / Express</li>
                <li>Prisma / Drizzle</li>
                <li>tRPC / GraphQL</li>
                <li>REST APIs</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">Databases</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Redis</li>
                <li>Supabase</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">Tools & Platforms</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>Git / GitHub</li>
                <li>Docker</li>
                <li>Vercel / AWS</li>
                <li>CI/CD</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">Other</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>Testing (Jest, Vitest)</li>
                <li>Figma / Design Systems</li>
                <li>Agile / Scrum</li>
                <li>Web Performance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href="/contact">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
