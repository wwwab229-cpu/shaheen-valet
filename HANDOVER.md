# Shaheen Valet — asset and website handover

## Replace image placeholders
Upload approved, optimized image files to `public/images/` and update the matching image paths in `src/routes/index.tsx`:

- `hero-image-placeholder.svg` — main hero photograph
- `founder-photo-placeholder.svg` — Founder Asif portrait
- `venue-experience-placeholder.svg` — venue / valet experience photograph
- `shaheen-valet-logo-placeholder.svg` — approved company logo

Keep descriptive alt text, compress images before upload, and use WebP or AVIF for photographs where supported. Do not use third-party venue logos without written permission.

## Website content
Edit venue names, services, contact email, public phone number, and WhatsApp link in `src/lib/site-content.ts`. Confirm venue spelling and permission before publishing.

## Contact options
The public contact section displays phone, WhatsApp, and email. The WhatsApp link uses the international-format number `92302973692`; the visible display number is `0302 9793692`.

## Deploy
Vercel should be connected to the GitHub repository. Commits pushed to the production branch trigger deployments automatically.

## Access
Do not make the repository public for the client handover. Grant repository and Vercel access only to authorized client/team accounts. Public website visitors should never receive source-control or deployment edit permissions.
