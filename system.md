# System Document — Sofi Spare Parts Website

## What This Document Is

This is the single reference document for planning and building the Sofi Spare Parts website. It combines the business requirements from `info.md` and the layout vision from `overview.md` into one clear guide. Anyone working on the website — now or in the future — should read this first.

---

## The Business

**Business Name:** Sofi Spare Parts
**Type:** Spare parts and automotive products shop
**Location:** Shashamane 01, Ethiopia
**Hours:** Open 7 days a week
**Delivery:** Available

Sofi Spare Parts serves vehicle owners in Shashamane and surrounding areas. The shop carries a wide range of quality spare parts and automotive products, with two clear customer groups:

- **Car owners** — looking for engine parts, engine oil, filters, batteries, tires, wheels, body parts, and other car components, including Isuzu models and other car types
- **Bajaj and TVS three-wheeler owners** — looking for motor parts, engine parts, pistons, engine oil, filters, batteries, tires, wheels, and other Bajaj/TVS-specific products

The shop also offers delivery, making it accessible to customers who cannot visit in person.

---

## What Kind of Website This Is

This is a **single-page informational business website**, not an e-commerce store. Customers will not be able to add products to a cart or pay online.

The purpose of the website is to:

- Tell customers what Sofi Spare Parts is and what it sells
- Help customers find the right section — cars or Bajaj/TVS
- Show product categories clearly
- Display shop and product photos
- Make it extremely easy to call, WhatsApp, or Telegram the business
- Help customers find the shop using Google Maps
- Show customer reviews to build trust
- Link to the business's social media pages

The entire website should guide the customer toward one of two outcomes: **visiting the shop** or **contacting the business directly**.

---

## The Two Websites

There are two websites to build from this foundation.

### Website One — Sofi Spare Parts (Business Website)

This is the main website for the Sofi Spare Parts business. Its goal is to represent the shop professionally and help real customers find and contact the business.

Everything in this document describes this website. It should feel like a proper automotive business website — modern, trustworthy, well-organized, and easy to use on a mobile phone.

### Website Two — Shopping Website

The shopping website is a separate project that builds on the same business information but adds the ability for customers to browse and purchase products online.

This shopping website should include:

- A product catalog organized by vehicle type — car and Bajaj/TVS
- Product categories matching those defined in this document: engine parts, engine oil, filters, batteries, tires, wheels, body parts, Bajaj/TVS motor parts, and others
- Individual product pages or cards with a name, description, and price
- A cart and checkout flow
- Order placement, whether through a form, WhatsApp, or an actual payment system
- The same contact options — phone, WhatsApp, Telegram — so customers can ask questions before or during a purchase
- The same location information for customers who want to collect in person
- Delivery as an available option for orders

The shopping website should carry the same brand identity, design language, and trust elements as the informational website. The product information, categories, and vehicle groupings described in this document apply to both.

Both websites serve Sofi Spare Parts. They should look and feel consistent.

---

## How to Build These Websites

### The Core Approach

Both websites are built with the same technology stack. The informational website is built first. The shopping website reuses its design, components, and structure, then adds the product, cart, and order layers on top.

### Technology Stack

**Framework:** Next.js
**Language:** TypeScript
**Styling:** Tailwind CSS
**Icons:** Lucide React
**Maps:** Google Maps Embed
**Deployment:** Vercel

For the informational website, no database or backend is needed. Everything is static content.

For the shopping website, a backend will be needed to manage products, orders, and customer information. This can be added in a second phase once the informational website is complete.

### How a Next.js + Tailwind Website Is Built

Next.js is a framework built on top of React. It allows you to build fast, modern websites using components — individual, reusable pieces of UI such as a navigation bar, a section, a card, or a button. Each section of the website becomes its own component file.

Tailwind CSS is a styling system that works directly inside your component files using class names. Instead of writing separate CSS files, you apply styles like color, spacing, layout, and typography directly to your HTML elements.

TypeScript adds type safety to JavaScript, which reduces errors and makes the code easier to maintain.

The website is deployed to Vercel, which is the recommended platform for Next.js projects. Deploying means publishing the website to a public URL where anyone on the internet can access it.

### Building the Informational Website Step by Step

**Step 1 — Project setup**

Create a new Next.js project with TypeScript and Tailwind CSS configured from the start. Set up the folder structure with an `app` directory for the page and layout files, a `components` directory for each section, and a `public` directory for images and the logo.

**Step 2 — Layout and global styles**

Set up the root layout file, which wraps every page. Define global font choices, background colors, and the base styles for both light and dark mode. This becomes the visual foundation of the website.

**Step 3 — Build each section as a component**

Each section of the website is its own component. Build them in the order they appear on the page:

- Navbar — logo, navigation links, hamburger menu for mobile, light/dark mode toggle
- Hero — shop name, supporting headline, description, Call Now and WhatsApp buttons, hero image, entrance animation
- About — short business description, what the shop sells, delivery availability, a shop image
- Vehicle Sections — clearly separated cards or sections for Car Spare Parts and Bajaj/TVS Spare Parts
- Product Categories — visual category cards for engine parts, engine oil, filters, batteries, tires and wheels, body parts, Bajaj/TVS motor parts, and other spare parts
- Why Choose Us — feature cards highlighting quality, location, delivery, communication, and variety
- Gallery — photo grid with hover effects, filtering by category, and a lightbox for full-size viewing
- Testimonials — customer reviews with name, optional photo, star rating, and a short quote
- Location — Google Maps embed pointing to Shashamane 01, with a Get Directions button
- Contact — large, easy-to-tap buttons for phone, WhatsApp, Telegram, and location
- Social Media — TikTok, Instagram, and Facebook links with icons
- Floating WhatsApp Button — always visible button in the bottom corner of the page
- Footer — logo, short description, quick links, contact options, social links, copyright

