# Arjun Chaudhary — Personal Political Website

> Premium, responsive personal website for political leader, entrepreneur, and community voice Arjun Chaudhary.

---

## 💰 Total Cost Breakdown

| Item | Cost |
|------|------|
| Hosting (Vercel Hobby Plan) | **FREE** |
| GitHub (public repo) | **FREE** |
| All Libraries (Next.js, Tailwind, Framer Motion, Lucide) | **FREE** |
| Fonts (Google Fonts — Playfair Display + Inter) | **FREE** |
| Contact Form (WhatsApp / mailto link) | **FREE** |
| Custom Domain (~₹600–1200/year) | **Only paid item** |

> **Recommended domain registrar:** [Cloudflare Registrar](https://cloudflare.com/products/registrar/) — no markup, cheapest pricing.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion (MIT license)
- **Icons:** Lucide React (MIT license)
- **Fonts:** Google Fonts (Playfair Display + Inter)
- **Contact Form:** WhatsApp click-to-chat (zero backend, zero cost)
- **Images:** Next.js `<Image />` built-in optimization

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## 📦 FREE Deployment to Vercel

1. Create a free GitHub account (if not already): [github.com](https://github.com)
2. Create a new public repository and push this code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/arjun-chaudhary-website.git
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com) → Sign up with GitHub (**FREE Hobby plan**)
4. Click **"New Project"** → Import the GitHub repo
5. Vercel auto-detects Next.js — click **Deploy**
6. Site goes live on a free `.vercel.app` subdomain **instantly** ✅

---

## 🌐 Connecting Your Custom Domain

1. Buy domain from [Cloudflare Registrar](https://cloudflare.com/products/registrar/) or GoDaddy/BigRock
2. In Vercel: **Settings → Domains → Add your domain**
3. Update DNS records at your registrar as per Vercel's instructions
4. SSL/HTTPS is **automatic and FREE** via Vercel ✅

---

## ✏️ Updating Content (No coding needed for text changes)

All content is in plain text inside the component files:

| What to update | File to edit |
|---------------|-------------|
| Hero text, tagline, CTAs | `app/components/Hero.tsx` |
| Bio, Quick Facts | `app/components/About.tsx` |
| Political timeline milestones | `app/components/Timeline.tsx` |
| Companies / directorships | `app/components/Ventures.tsx` |
| Stats, Lake Festival card | `app/components/Achievements.tsx` |
| Degrees, institutions | `app/components/Education.tsx` |
| Father's tribute | `app/components/Family.tsx` |
| Gallery images | `app/components/Gallery.tsx` |
| **Phone/WhatsApp, Email, Social links** | `app/components/Contact.tsx` (top of file) |
| Footer links | `app/components/Footer.tsx` |
| SEO title, description, OG tags | `app/layout.tsx` |

---

## 📸 Replacing Placeholder Images

1. Add real photos to `/public/images/` folder
2. Update the `src` props in components from `placehold.co` URLs to `/images/your-photo.jpg`

Example in `Hero.tsx`:
```tsx
// Replace this:
src="https://placehold.co/800x1000/0A1F44/FF8C00?text=Arjun+Chaudhary"
// With this:
src="/images/arjun-hero.jpg"
```

---

## 📬 Switching Contact Form to Formspree (Optional)

The default contact form opens WhatsApp (zero cost). To switch to email-based form:

1. Sign up FREE at [formspree.io](https://formspree.io) (50 submissions/month free)
2. Create a new form and copy your form ID
3. In `Contact.tsx`, replace the `handleSubmit` function with Formspree:
   ```tsx
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

---

## 📊 Free Analytics (Optional)

**Option 1 — Vercel Analytics (built-in, no code):**
- Vercel dashboard → Analytics tab → Enable

**Option 2 — Google Analytics 4 (free):**
1. Sign up at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `app/layout.tsx`:
   ```tsx
   <Script src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} />
   ```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| Primary Navy | `#0A1F44` | Headings, nav, dark sections |
| Accent Saffron | `#FF8C00` | CTAs, accents, highlights |
| Gold | `#C9A961` | Premium accents, gradients |
| Cream | `#FAF7F2` | Section backgrounds |
| Text Dark | `#1A1A1A` | Body text |
| Text Muted | `#6B7280` | Secondary text |

---

## 📱 Responsive Breakpoints

- **Mobile:** 375px–767px (single column, hamburger menu)
- **Tablet:** 768px–1023px (2-column grids)
- **Laptop:** 1024px–1439px (full multi-column)
- **Desktop:** 1440px+ (max-width 1280px, centered)

---

*© 2026 Arjun Chaudhary. All Rights Reserved.*
