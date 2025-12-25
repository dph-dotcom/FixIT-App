🛠️ RepairHub – White-Label Repair Services SaaS

RepairHub is a web-based, white-label SaaS platform that helps repair and home-service businesses manage bookings, technicians, and customers — all under their own brand.

Built specifically with the Philippines market in mind.

🚀 What Problem Does This Solve?

In the Philippines:

Homeowners rely on “kakilala” or neighbor recommendations

Repair businesses manage jobs via calls, Messenger, or Viber

There’s no centralized system, no accountability, and no scalability

RepairHub fixes this by providing:

A trusted booking system

Technician verification & ratings

Location-based discovery (city / barangay)

A branded app businesses can call their own

✨ Key Features
👤 For Clients (Homeowners)

Browse verified technicians

Filter by service, city, and barangay

View ratings & completed jobs

Request repairs online

Leave reviews after job completion

🧑‍🔧 For Technicians

Receive job requests

Accept or decline jobs

Track job status

Build reputation through verified reviews

👨‍💼 For Admins / Businesses

Approve & verify technicians

Manage jobs centrally

Enforce quality control

Customize branding (logo, color)

Run the platform under their own domain

🏷️ White-Label SaaS Capabilities

Multi-tenant architecture

Custom logo upload

Custom primary color

Subdomain support
yourbrand.repairhub.app

Optional custom domain support
app.yourbrand.com

Each business operates in complete isolation

💰 Monetization

Subscription-based (Admin accounts)

Backend-enforced access control

PayMongo integration (GCash & cards)

Stripe-ready architecture

🧱 Tech Stack
Frontend

Next.js (Pages Router)

React

Tailwind CSS

Backend

Node.js

Express

PostgreSQL

Prisma ORM

JWT Authentication

Payments

PayMongo (PH-friendly)

Stripe (future-ready)

📂 Project Structure
repairhub/
├── backend/
│   ├── prisma/
│   ├── middleware/
│   ├── routes/
│   ├── uploads/
│   ├── index.js
│   └── .env
│
├── frontend/
│   ├── pages/
│   ├── components/
│   ├── utils/
│   ├── styles/
│   └── pages/_app.js

⚙️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/yourusername/repairhub.git
cd repairhub

2️⃣ Backend Setup
cd backend
npm install


Create .env:

DATABASE_URL=postgresql://user:password@localhost:5432/repairhub
JWT_SECRET=supersecret
PAYMONGO_SECRET_KEY=sk_test_xxx


Run migrations:

npx prisma migrate dev


Start backend:

node index.js

3️⃣ Frontend Setup
cd ../frontend
npm install
npm run dev


Frontend runs on:

http://localhost:3000


Backend runs on:

http://localhost:4000

🔐 Roles & Access
Role	Access
Client	Book services, leave reviews
Technician	Accept jobs, complete work
Admin	Verify techs, manage platform
Admin + Subscription	Full access
🔒 Trust & Safety Design

Admin-verified technicians only

One review per completed job

No anonymous ratings

Subscription enforcement on backend

Tenant isolation for white-label safety

🧪 MVP Scope (Intentional)

This project intentionally excludes:

Mobile apps

Live GPS tracking

In-app chat

Automated pricing

Push notifications

These are Phase 2 features once revenue is validated.

🗺️ Roadmap (Future Enhancements)

Mobile app (React Native)

GCash / Maya in-app payments

Push notifications

Invoicing & receipts

Technician availability scheduling

Analytics dashboard for admins

🎯 Target Customers

Appliance repair companies

Electrical & plumbing services

Property management firms

Maintenance & facilities teams

Condo associations

🧠 Philosophy

Build trust first, features second.

RepairHub is designed to be:

Practical

Sellable

Philippines-friendly

Easy to demo

Easy to monetize

📄 License

MIT License
Use freely. Build responsibly.

🤝 Contributing

Pull requests welcome.
This project is built as a starter SaaS foundation, not a finished product.

👋 Author

Built with ❤️ and realism.

If you’re building for the PH market — this is for you.
