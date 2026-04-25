# Production Deployment Checklist

Use this before promoting `thesilacode.com` to production.

## Canonical Domain

- Set `NEXT_PUBLIC_SITE_URL=https://thesilacode.com`.
- Confirm Vercel production domain points to `thesilacode.com`.
- Confirm `https://www.thesilacode.com` redirects to `https://thesilacode.com` if `www` remains configured.

## Clerk

- Use a production Clerk instance, not development keys.
- Set `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` to the live `pk_live_...` key.
- Set `CLERK_SECRET_KEY` to the live `sk_live_...` key.
- Confirm `VERCEL_ENV=production` is present in Vercel production deployments.
- Add every BOH administrator to at least one allowlist:
  - `ADMIN_USER_IDS=clerk_user_id_1,clerk_user_id_2`
  - `ADMIN_EMAILS=founder@example.com,ops@example.com`
- Verify `/boh` requires sign-in and non-admin signed-in users cannot access BOH data.

## Stripe

- Set live `STRIPE_SECRET_KEY`.
- Set live `STRIPE_WEBHOOK_SECRET` from the production webhook endpoint.
- Configure webhook endpoint: `https://thesilacode.com/api/stripe/webhook`.
- Subscribe to checkout session, customer subscription, and invoice paid events used by the app.
- Set all live Stripe price IDs:
  - `STRIPE_PRICE_THE_CODE_MONTHLY`
  - `STRIPE_PRICE_THE_CODE_ANNUAL`
  - `STRIPE_PRICE_CAPSULE_MONTHLY`
  - `STRIPE_PRICE_CAPSULE_ANNUAL`
  - `STRIPE_PRICE_SILA_FOCUS`
  - `STRIPE_PRICE_FOUNDING_100` only when Founding 100 is operationally ready.
- Keep `NEXT_PUBLIC_ENABLE_FOUNDING_100=false` until legal, fulfilment, founder benefits, and support operations are ready.

## Database

- Set `DATABASE_URL` to the production Neon connection string.
- Apply the assessment submissions migration or run the approved Drizzle schema push.
- Seed Founding 100 seats only if the feature is ready and enabled.

## Email

- Set `RESEND_API_KEY`.
- Set `LEADS_TO_EMAIL` to the monitored support or founder inbox.
- Verify the sending domain is authenticated in Resend.

## Final Checks

- Run `npm run lint`.
- Run `npm run build`.
- Run `npm run smoke`.
- Walk home, assessment, shop/product, subscribe, blog, contact, and legal pages on mobile and desktop.
- Verify BOH APIs reject unauthenticated writes before testing any authenticated admin workflow.
