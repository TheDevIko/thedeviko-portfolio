# My Portfolio

Personal portfolio built with Next.js, Supabase, and Tailwind.
Live: https://thedeviko.vercel.app

## Tech Stack
- Node
- Next
- Supabase
- React Fast Marquee
- React Email
- Resend
- TailwindCSS
- 

## Environment Variables
- RESEND_API_KEY
- CONTACT_EMAIL
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
- NEXT_PUBLIC_SUPABASE_SECRET_KEY
- NEXT_PUBLIC_SITE_URL

## Disabled Pages:

- Projects

## Updating Data Definition

npx supabase gen types typescript --project-id stjsotihzxcnykwsmjnj > lib/supabase/data/types.ts

## Development

npm run dev

## Production

npm run build && npm start

## Others

next.config.ts