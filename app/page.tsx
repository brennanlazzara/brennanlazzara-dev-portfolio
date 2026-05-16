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
          <div className="space-y-2 text-center">
            <h2 className="from-foreground to-foreground/70 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg">
              Side projects and case studies from my recent work — from{" "}
              <strong>Hydra</strong> and <strong>VoceViva</strong> to storefront engineering at
              Carter&apos;s / OshKosh.
            </p>
            <p className="text-muted-foreground text-sm">
              Click any card for the full case study.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="from-background via-muted/20 to-background relative w-full scroll-mt-16 border-t bg-gradient-to-br py-12 md:py-24"
      >
        {/* Animated background accent */}
        <div
          className="to-primary/10 absolute top-1/4 left-0 -z-10 h-72 w-72 animate-pulse rounded-full bg-gradient-to-br from-green-400/10 blur-3xl"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="from-primary/10 absolute right-0 bottom-1/4 -z-10 h-72 w-72 animate-pulse rounded-full bg-gradient-to-tl to-green-400/10 blur-3xl"
          style={{ animationDelay: "2s" }}
        />
        <div className="container mx-auto px-2">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Header */}
            <div className="space-y-3 text-center">
              <h2 className="from-foreground to-foreground/70 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-5xl">
                About Me
              </h2>
            </div>

            {/* Bio */}
            <div className="prose prose-gray dark:prose-invert max-w-none space-y-4 text-center">
              <p className="text-muted-foreground text-lg">
                I'm a frontend architect based in Brooklyn, working primarily in React, Next.js, and
                TypeScript. Nine years in, I've shipped storefront features at Carter's serving
                millions of customers, built mission-critical MERN tooling at Cox Communications
                used by EMS and law enforcement teams, and most recently founded Hydra — a B2B
                marketplace for the Italian hospitality industry, taken from concept to production
                deployment.
              </p>
              <p className="text-muted-foreground text-lg">
                I care about the parts of frontend work that don't always get talked about: state
                architecture that doesn't collapse under feature pressure, component systems that
                other engineers actually want to use, and TypeScript that makes wrong code hard to
                write. I'm currently leading platform architecture at Chatterworks, a pre-Series A
                SaaS startup.
              </p>
              <p className="text-muted-foreground text-lg">
                On the side I'm building VoceViva, an Italian-learning app — a chance to experiment
                with typed data models, performance budgets, and simple, joyful UI without a roadmap
                meeting in sight. The Italian connection isn't incidental: I lived in Rome for five
                years before recently moving back to the US. Open to senior and staff frontend roles
                where the engineering work is genuinely hard and the team takes craft seriously.
              </p>
            </div>

            {/* Experience Highlights */}
            <div className="space-y-6">
              <h3 className="text-center text-2xl font-bold underline">Experience Highlights</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold">Frontend Architecture</h4>
                      <p className="text-muted-foreground text-sm">
                        Leading platform architecture at Chatterworks — TypeScript conventions,
                        component patterns, and state-driven UI that holds up as the surface area
                        grows.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold">Role-Based Systems</h4>
                      <p className="text-muted-foreground text-sm">
                        Built Hydra end-to-end with five distinct user types — Admin, Vendor,
                        Client, Agent, Driver — each with isolated permissions, dashboards, and
                        workflows.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold">E-commerce at Scale</h4>
                      <p className="text-muted-foreground text-sm">
                        Shipped storefront features at Carter&apos;s / OshKosh B&apos;gosh serving
                        millions of customers — SSR/SSG in Next.js and integration with Salesforce
                        Commerce Cloud for personalized merchandising surfaces.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold">Mission-Critical Tooling</h4>
                      <p className="text-muted-foreground text-sm">
                        Built and maintained MERN tooling at Cox Communications used by EMS, fire,
                        and law enforcement teams — where downtime had operational consequences.
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
      <section
        id="skills"
        className="from-muted/50 to-background relative w-full scroll-mt-16 border-t bg-gradient-to-b"
      >
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="from-foreground to-foreground/70 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-5xl">
                Technical Skills
              </h2>
              <p className="text-muted-foreground text-lg">
                Technologies and tools I use to build modern web applications.
              </p>
            </div>

            <div className="mx-auto grid max-w-3xl gap-6 text-center md:grid-cols-3">
              <div className="space-y-3">
                <h3 className="font-semibold">Frontend</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Redux</li>
                  <li>Tailwind CSS</li>
                  <li>React Native</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Backend</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>Node.js / Express</li>
                  <li>PostgreSQL</li>
                  <li>Prisma</li>
                  <li>MongoDB</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Platform</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>Vercel</li>
                  <li>CI/CD</li>
                  <li>Git</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Quality</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>Jest</li>
                  <li>Playwright</li>
                  <li>TypeScript-first testing patterns</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Architecture</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>REST</li>
                  <li>OAuth2 / JWT</li>
                  <li>Role-based access control</li>
                  <li>SSR / SSG</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Payments</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>Stripe subscriptions</li>
                  <li>Webhook-driven state sync</li>
                  <li>Billing flows</li>
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
      <section
        id="contact"
        className="from-muted/30 to-background relative w-full scroll-mt-16 border-t bg-gradient-to-t py-12 md:py-24"
      >
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        {/* Center spotlight effect */}
        <div className="from-primary/20 absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r to-green-400/20 blur-3xl" />
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
                        href="https://linkedin.com/in/brennan-lazzara"
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
