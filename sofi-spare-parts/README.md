# Sofi Spare Parts — Website

A modern, mobile-first, single-page business website for **Sofi Spare Parts**,
built with Next.js 14, TypeScript, and Tailwind CSS.

---

## Quick Start

```bash
# 1. Go into the project folder
cd sofi-spare-parts

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Updating Business Information

All phone numbers, links, addresses, and social media URLs live in **one file**:

```
constants/business.ts
```

Edit that file and every part of the website updates automatically.

---

## Adding Real Photos

Place your images inside the `public/` folder:

```
public/
├── logo.png          ← shop logo
├── hero.jpg          ← hero background image
├── shop/             ← shop interior/exterior photos
├── cars/             ← car parts photos
└── bajaj/            ← Bajaj/TVS parts photos
```

Then replace the placeholder emoji blocks in the components with Next.js
`<Image>` tags pointing to your files.

---

## Deploying to Vercel

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js — click **Deploy**
4. Your site is live at a `.vercel.app` URL
5. Connect a custom domain from the Vercel dashboard

---

## Project Structure

```
sofi-spare-parts/
├── app/
│   ├── page.tsx          ← main page (assembles all sections)
│   ├── layout.tsx        ← root layout + metadata
│   └── globals.css       ← Tailwind + custom animations
│
├── components/
│   ├── ThemeProvider.tsx  ← light/dark mode context
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── VehicleSections.tsx
│   ├── Categories.tsx
│   ├── WhyChooseUs.tsx
│   ├── Gallery.tsx
│   ├── Testimonials.tsx
│   ├── Location.tsx
│   ├── Contact.tsx
│   ├── SocialMedia.tsx
│   ├── FloatingWhatsApp.tsx
│   └── Footer.tsx
│
├── constants/
│   └── business.ts       ← ALL business info in one place
│
├── hooks/
│   └── useReveal.ts      ← scroll-reveal animation hook
│
└── public/               ← images go here
```

---

## Tech Stack

| Tool         | Purpose                        |
|--------------|-------------------------------|
| Next.js 14   | Framework                      |
| TypeScript   | Type safety                    |
| Tailwind CSS | Styling                        |
| Lucide React | Icons                          |
| Google Maps  | Embedded map in Location section |
| Vercel       | Deployment                     |

---

## Things to Fill In Before Going Live

All of these are in `constants/business.ts`:

- [ ] Real phone number
- [ ] Real WhatsApp number
- [ ] Real Telegram link
- [ ] Real Google Maps embed URL and directions link
- [ ] Real TikTok, Instagram, Facebook links
- [ ] Opening and closing hours (add to `BUSINESS.hours`)
- [ ] Real shop and product photos in `public/`
- [ ] Real customer testimonials in `components/Testimonials.tsx`
