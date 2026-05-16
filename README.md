# brennanlazzara.dev

Source for my personal portfolio — live at [brennanlazzara-dev-portfolio.vercel.app](https://brennanlazzara-dev-portfolio.vercel.app).

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and shadcn/ui. Deployed on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Then open [localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — eslint
- `npm run format` — prettier

## Environment

The contact form sends through [Resend](https://resend.com). Set `RESEND_API_KEY` in `.env.local`; without it, the API route returns a 500 instead of silently dropping submissions.
