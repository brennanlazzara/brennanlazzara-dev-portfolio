"use client"

import { useState } from "react"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { ProjectModal } from "./project-modal"
import type { Project } from "@/lib/data"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Card className="group hover:border-primary/50 flex h-full flex-col text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <CardHeader>
          <div className="space-y-2">
            <CardTitle className="group-hover:text-primary text-2xl transition-colors">
              {project.title}
            </CardTitle>
            <CardDescription className="text-sm">
              {project.role} • {project.period}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex-1 space-y-4">
          <p className="text-muted-foreground leading-relaxed">{project.summary}</p>

          <div className="flex flex-wrap justify-center gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="bg-primary/5 hover:bg-primary/10 focus:ring-ring inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:outline-none"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.impact && project.impact.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Impact:</h4>
              <ul className="text-muted-foreground inline-block space-y-1 text-left text-sm">
                {project.impact.slice(0, 2).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
        <CardFooter className="justify-center gap-2">
          {project.links?.case_study && (
            <Button
              variant="default"
              size="sm"
              className="group/btn hover:shadow-primary/25 transition-all hover:shadow-lg"
              onClick={() => setIsModalOpen(true)}
            >
              View Case Study
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          )}
          {project.links?.live && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="transition-transform hover:scale-105"
            >
              <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                Live Demo
                <ExternalLink className="ml-2 h-3 w-3" />
              </a>
            </Button>
          )}
          {project.links?.github && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="transition-transform hover:scale-105"
            >
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
      <ProjectModal project={project} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
