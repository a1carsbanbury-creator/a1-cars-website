# A1 Cars Banbury website

Next.js App Router site for A1 Cars Banbury. Ready for Vercel Hobby.

## Local setup

Needs Node.js 20+.

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy on Vercel (Hobby)

1. Push this folder to a **personal** GitHub repo (not a GitHub Organization).
2. In Vercel, import that repo under your personal Hobby account.
3. Framework preset: **Next.js** (auto-detected).
4. Build command: `npm run build` · Output: default.
5. Optional env var: `NEXT_PUBLIC_SITE_URL` = your live domain (e.g. `https://a1carsbanbury.co.uk`).

No Team plan required when the GitHub repo and Vercel project are both under personal accounts.

## Notes

- Booking opens WhatsApp / email / phone. It does not confirm bookings on a server.
- Customer email in the UI is currently `business@a1carsbanbury.co.uk`.
