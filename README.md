# Developer Portfolio

A modern, professional developer portfolio built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui. Features a clean design, responsive layout, dark mode support, and dynamic project showcase.

## Features

✨ **Modern Stack**
- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui components
- Responsive design that works on all devices

🎨 **User Experience**
- Dark mode toggle with system preference detection
- Smooth animations and transitions
- Accessibility-focused (ARIA labels, focus states, skip-to-content)
- SEO optimized with meta tags, Open Graph, and Twitter cards

📱 **Pages**
- **Home**: Hero section with featured work and tech stack
- **Work**: Professional projects with detailed case studies
- **Projects**: All projects including personal work
- **About**: Background, experience, and skills
- **Contact**: Form with validation (ready to wire to email service)

🚀 **Developer Experience**
- File-based routing
- TypeScript interfaces for type safety
- Data-driven project showcase
- ESLint + Prettier configured
- Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### 1. Update Personal Information

**`app/layout.tsx`** - Update SEO metadata:
```typescript
export const metadata: Metadata = {
  title: {
    default: "Your Name - Developer Portfolio",
    // ...
  },
  description: "Your description",
  metadataBase: new URL("https://your-domain.com"),
  // Update social links
}
```

**`components/navigation.tsx`** - Update logo/brand:
```typescript
<Link href="/" className="text-xl font-bold">
  YourInitials
</Link>
```

**`components/footer.tsx`** - Update footer content and social links:
```typescript
// Update name, social URLs, email
```

**`components/hero-section.tsx`** - Update hero content:
```typescript
// Update your name, tagline, social links
```

### 2. Add Your Projects

Edit **`lib/data.ts`** to add your projects:

```typescript
export const projects: Project[] = [
  {
    slug: "your-project-slug",
    title: "Project Title",
    role: "Your Role",
    period: "2024 - Present",
    stack: ["React", "TypeScript", "Next.js"],
    summary: "Brief description of the project",
    impact: [
      "Key achievement or metric",
      "Another important result",
    ],
    links: {
      live: "https://live-demo.com",
      github: "https://github.com/username/repo",
      case_study: "/work/your-project-slug",
    },
    // Optional fields for detailed case studies
    description: "Full project description",
    challenges: ["Challenge 1", "Challenge 2"],
    solutions: ["Solution 1", "Solution 2"],
    results: ["Result 1", "Result 2"],
    featured: true, // Show on homepage
    category: "work", // or "personal"
  },
  // Add more projects...
]
```

### 3. Update About Page

Edit **`app/about/page.tsx`** to customize your bio, experience, and skills.

### 4. Configure Contact Form

The contact form in **`components/contact-form.tsx`** is ready to wire up to an email service. Replace the TODO comment with your email API:

```typescript
// Option 1: Use a serverless function
await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})

// Option 2: Use a service like Resend, SendGrid, etc.
```

### 5. Update SEO Settings

**`app/sitemap.ts`** and **`app/robots.ts`**:
```typescript
const baseUrl = "https://your-actual-domain.com"
```

### 6. Add Images (Optional)

Place project images in the `public/images/` directory and reference them in your project data:
```typescript
hero: "/images/project-hero.jpg",
images: ["/images/project-1.jpg", "/images/project-2.jpg"],
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Environment Variables

If you add API routes or external services, create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
# Add other env variables as needed
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Home page
│   ├── work/
│   │   ├── page.tsx        # Work listing
│   │   └── [slug]/
│   │       └── page.tsx    # Dynamic case study pages
│   ├── projects/
│   │   └── page.tsx        # Projects listing
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # Robots.txt config
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── navigation.tsx      # Header navigation
│   ├── footer.tsx          # Footer
│   ├── theme-provider.tsx  # Dark mode provider
│   ├── theme-toggle.tsx    # Dark mode toggle
│   ├── hero-section.tsx    # Hero component
│   ├── project-card.tsx    # Project card component
│   └── contact-form.tsx    # Contact form with validation
├── lib/
│   ├── data.ts            # Project data
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Theme**: next-themes
- **Deployment**: Vercel

## License

This project is open source and available under the MIT License.

## Support

If you have questions or run into issues, please open an issue in this repository.
# brennanlazzara-dev-portfolio
