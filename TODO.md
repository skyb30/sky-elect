# SKY-ELECT React Build TODO

## Step 1 — Dependencies & tooling
- [x] Update `@latest/package.json` to add: tailwindcss, postcss, autoprefixer, react-router-dom, framer-motion
- [x] Add `@latest/tailwind.config.js`
- [x] Add `@latest/postcss.config.js`

## Step 2 — Styling foundation
- [x] Update `@latest/src/index.css` to include Tailwind directives + premium design tokens
- [x] Verify `@latest/src/main.jsx` loads global styles correctly

## Step 3 — App shell + routing
- [x] Replace `@latest/src/App.jsx` with Router + Layout + page routes
- [x] Add route-level Framer Motion transitions

## Step 4 — Layout & shared components
- [x] Create shared components: Header, Footer, FloatingWhatsApp, BackToTop, DarkModeToggle, NewsletterSignup, FAQ, TestimonialCarousel, LoadingOverlay, Button, GlassCard
- [x] Create forms/buttons/modals components: ProductInquiryForm, ServiceBookingForm, WhatsAppOrderButton

## Step 5 — Pages
- [x] Implement pages under `@latest/src/pages`: Home, About, Products, Services, Projects, Contact, Login, Register
- [x] Implement Products product search/filter + detail modal + WhatsApp order button

## Step 6 — Data layer
- [x] Create data files under `@latest/src/data`: products, services, projects, testimonials, faqs, brands

## Step 7 — Hooks & UX
- [x] Add hooks: useLocalStorage, usePageScrollToTop
- [x] Add smooth scroll / scroll-to-top behavior

## Step 8 — Build & verify
- [x] Install deps: `npm install` in `@latest/`
- [x] Run dev server: `npm run dev`
- [x] Run build + lint: `npm run build` and `npm run lint`
