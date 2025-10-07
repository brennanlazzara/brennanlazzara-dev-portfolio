import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background w-full border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Brennan Lazzara</h3>
            <p className="text-muted-foreground text-sm">
              Developer building modern web experiences.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Social</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/brennanlazzara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground focus-visible:ring-ring transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/brennanlazzara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground focus-visible:ring-ring transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:brennan@brennanlazzara.dev"
                className="text-muted-foreground hover:text-foreground focus-visible:ring-ring transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-muted-foreground mt-8 border-t pt-8 text-center text-sm">
          <p>&copy; {currentYear} Brennan Lazzara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
