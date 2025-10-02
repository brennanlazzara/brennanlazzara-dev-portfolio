"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "./ui/button"
import type { Project } from "@/lib/data"

interface ProjectModalProps {
  project: Project
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="bg-background/80 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-background relative mx-4 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg border p-6 shadow-lg md:p-8">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{project.title}</h2>
            <div className="text-muted-foreground flex flex-wrap gap-4 text-sm">
              <span>{project.role}</span>
              <span>•</span>
              <span>{project.period}</span>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="bg-primary/5 inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          {project.description && (
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Overview</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
          )}

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Challenges</h3>
              <ul className="text-muted-foreground space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Solutions */}
          {project.solutions && project.solutions.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Solutions</h3>
              <ul className="text-muted-foreground space-y-2">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Impact */}
          {project.impact && project.impact.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Impact</h3>
              <ul className="text-muted-foreground space-y-2">
                {project.impact.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Images */}
          {project.images && project.images.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Screenshots</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {project.images.map((image, index) => (
                  <div key={index} className="bg-muted overflow-hidden rounded-lg border">
                    <div className="relative aspect-video">
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          {project.results && project.results.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Results</h3>
              <ul className="text-muted-foreground space-y-2">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
