export function StructuredData() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Brennan Lazzara",
    url: "https://brennanlazzara.dev",
    sameAs: [
      "https://github.com/brennanlazzara",
      "https://www.linkedin.com/in/brennanlazzara",
    ],
    jobTitle: "Senior Full-Stack Engineer",
    worksFor: {
      "@type": "Organization",
      name: "ImagineX Consulting",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
    />
  )
}
