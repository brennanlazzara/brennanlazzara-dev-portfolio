# Quick Deploy Guide

## 1. Test Locally (5 minutes)

```bash
npm run dev
# Visit http://localhost:3000
```

**Smoke test**:
- [ ] Dark mode toggle works
- [ ] All nav links work
- [ ] `/work/voceviva` renders correctly
- [ ] Contact form submits (check console)
- [ ] Mobile menu opens/closes

## 2. Push to GitHub (2 minutes)

```bash
git init
git add .
git commit -m "feat: production portfolio with VoceViva"
git branch -M main
gh repo create brennanlazzara-dev-portfolio --public --source=. --push
```

Or without GitHub CLI:
```bash
# Create repo manually at github.com/new
git remote add origin https://github.com/brennanlazzara/brennanlazzara-dev-portfolio.git
git push -u origin main
```

## 3. Deploy to Vercel (3 minutes)

### Option A: CLI
```bash
npm i -g vercel
vercel
# Follow prompts
```

### Option B: Web (recommended)
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `brennanlazzara/brennanlazzara-dev-portfolio`
3. Click **Deploy** (no config needed!)
4. Wait ~2 minutes
5. Visit your-app.vercel.app ✨

## 4. Add Custom Domain (5 minutes)

### In Vercel Dashboard:
1. Go to your project → **Settings** → **Domains**
2. Add `brennanlazzara.dev` and `www.brennanlazzara.dev`
3. Vercel shows DNS records you need

### In Your Domain Registrar:
Add these records (Vercel provides exact values):
```
A     @       76.76.21.21
CNAME www     cname.vercel-dns.com
```

Wait 5-60 minutes for DNS propagation.

## 5. Optional: Enable Email (5 minutes)

1. Sign up at [resend.com](https://resend.com) (free tier: 100 emails/day)
2. Get API key
3. In Vercel → **Settings** → **Environment Variables**:
   ```
   RESEND_API_KEY=re_your_key_here
   ```
4. Verify your domain in Resend
5. Install dependency:
   ```bash
   npm install resend
   git add package.json package-lock.json
   git commit -m "feat: add Resend for contact form"
   git push
   ```
6. Uncomment Resend code in `app/api/contact/route.ts`
7. Commit and push → Vercel auto-deploys

## 6. Post-Deploy

- [ ] Visit production URL
- [ ] Test contact form
- [ ] Share on LinkedIn (check OG preview)
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Set up Vercel Analytics (optional, free)

## Troubleshooting

**Build fails?**
```bash
npm run build  # Test locally first
```

**404 on custom domain?**
- Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)
- Wait up to 48hrs (usually <1hr)

**Contact form not working?**
- Check browser console
- Verify API route: `your-domain.com/api/contact`
- Check Vercel logs: Dashboard → Functions → Logs

**OG image not showing?**
- Clear LinkedIn/Twitter cache
- Wait 24hrs for social platforms to refresh

---

**That's it! Your portfolio is live. 🎉**
