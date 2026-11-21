# Solara Energy

A solar e-commerce platform that helps Nigerian homes and businesses figure out what solar system they need, what it will save them, and how to pay for it.

**Live site:** https://solara-energy-34sy.vercel.app/

## Screenshot
## Screenshots

![Home page](public/screenshots/home.png)
![Dashboard settings](public/screenshots/dashboard_settings.png)
![Bill calculator](public/screenshots/electricty_cost.png)
![Dashboard payment](public/screenshots/dashboard_payment.png)
![Home page](public/screenshots/home_tools.png)



## Why I built it

Choosing a solar system is confusing. Most people don't know what size they need or whether it will pay for itself. Solara is built around two ideas that guide visitors to the right product before they buy:

- **Bill Savings Calculator**: enter your monthly electricity bill and see your estimated monthly savings, payback period, and 20-year return on investment.
- **Appliance Recommendation System**: pick the appliances you want to power (lights, fridge, AC, pump) and get a recommended system with the matching panels, battery, and inverter.

## Features

**Recommendation tools**
- Bill savings calculator with results saved to the user's account
- Appliance-based system recommendation (Starter, Family, Premium, Business)

**Shopping**
- Product catalogue with dynamic routing (`[slug]`) serving multiple product lines from one page component
- Variant selection, technical specifications, and an FAQ section
- Payment calculator for full payment or "Pay Small Small" instalments (30% deposit, balance over 6, 12 or 24 months)

**Pay Small Small**
- Dedicated section where users pick a system and a plan (6, 12 or 24 months)
- Live summary showing total cost, 30% deposit, and monthly payment at 0% interest

**Installers**
- Book an installer: connect with a certified installer near you
- Become an installer: multi-step application form (personal info, experience, location) with Zod validation

**Payments**
- Paystack checkout with server-side verification of every transaction
- Payment status tracking (pending, success) stored in the database

**Accounts and dashboard**
- Email/password signup and login with Supabase Auth
- Protected routes using Next.js middleware
- Dashboard with an overview, payment history, and settings (change password, logout)

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | Next.js (App Router), React, TypeScript |
| Styling | Tailwind CSS |
| Backend and database | Supabase (Auth, PostgreSQL, Row Level Security) |
| Payments | Paystack |
| Validation | Zod |

## How it works

```
Browser  →  Next.js (server components + route handlers)  →  Supabase
                         │
                         └→  Paystack (initialize, verify)
```

- **Row Level Security** limits every user to their own rows.
- Payment verification runs in route handlers, so secret keys never reach the browser.
- A server-side admin client updates payment status only after Paystack confirms the transaction.

## Getting started

```bash
git clone https://github.com/Modupe-Onakoya/solara-energy
cd solar-company
npm install
npm run dev
```

Create a `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=
PAYSTACK_SECRET_KEY=
```

Keys without the `NEXT_PUBLIC_` prefix are server-only. Never commit `.env.local`.

## Project structure

```
src/
├── app/
│   ├── (auth)/        login, signup
│   ├── (main)/        public pages with navbar and footer
│   ├── dashboard/     overview, payments, settings
│   └── api/paystack/  create, initialize, verify route handlers
├── component/         shared UI
├── lib/               Supabase clients (browser, server, admin)
└── data/              product and recommendation data
```

## Status and roadmap

- [x] Calculator, recommendation tool, catalogue, auth, dashboard
- [x] Paystack payments with server-side verification


## Author

**Onakoya Modupe**, Frontend Engineer