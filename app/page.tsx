import { HeroSection } from "@/components/hero-section"
import { ProjectCard } from "@/components/project-card"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { featuredProjects } from "@/lib/data"
import { Mail, Linkedin, Github } from "lucide-react"

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Featured Work Section */}
      <section id="work" className="relative w-full scroll-mt-16 overflow-hidden py-12 md:py-24">
        {/* Animated background accent */}
        <div className="from-primary/10 absolute top-0 right-0 -z-10 h-96 w-96 animate-pulse rounded-full bg-gradient-to-br to-purple-500/10 blur-3xl" />
        <div
          className="to-primary/10 absolute bottom-0 left-0 -z-10 h-96 w-96 animate-pulse rounded-full bg-gradient-to-tr from-purple-500/10 blur-3xl"
          style={{ animationDelay: "1s" }}
        />

        <div className="container mx-auto space-y-8 px-4">
          <div className="space-y-2">
            <h2 className="from-foreground to-foreground/70 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-5xl">
              Featured Work
            </h2>
            <p className="text-muted-foreground text-lg">
              A selection of my recent projects and case studies.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative w-full scroll-mt-16 border-t py-12 md:py-24">
        <div className="container mx-auto px-2">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Header */}
            <div className="space-y-3 text-center">
              <h2 className="from-foreground to-foreground/70 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-5xl">
                About Me
              </h2>
              <p className="text-muted-foreground text-xl">
                Developer, problem solver, and continuous learner.
              </p>
            </div>

            {/* Bio */}
            <div className="prose prose-gray dark:prose-invert max-w-none space-y-4 text-center">
              <p className="text-muted-foreground text-lg">
                I&apos;m a full-stack developer with a passion for building exceptional digital
                experiences. With expertise in modern web technologies like React, Next.js, and
                TypeScript, I specialize in creating performant, accessible, and user-friendly
                applications.
              </p>
              <p className="text-muted-foreground text-lg">
                On the side, I’m building VoceViva, an Italian-learning app, where I experiment with
                typed data models, performance budgets, and simple, joyful UI. I’m currently open to
                opportunities where thoughtful engineering and product sense matter.
              </p>
            </div>

            {/* Experience Highlights */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Experience Highlights</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold">Frontend Excellence</h4>
                      <p className="text-muted-foreground text-sm">
                        Deep expertise in React ecosystem, state management, performance
                        optimization, and creating beautiful, accessible user interfaces.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold">Full-Stack Development</h4>
                      <p className="text-muted-foreground text-sm">
                        Proficient in building complete applications from database design to
                        deployment, with experience in Node.js, databases, and cloud platforms.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold">Technical Leadership</h4>
                      <p className="text-muted-foreground text-sm">
                        Led teams in delivering high-quality projects, mentored junior developers,
                        and established best practices for code quality and collaboration.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold">Open Source</h4>
                      <p className="text-muted-foreground text-sm">
                        Active contributor to open source projects with maintained libraries used by
                        thousands of developers worldwide.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="from-muted/50 to-background relative w-full border-t bg-gradient-to-b">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <div className="space-y-2">
              <h2 className="from-foreground to-foreground/70 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-5xl">
                Technical Skills
              </h2>
              <p className="text-muted-foreground text-lg">
                Technologies and tools I use to build modern web applications.
              </p>
            </div>

            <div className="grid gap-6 text-left md:grid-cols-3">
              <div className="space-y-3">
                <h3 className="font-semibold">Languages</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>TypeScript / JavaScript</li>
                  <li>Python</li>
                  <li>SQL</li>
                  <li>HTML / CSS</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Frontend</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>React / Next.js</li>
                  <li>TailwindCSS</li>
                  <li>Framer Motion</li>
                  <li>Redux / Zustand</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Backend</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>Node.js / Express</li>
                  <li>Prisma / Drizzle</li>
                  <li>tRPC / GraphQL</li>
                  <li>REST APIs</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Databases</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>Redis</li>
                  <li>Supabase</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Tools & Platforms</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>Git / GitHub</li>
                  <li>Docker</li>
                  <li>Vercel / AWS</li>
                  <li>CI/CD</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Other</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>Testing (Jest, Vitest)</li>
                  <li>Figma / Design Systems</li>
                  <li>Agile / Scrum</li>
                  <li>Web Performance</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center pt-4">
              <Button asChild size="lg">
                <a href="#contact" className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative w-full scroll-mt-16 border-t py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Header */}
            <div className="space-y-4 text-center">
              <h2 className="from-foreground to-foreground/70 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-5xl">
                Get In Touch
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                Have a project in mind or want to collaborate? I&apos;d love to hear from you. Fill
                out the form below or reach out through social media.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="pt-6">
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="space-y-4 pt-6">
                    <h3 className="font-semibold">Email</h3>
                    <a
                      href="mailto:brennan@brennanlazzara.dev"
                      className="text-muted-foreground hover:text-foreground focus-visible:ring-ring flex items-center gap-2 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                      <Mail className="h-4 w-4" />
                      brennan@brennanlazzara.dev
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="space-y-4 pt-6">
                    <h3 className="font-semibold">Social</h3>
                    <div className="space-y-3">
                      <a
                        href="https://github.com/brennanlazzara"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground focus-visible:ring-ring flex items-center gap-2 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                      <a
                        href="https://linkedin.com/in/brennanlazzara"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground focus-visible:ring-ring flex items-center gap-2 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <h3 className="font-semibold">Response Time</h3>
                      <p className="text-muted-foreground text-sm">
                        I typically respond within 24-48 hours during weekdays.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