**Step 4 — Assemble the page**

Import all components into the single main page file. This is what makes the website single-page — all sections live on one scrollable page with smooth navigation between them.

**Step 5 — Animations**

Add scroll-triggered animations so sections and cards appear smoothly as the user scrolls. Add hover animations to buttons and cards. Keep animations subtle and fast. They should enhance the experience without making the website feel slow.

**Step 6 — Responsive design**

Test every section at mobile, tablet, and desktop widths. On mobile, the layout should stack vertically. Buttons should be large and easy to tap. The navigation should collapse into a hamburger menu. The Google Map should resize properly. The gallery should adapt to a smaller grid.

**Step 7 — Light and dark mode**

Implement a theme toggle. The website should detect the user's system preference by default and allow manual switching. Both modes should look equally good.

**Step 8 — Fill in placeholders**

The following details are not yet available and should be inserted once provided:

- Exact phone number
- WhatsApp number
- Telegram username or link
- Google Maps coordinates and embed link
- TikTok, Instagram, and Facebook links
- Exact opening and closing hours
- Real customer testimonials
- Domain name, if one will be purchased

Design the website so all of these live in one configuration or constants file. Changing a phone number should require editing only one place.

**Step 9 — Images**

Place all provided shop and product photos in the `public` directory, organized into folders for the shop, car parts, and Bajaj/TVS parts. Optimize images for web so the website loads quickly.

**Step 10 — Deploy**

Connect the project to Vercel. Every time changes are pushed to the main branch, Vercel automatically rebuilds and publishes the website. The website goes live at a Vercel URL, and a custom domain can be connected later.

### Building the Shopping Website

The shopping website is built as a second phase, after the informational website is finished and the client is happy with the design and content.

It reuses the same visual design and many of the same components, but adds the following:

**Product catalog**

A browsable list of products organized by vehicle type and category. Each product has a name, description, price, and image. Products can be filtered and searched.

**Product pages**

Each product can have its own page with more detail, larger images, and an option to add to cart or contact the shop directly about it.

**Cart**

Customers can add products to a cart and review what they have selected before placing an order.

**Order placement**

In the first version of the shopping website, orders can be placed through a form that sends the order details to the business via WhatsApp or email, without requiring a payment gateway. A full payment system can be added in a later phase.

**Backend and database**

To manage products and orders, a database is needed. A simple setup using a service like Supabase or PlanetScale alongside the Next.js API routes is a practical choice. This allows product information to be updated without touching code.

**Admin panel**

A simple protected page where the business owner can add, edit, and remove products without needing a developer.

The shopping website is a larger and more complex project. It should be approached after the informational website is complete and tested.

---

## Website Structure — Page Sections

Both websites share this page structure for the front-facing side:

1. Navigation
2. Hero
3. About Sofi Spare Parts
4. Vehicle Sections — Cars and Bajaj/TVS
5. Product Categories
6. Why Choose Us
7. Gallery
8. Customer Testimonials
9. Location and Google Maps
10. Contact
11. Social Media
12. Footer

A floating WhatsApp button is always visible in the corner.

---

## Design Direction

**Style:** Modern automotive — professional, clean, and trustworthy

**Colors:** To be defined based on the business's existing brand, if one exists. If not, a dark automotive palette with a strong accent color works well.

**Typography:** Clean and modern — readable at all sizes, especially on mobile

**Cards:** Slightly rounded corners with subtle shadows

**Buttons:** Large, high-contrast, and easy to tap on a touchscreen

**Animations:** Scroll-reveal, fade-in, slide-in, hover effects — all kept subtle and fast

**Images:** High-quality photos of the shop, products, and parts

**Icons:** Lucide React — consistent throughout

The design should feel like a real business website. It should communicate professionalism and make customers feel confident contacting or visiting the shop.

---

## Mobile First

Most customers will visit the website from a mobile phone. Every design decision should be made with mobile in mind first.

On mobile, the experience should be:

- A clear shop name and hero visible immediately
- Large Call Now and WhatsApp buttons easy to find and tap
- A simple hamburger navigation menu
- Stacked cards instead of horizontal rows
- A full-width Google Map
- Large, full-width contact buttons
- A floating WhatsApp button always accessible

---

## The Customer Journey

Every design decision should support this journey:

Customer opens the website
↓
Immediately understands what the shop sells
↓
Chooses the section relevant to their vehicle — car or Bajaj/TVS
↓
Sees the product categories available
↓
Looks at shop and product photos
↓
Reads customer reviews
↓
Checks the location on Google Maps
↓
Clicks Get Directions — or —
Calls the shop — or —
Opens WhatsApp or Telegram
↓
Visits the shop or requests delivery

---

## Project Folder Structure

```
sofi-spare-parts/
│
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
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
│   └── business.ts   ← all phone numbers, links, and addresses in one place
│
├── public/
│   ├── logo.png
│   ├── hero.jpg
│   ├── shop/
│   ├── cars/
│   └── bajaj/
│
└── package.json
```

---

## Summary

Build the informational website first. Get the design right, fill in the real business information, and make sure it works beautifully on mobile. Once that is done, the shopping website becomes a second phase built on the same foundation.

The most important things the website must do — in order of priority:

1. Tell customers what Sofi Spare Parts sells
2. Separate car and Bajaj/TVS sections clearly
3. Make it trivially easy to call, WhatsApp, or Telegram
4. Show the exact location and link to Google Maps
5. Build trust through photos and customer reviews
6. Communicate that delivery is available

Everything else supports these six things.
