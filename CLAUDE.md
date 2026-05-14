@AGENTS.md

# Leeza International — Project Guide

## 1. Business Context

**Leeza International** is a Sri Lankan **B2B import / export** company. The website is a marketing + lead-generation tool — **not** an e-commerce store. Buyers browse the catalog and convert through **WhatsApp** or the contact form (which itself routes to WhatsApp).

- **Brand:** Leeza International (parent) · **Dr Ceylon** (product brand)
- **Founded:** 2020
- **HQ:** Sri Lanka
- **Markets:** 20+ countries (EU, Middle East, US, UK, Japan, Australia, Singapore)
- **Product mix:** 32 SKUs across 7 categories
  - Ceylon Cinnamon (7) — flagship category
  - Ceylon Tea (5)
  - Coffee & Cocoa (4)
  - Coconut Products (2)
  - Ceylon Herbs & Spices (1)
  - Ceylon Grains & Pulses (2)
  - Organic Superfoods, European range (11)
- **Audience:** retailers, distributors, food manufacturers, foodservice buyers — **not consumers**.
- **Conversion CTAs:** "Get a Quote", "Send Inquiry", **"WhatsApp Us"** (single phone: +94 760 009 500).

### Brand voice
Premium · authentic · heritage · trusted · natural. Never gimmicky, never discount-driven. Editorial / magazine tone over marketplace tone.

## 2. Tech Stack

| Concern | Choice |
|---|---|
| Framework | **Next.js 16.2.6** (App Router, Turbopack dev) |
| React | 19.2.4 |
| Styling | **CSS Modules** (`.module.css`) for components, **styled-jsx** for one-off page styles, plain CSS in `app/globals.css` for global tokens |
| UI library | **None** — bespoke styles, no Tailwind, no shadcn |
| Fonts | `Playfair Display` (heading) + `DM Sans` (body), loaded via Google Fonts in `globals.css` |
| Icons | Inline SVG + emoji |
| Data | Static JS files in `src/data/` (no DB, no CMS) |
| Deploy target | Vercel-compatible static / SSR |

> ⚠️ **Read `AGENTS.md`** — this is Next.js **16**, not 13/14/15. The App Router conventions are mostly familiar but some APIs may have changed. Async `params` is one notable change (see `app/products/[slug]/page.js`).

## 3. File Structure

```
website/
├── app/
│   ├── layout.js              # Root layout: Navbar + main + Footer + WhatsAppFloat
│   ├── page.js                # Home — composes <Hero /> + sections
│   ├── globals.css            # Design tokens, base resets, .btn / .card / .badge utilities
│   ├── components/
│   │   ├── Hero.js            # Premium hero (CSS Module)
│   │   ├── Hero.module.css
│   │   ├── Navbar.js          # Sticky glass navbar w/ services dropdown
│   │   ├── Navbar.module.css
│   │   ├── Footer.js          # styled-jsx footer
│   │   └── WhatsAppFloat.js   # Floating WA button (bottom-right)
│   ├── about/page.js          # 'use client' — story, values, approach
│   ├── contact/page.js        # 'use client' — form submits to WhatsApp deep-link
│   ├── products/
│   │   ├── page.js            # 'use client' — sidebar filter + grid
│   │   └── [slug]/
│   │       ├── page.js        # Server component — generateStaticParams + generateMetadata
│   │       └── page.module.css
│   └── services/
│       ├── import/page.js
│       ├── export/page.js
│       └── import-export-agent/page.js
├── public/
│   └── products/              # Product imagery (.jpeg / .png)
├── src/data/
│   ├── categories.js          # 7 category records (id, name, icon, count)
│   ├── products.js            # Re-exports parts 1+2, helpers (getProductBySlug, etc.)
│   ├── products-part1.js      # Products 1–16
│   └── products-part2.js      # Products 17–32
├── AGENTS.md                  # Next.js-16-specific agent rules — READ FIRST
├── CLAUDE.md                  # ← this file
└── README.md
```

## 4. Design System

### Color tokens (`app/globals.css`)
```css
--primary:        #7B5B3A   /* warm brown — primary brand */
--primary-dark:   #5C3D1E
--primary-light:  #A8845A
--accent:         #2D7D46   /* deep green — organic / nature */
--accent-light:   #3DA55C
--gold:           #C9A96E   /* signature gold — accents, headlines */
--gold-light:     #E8D5A8
--whatsapp:       #25D366
--bg:             #FAFAF7   /* near-white page bg */
--bg-warm:        #F5F1EB   /* cream — section bg */
--text:           #1A1A1A
--text-secondary: #5A5A5A
--text-muted:     #8A8A8A
```

