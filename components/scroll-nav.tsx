"use client"

import { useState, useEffect } from "react"

const sections = [
  { id: "hero", label: "Home" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

export function ScrollNav() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <div className="fixed top-1/2 right-8 z-40 hidden -translate-y-1/2 flex-col gap-4 lg:flex">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative flex items-center"
          aria-label={`Scroll to ${section.label}`}
        >
          <span className="bg-foreground text-background absolute right-6 rounded-md px-2 py-1 text-xs whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100">
            {section.label}
          </span>
          <span
            className={`h-3 w-3 rounded-full border-2 transition-all ${
              activeSection === section.id
                ? "border-primary bg-primary scale-125"
                : "border-muted-foreground hover:border-primary bg-transparent"
            }`}
          />
        </button>
      ))}
    </div>
  )
}
