# Velorix Logistics — app-subdomain deployment

This branch deploys the Velorix Logistics site to **app.velorixlogistics.org**,
a separate instance from the main site with its own backend and support
services, using the same business branding (name and logo).

## Structure

Static multi-page HTML site, no build step, no framework:

- `index.html`, `about.html`, `login.html` — public pages
- `page/about.html`, `page/history.html`, `page/track.html` — additional pages
- `dashboard/` — admin dashboard (shipment creation, PDF export, email notifications)
- `logistip/` — shared front-end assets (JS/CSS/images)
- `supabase_schema.sql`, `migration_*.sql` — database schema for Supabase

## Services used on this branch

| Service   | Purpose                              | Configured in |
|-----------|---------------------------------------|----------------|
| Supabase  | Database, auth, shipment tracking     | `login.html`, `dashboard/index.html`, `page/track.html` |
| EmailJS   | Shipment creation notification emails | `dashboard/index.html` |
| Smartsupp | Live chat widget                      | `index.html`, `about.html`, `login.html`, `page/about.html`, `page/history.html`, `page/track.html` |

This branch's Supabase project, EmailJS service/template, and Smartsupp widget
are separate from the `main` branch's — data and chat sessions on
app.velorixlogistics.org do not mix with the main site.

## Deployment

- **Host:** Vercel, deployed from this branch (`app-subdomain`) as its
  production branch, in a project separate from the main site's.
- **Domain:** `app.velorixlogistics.org`, added in Vercel's project settings
  under Domains.
- **DNS:** managed at name.com — CNAME record `app` → `cname.vercel-dns.com`.

## Database setup

Before the site is fully functional, run against the Supabase project tied
to this branch (SQL Editor, in order):

1. `supabase_schema.sql`
2. `migration_add_contact_fields.sql`
3. `migration_progress_percent.sql`

## Updating credentials

Supabase URL/key, EmailJS IDs, and the Smartsupp key are hardcoded inline in
the HTML files listed above (no `.env` — this is a static site with no build
step). To rotate any of them, update every file listed in the table above
consistently.