### Dark hero gradient
```css
linear-gradient(135deg, #15100A 0%, #221610 30%, #2C1810 55%, #3D261A 80%, #4A2E1A 100%)
```

### Typography
- Headings → `Playfair Display` (serif, italic accent on gold = signature look)
- Body → `DM Sans`
- Section title sizes: `2.5rem` desktop → `1.75rem` mobile
- Hero headline: `clamp(2.4rem, 5vw, 4.2rem)`

### Spacing & shape
```css
--container: 1200px
--radius-sm: 8px;  --radius-md: 12px;  --radius-lg: 20px;  --radius-xl: 28px
--shadow-sm/md/lg/xl
--ease: cubic-bezier(0.4, 0, 0.2, 1)
```

### Reusable utilities in `globals.css`
- `.container`, `.section`, `.section-title`, `.section-subtitle`
- `.btn` + variants: `.btn-primary` `.btn-accent` `.btn-whatsapp` `.btn-outline` `.btn-ghost`
- `.card`, `.badge` + `.badge-primary` `.badge-accent`
- Animations: `fadeInUp`, `fadeIn`, `slideInLeft`, `float`, `pulse`

## 5. Styling Conventions & Pitfalls

### When to use which approach

| Use case | Approach |
|---|---|
| Component reused across pages OR has child components with their own JSX | **CSS Module** (`Foo.module.css` + `import s from './Foo.module.css'`) |
| Page-specific styles, single component | `<style jsx>` at the bottom of the page |
| Design tokens, base resets, global utilities | `app/globals.css` |

### ⚠️ Known styled-jsx pitfall
`styled-jsx` scopes class names **per React component**. If you define a class inside `<style jsx>` and that class is used by a **child component** (e.g. `<StatItem />`), the styles **won't apply** because the child has a different scoping attribute.

**Rule of thumb:** if your component has child sub-components, use a **CSS Module** instead. The `Hero` component was migrated to a CSS Module for exactly this reason.

### CSS-in-tag style guide
- Mobile-first responsive: write base styles → override in `@media (max-width: ...)`
- Use design tokens (`var(--gold)`) — never hardcode hex inside components if a token exists
- Keep animations in `cubic-bezier(0.22, 1, 0.36, 1)` for snappy ease-out, or `var(--ease)` for default
- Prefer `clamp()` for fluid type on hero/headlines

## 6. Key Components

### `<Hero />` — `app/components/Hero.js`
Editorial split-screen hero with:
- **Left:** eyebrow tag w/ pulsing gold dot · serif headline w/ italic gold accent on "Finest Fields" · subline · primary gold CTA + ghost CTA · 4 frosted-glass stat pills with on-scroll **count-up** animation
- **Right:** layered product showcase — main rotated card (Cinnamon Alba) + 3 floating thumbnails (tea, coffee, coconut) + floating "Quality Verified" badge + ISO/HACCP/Organic certification chip
- **Background:** multi-layer gradient + SVG noise + diagonal lines + 2 breathing orbs (gold + green)
- **Trust strip below hero:** country flags + cert pills

### `<Navbar />` — `app/components/Navbar.js`
Sticky frosted nav with logo (🌿 + brand + tagline), nav links, services hover-dropdown, WhatsApp CTA, mobile hamburger. **80px tall** — `<main>` in `layout.js` has `paddingTop: 72px`.

### `<Footer />` — `app/components/Footer.js`
Dark gradient · 4-col grid (about, products, services, contact) · trust badges row · uses `styled-jsx`.

### `<WhatsAppFloat />` — Floating bottom-right WhatsApp button, persistent on every page.

## 7. Routes

| Path | File | Type |
|---|---|---|
| `/` | `app/page.js` | Client (uses `<Hero />` which is client) |
| `/about` | `app/about/page.js` | Client |
| `/products` | `app/products/page.js` | Client (filter state, search) |
| `/products/[slug]` | `app/products/[slug]/page.js` | **Server** — `generateStaticParams` + `generateMetadata` |
| `/services/import` | `app/services/import/page.js` | — |
| `/services/export` | `app/services/export/page.js` | — |
| `/services/import-export-agent` | `app/services/import-export-agent/page.js` | — |
| `/contact` | `app/contact/page.js` | Client (form → WhatsApp deep link) |

