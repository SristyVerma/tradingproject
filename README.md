A) Goal

“A global platform where students buy trading courses or subscribe to membership to learn step-by-step with progress tracking.”

B) MVP Features (must ship in first version)

Public

Home

Course catalog

Course detail

Pricing (membership)

About

Contact

Policies (Terms/Privacy/Refund/Risk disclaimer)

Auth

Signup/Login

Forgot password (optional MVP)

Student

Dashboard

My Courses

Membership status

Course player

Progress tracking

Admin (you only)

Create/edit/publish course

Create modules + lessons

Set “included in membership” and “one-time purchase”

Basic order/subscription view

C) “Not in MVP” (explicitly list so you don’t get distracted)

Affiliate system

Mobile app

Built-in community/forums

Advanced quizzes and grading

Multi-instructor marketplace

Certificates (optional; add later)

D) Monetization Rules (very important)

Write rules like a contract:

One-time purchase: user gets access to that course indefinitely (or define 12 months if you want)

Membership: user gets access only while subscription status is active

A course can be:

Purchasable only

Membership only

Both

E) Course Content Rules

Lessons have:

video URL (temporary placeholder at first)

optional resources (PDF)

free preview flag (true/false)

Course has:

level (Beginner/Intermediate/Advanced)

category (Stocks/Options/etc.)

F) Tech Stack (final decisions)

Frontend + backend: Next.js + TypeScript

DB: Supabase Postgres

Auth: Auth.js

Payments: Stripe (checkout + webhooks)

Video: placeholder URLs for now → Vimeo later

Hosting: Vercel

Email: Resend (later)

G) Acceptance Criteria (what counts as “done”)

Write these pass/fail checks:

User can browse courses with login ✅

User can pay and instantly access purchased course ✅

User can subscribe and access membership courses ✅

User cannot access locked lessons by typing URL ✅

Admin can create/publish courses and lessons ✅

Progress saves and “Continue Learning” works ✅

1.3 Create your issue tracker (30 minutes)

In GitHub Issues create these issues (micro tasks are inside each):

Epic 1 — UI skeleton

Navbar/footer layout

Home/Courses/Course detail/Pricing pages

Epic 2 — Database

Create Supabase project

Create schema models

Seed sample courses

Epic 3 — Auth

Signup/login

Protect dashboard/admin

Epic 4 — Admin CMS

Create/edit course/module/lesson

Publish/unpublish

Epic 5 — Stripe one-time

Checkout session

Webhook -> Enrollment

Epic 6 — Stripe membership

Subscription checkout

Webhook -> Subscription status

Epic 7 — Course player

Player UI + progress tracking

Epic 8 — Production readiness

Policies pages

Monitoring

Deploy