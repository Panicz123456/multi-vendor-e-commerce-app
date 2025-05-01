# 🏪 Multi-Tenant E-commerce Platform

A full-featured multi-tenant SaaS e-commerce platform built with **Next.js 15**, **Payload CMS**, and **MongoDB**.  
This project demonstrates scalable architecture, Stripe monetization, and role-based access with modern UI using TailwindCSS and Shadcn UI.

---

## 🚀 Features

### 🏬 Multi-Tenant Architecture
- Isolated data per vendor using subdomains
- Multi-tenant backend via Payload CMS plugin

### 🌐 Vendor Subdomains
- Dynamic subdomain routing using Next.js Middleware

### 🎨 Custom Merchant Storefronts
- Dynamic SSR/SSG storefronts per vendor
- TailwindCSS + Shadcn UI components

### 💳 Stripe Connect Integration
- Payouts directly to vendors
- Platform fee logic per sale

### ⭐ Product Ratings & Reviews
- Verified user reviews after purchase
- Average rating used in filters/sorting

### 📚 Purchase Library
- List of customer orders with digital product access

### 🧑‍💼 Role-Based Access Control
- Admin / Vendor / Customer roles
- Granular access via Payload

### 🛠️ Admin Dashboard
- Manage merchants, users, categories, metrics

### 🧾 Merchant Dashboard
- Add/edit products, view orders, check payouts

### 🔍 Filtering & Search
- Full-text search + filter by category, price, rating

---

## ⚙️ Tech Stack (Key Highlights)

| Category         | Technology |
|------------------|------------|
| **Frontend**     | `Next.js 15`, `React 19`, `TailwindCSS v4`, `Shadcn UI` |
| **Backend**      | `Payload CMS`, `MongoDB` |
| **API**          | `tRPC`, `React Query` |
| **Forms/Validation** | `React Hook Form`, `Zod` |
| **State Mgmt**   | `Zustand` |
| **Payments**     | `Stripe Connect` |
| **Routing**      | `App Router`, `Dynamic Middleware` |
| **Dev Tools**    | `clsx`, `tailwind-merge`, `date-fns`, `lucide-react` |

---

## 🔧 Local Development

```bash
# Clone the repo
git clone https://github.com/Panicz123456/multi-vendor-e-commerce-app.git

# Install dependencies
npm install

# Run Payload CMS and Next.js
npm run dev