## 8. Data Layer

`src/data/products.js` re-exports from `products-part1.js` (1–16) and `products-part2.js` (17–32). Each product:
```js
{
  id: "product-01",
  slug: "ceylon-cinnamon-sticks-alba-grade",
  name: "...",
  category: "ceylon-cinnamon",      // matches categories.js
  image: "/products/cinnamon-alba.jpeg",
  shortDesc: "...",                 // 1 sentence — used on cards
  description: "..."                // long-form for detail page
  // (additional fields per product type)
}
```

Helpers in `src/data/products.js`:
- `getProductBySlug(slug)`
- `getProductsByCategory(categoryId)`
- `getAllSlugs()`

To add a product → append to `products-part2.js` (or part1 if reorganizing) → drop image into `public/products/` → bump category `count` in `categories.js`.

## 9. WhatsApp-First Conversion

Every CTA path leads to **+94 760 009 500**. Patterns:

```js
// Generic
href="https://wa.me/94760009500?text=ENCODED_MESSAGE"

// Pre-filled product inquiry (used in product detail)
const waMsg = encodeURIComponent(`Hi, I'm interested in ${product.name}. Can you share pricing and availability?`);

// Contact form (in app/contact/page.js)
window.open(`https://wa.me/94760009500?text=${encodeURIComponent(...)}`, '_blank');
```

Always prefer encoded pre-filled messages over generic links.

## 10. Common Tasks — Quick Recipes

### Adding a new section to the home page
1. Add JSX inside `app/page.js` between existing `<section>` blocks
2. Add styles inside the bottom `<style jsx>` block of `page.js` — but if you add child components, see § 5 styled-jsx pitfall
3. Use existing utility classes from `globals.css` where possible (`.section`, `.container`, `.btn`, `.card`)

### Adding a new page
1. Create `app/<route>/page.js`
2. Add to navbar links in `app/components/Navbar.js`
3. Add to footer if appropriate
4. Match existing hero pattern: `linear-gradient(135deg, #1A1208, #2C1810 40%, #4A2E1A)` background + gold text-clipped `<h1>` + uppercase `.sbadge` eyebrow

### Tweaking the hero
All hero styling lives in `app/components/Hero.module.css`. Class names use camelCase per CSS Module convention and are accessed via `s.className` in `Hero.js`. To swap product images, edit the `<img src=>` paths inside `Hero.js`.

### Re-using the count-up animation elsewhere
Extract `useCountUp` from `app/components/Hero.js` into a shared `app/lib/useCountUp.js` if needed in another component (e.g. about-page stats).

## 11. Performance & SEO

- All images are **plain `<img>` tags**, not `<Image />` — there's a known speed win available by migrating to `next/image`. Currently many product images are very small (some <10KB) so this is low-priority.
- `generateMetadata` is implemented on `/products/[slug]` for per-product OG titles
- Site-wide `<title>` and `<meta description>` come from `app/layout.js`
- Consider adding `sitemap.js` and `robots.js` (App Router conventions in Next 16)

## 12. Things to Avoid

- ❌ **Do not** install Tailwind / shadcn / any UI library — the design is bespoke and we want it to stay that way.
- ❌ **Do not** change the brand color palette without updating `globals.css` tokens; never hard-code colors that have a token.
- ❌ **Do not** remove the WhatsApp-first conversion paths or replace them with generic forms.
- ❌ **Do not** convert the site to consumer-facing e-commerce (cart, checkout) — it's B2B.
- ❌ **Do not** define hero-style classes inside `<style jsx>` of a parent if they're consumed by child components. Use CSS Modules.
- ❌ **Do not** use emojis as primary content icons in net-new sections — prefer inline SVG. (Existing emoji-based icons are tolerated as legacy.)

## 13. Dev Commands

```bash
npm run dev      # Next.js 16 dev server with Turbopack (port 3000, falls back to 3001)
npm run build    # Production build
npm run start    # Run prod build
npm run lint     # ESLint (next/core-web-vitals)
```

If `Port 3000 is in use` repeatedly, an orphan dev server is running. Kill via `taskkill /PID <pid> /F` — the conflicting PID is printed in the dev output.
