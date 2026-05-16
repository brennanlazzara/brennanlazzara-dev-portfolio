export function StructuredData() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Brennan Lazzara",
    url: "https://brennanlazzara.dev",
    sameAs: [
      "https://github.com/brennanlazzara",
      "https://www.linkedin.com/in/brennan-lazzara",
    ],
    jobTitle: "Senior / Staff Frontend Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Chatterworks",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
    />
  )
}
