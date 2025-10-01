import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch to discuss your project, collaboration opportunities, or just to say hello.",
}

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Get In Touch
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
            Fill out the form below or reach out through social media.
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
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/brennanlazzara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
                  <p className="text-sm text-muted-foreground">
                    I typically respond within 24-48 hours during weekdays.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
