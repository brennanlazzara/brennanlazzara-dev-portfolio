import { ArrowRight, Github, Linkedin, Mail, Zap, Download } from "lucide-react"
import { Button } from "./ui/button"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center overflow-hidden py-12 text-center md:py-24"
    >
      {/* Animated background gradient */}
      <div className="from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5 absolute inset-0 -z-10 bg-gradient-to-br via-transparent" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />

      <div className="relative container mx-auto max-w-3xl space-y-8 px-4">
        {/* Floating badge */}
        <div className="bg-background/50 animate-fade-in inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm shadow-lg backdrop-blur-sm">
          <Zap className="text-primary h-3.5 w-3.5 animate-pulse" />
          <span className="font-medium">Available for new opportunities</span>
        </div>

        <div className="animate-fade-in-up space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="relative inline-block">
              <span className="from-primary to-primary animate-gradient bg-300% bg-animate bg-gradient-to-r via-green-400 bg-clip-text text-transparent">
                Brennan Lazzara
              </span>
              <span className="from-primary/0 to-primary/0 absolute right-0 -bottom-2 left-0 h-1 bg-gradient-to-r via-green-400" />
            </span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed sm:text-xl md:text-2xl">
            Senior Full-Stack Engineer crafting{" "}
            <span className="text-foreground font-semibold">exceptional digital experiences</span>{" "}
            with React, Next.js, and TypeScript.
          </p>
        </div>

        <div
          className="animate-fade-in-up flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "200ms" }}
        >
          <Button
            asChild
            size="lg"
            className="shadow-primary/25 hover:shadow-primary/30 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            <a href="#work" className="flex items-center">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 rotate-90 transition-transform group-hover:translate-y-1" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="transition-transform hover:scale-105"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="transition-transform hover:scale-105"
          >
            <a href="/resume.pdf" download className="flex items-center">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>

        <div
          className="animate-fade-in-up flex items-center justify-center gap-6 pt-4"
          style={{ animationDelay: "400ms" }}
        >
          <a
            href="https://github.com/brennanlazzara"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-muted-foreground hover:text-foreground focus-visible:ring-ring transition-all hover:scale-125 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6 transition-transform group-hover:rotate-12" />
          </a>
          <a
            href="https://linkedin.com/in/brennanlazzara"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-muted-foreground hover:text-foreground focus-visible:ring-ring transition-all hover:scale-125 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 transition-transform group-hover:-rotate-12" />
          </a>
          <a
            href="mailto:brennan@brennanlazzara.dev"
            className="group text-muted-foreground hover:text-foreground focus-visible:ring-ring transition-all hover:scale-125 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            aria-label="Email"
          >
            <Mail className="h-6 w-6 transition-transform group-hover:rotate-12" />
          </a>
        </div>
      </div>
    </section>
  )
}
