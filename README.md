# Founder Ceiling Diagnosis

An interactive lead-magnet landing page for **[NewCo]**. A founder-led marketing agency answers 15 questions and gets a personalized diagnosis: a dependence score, a maturity read across the three pillars (Technology, People, Process), an estimate of what the "founder ceiling" is costing them, and a 3-step action plan. Built as a free give that previews the paid 90-day install.

Static site. No build step, no dependencies, no backend required.

## View it locally

Open `index.html` directly in a browser, or serve the folder (recommended, so relative paths and the shared script load cleanly):

```bash
python -m http.server 5566
```

Then open http://localhost:5566/ .

## Configure before going live

Two one-line settings:

1. **Booking link** (where the CTAs point). In `script.js`, set:
   ```js
   const BOOKING_URL = "https://your-scheduler-link";
   ```
   Defaults to a `mailto:` so the buttons work out of the box.

2. **Lead capture** (name + email + the three numbers). In `index.html`, near the top of the page `<script>`, set:
   ```js
   var LEAD_ENDPOINT = "https://your-form-endpoint";
   ```
   Accepts a JSON POST (Formspree, Netlify Forms, or a CRM webhook such as GoHighLevel). Left blank, the report still unlocks and leads are stored in the visitor's browser, but nothing reaches a list.

## Deploy (GitHub Pages, free)

1. Push this repo to GitHub (see below).
2. In the repo: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `root`**.
3. Your page goes live at `https://<user>.github.io/<repo>/` in a minute or two.

Netlify or Vercel also work: drag the folder in, or point them at the repo. No build command, publish directory is the root.

## Files

```
index.html    The landing page (markup, page-specific CSS, and the diagnosis logic)
styles.css    Brand design system
script.js     Booking-link wiring, scroll reveal, footer year
```

## How the logic works

Every question, score band, maturity level, the cost formula, and the action-plan rules are documented in the logic map:
https://claude.ai/code/artifact/8899da60-7881-42cb-8fb7-df289198ab0d

## Notes

Internal [NewCo] marketing asset. Not for redistribution. Copyright [NewCo].
