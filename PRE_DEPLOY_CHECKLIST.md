# Pre-Deploy Checklist ✅

All critical fixes applied. Here's your final checklist before shipping.

## ✅ Completed

- [x] **[slug] params typing** - Promise-based for Next.js 15
- [x] **Tailwind v4 config** - PostCSS correctly configured
- [x] **Sitemap** - Includes all static + dynamic routes
- [x] **Contact API** - `/api/contact` route ready
- [x] **Package name** - Updated to `brennanlazzara-dev-portfolio`
- [x] **Canonical URLs** - Added to metadata
- [x] **Navigation brand** - "BL" with title attribute
- [x] **OG image** - Dynamic generator at `/opengraph-image`
- [x] **404 page** - Custom not-found page
- [x] **Build passing** - Zero errors, 19 routes

## 📋 Before You Push

### 1. Add Favicon Images (2 minutes)
```bash
# Generate at: https://favicon.io/favicon-generator/
# Add to /public/:
#   - favicon.png (32×32)
#   - apple-touch-icon.png (180×180)
```

See `/public/FAVICON_TODO.md` for details.

### 2. Optional: Fix NPM Warning
```bash
npm config delete "alias npmlogin"
# or
sed -i.bak '/alias npmlogin/d' ~/.npmrc
```

### 3. Test Locally (1 minute)
```bash
npm run dev
```

**Quick checks**:
- [ ] Visit http://localhost:3000
- [ ] Toggle dark mode
- [ ] Navigate to /work/voceviva
- [ ] Submit contact form (check console)
- [ ] Test mobile menu (resize window)

## 🚀 Deploy Commands

```bash
# 1. Initialize git
git init
git add .
git commit -m "feat: production portfolio (Next.js 15, Tailwind v4, shadcn/ui)"
git branch -M main

# 2. Push to GitHub
gh repo create brennanlazzara-dev-portfolio --public --source=. --push

# Or without GitHub CLI:
# Create repo at github.com/new
# Then:
git remote add origin https://github.com/brennanlazzara/brennanlazzara-dev-portfolio.git
git push -u origin main

# 3. Deploy to Vercel
# Go to vercel.com/new → Import repo → Deploy
```

## 🔧 Post-Deploy Setup

### Add Custom Domain (Vercel Dashboard)
1. Project → Settings → Domains
2. Add `brennanlazzara.dev` and `www.brennanlazzara.dev`
3. Update DNS with records Vercel provides

### Enable Contact Form Email
```bash
# 1. Sign up at resend.com
# 2. Get API key
# 3. Add to Vercel env vars:
RESEND_API_KEY=re_your_key

# 4. Uncomment Resend code in:
# app/api/contact/route.ts

# 5. Install package:
npm install resend
git add package.json package-lock.json
git commit -m "feat: enable Resend for contact form"
git push
```

## 📊 What You're Shipping

**Routes**: 19 total
- Static pages: Home, Work, Projects, About, Contact
- Dynamic case studies: 7 (VoceViva + 6 examples)
- API: Contact form endpoint
- SEO: Sitemap, robots.txt
- Meta: Dynamic OG images

**Performance**:
- SSG for all static content
- Edge runtime for OG images
- ~102KB shared JS bundle
- Fully responsive

**Features**:
- ✅ Dark mode
- ✅ Accessibility (ARIA, focus states)
- ✅ SEO optimized
- ✅ Contact form with validation
- ✅ Mobile responsive
- ✅ Type-safe (TypeScript strict)

## 🎯 Success Criteria

After deploy:
- [ ] Site loads at your Vercel URL
- [ ] Dark mode toggle works
- [ ] All pages render correctly
- [ ] Contact form submits (check logs)
- [ ] OG preview looks good (test on LinkedIn/Twitter)
- [ ] Mobile nav works
- [ ] Custom domain resolves (may take 1-24hrs)

## 📝 Notes

- Favicon images optional but recommended
- Resend integration can be added anytime
- VoceViva is featured as project #1
- All placeholder content removed
- Production-ready as-is

---

**You're ready to ship! 🚀**

Just add favicons, test locally, then push and deploy.
