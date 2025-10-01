# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 1. Install & Run

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## 2. Personalize (Priority Files)

### Must Update:
1. **`lib/data.ts`** - Replace sample projects with yours
2. **`app/layout.tsx`** - Update name, description, domain URLs (lines 15-36)
3. **`components/hero-section.tsx`** - Update your name and tagline (lines 9-13)
4. **`components/navigation.tsx`** - Update logo/brand (line 23)
5. **`components/footer.tsx`** - Update name and social links (lines 11, 68-100)

### Customize Content:
6. **`app/about/page.tsx`** - Update bio and skills
7. **`components/contact-form.tsx`** - Wire up email service (line 36)
8. **`app/sitemap.ts`** - Update domain (line 6)
9. **`app/robots.ts`** - Update domain (line 4)

## 3. Add Your Projects

In `lib/data.ts`, replace the sample projects:

```typescript
export const projects: Project[] = [
  {
    slug: "my-awesome-project",
    title: "My Awesome Project",
    role: "Lead Developer",
    period: "2024",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    summary: "Built an amazing thing that does X, Y, and Z",
    impact: ["Achieved 100% user satisfaction"],
    links: {
      live: "https://example.com",
      github: "https://github.com/username/repo",
      case_study: "/work/my-awesome-project" // For detailed page
    },
    featured: true, // Shows on homepage
    category: "work", // or "personal"
  },
]
```

## 4. Deploy to Vercel

```bash
# Push to GitHub first
git add .
git commit -m "Initial portfolio setup"
git push

# Then deploy
# 1. Go to https://vercel.com
# 2. Import your GitHub repo
# 3. Deploy! (zero config needed)
```

## 5. Optional Enhancements

- Add project images to `public/images/`
- Set up email service for contact form
- Add Google Analytics
- Create custom OG images

## Need Help?

See the full [README.md](./README.md) for detailed documentation.
