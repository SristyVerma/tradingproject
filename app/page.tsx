import Link from "next/link";

import { Badge } from "./components/ui/Badge";
import { Card } from "./components/ui/Card";
import { SectionHeading } from "./components/ui/SectionHeading";

const featuredCourses = [
  {
    title: "Price Action Foundations",
    level: "Beginner",
    description: "Master chart structure, trends, and high-probability trade setups with guided practice.",
  },
  {
    title: "Swing Trading Playbook",
    level: "Intermediate",
    description: "Build repeatable strategies for multi-day moves with clear entry, exit, and journaling systems.",
  },
  {
    title: "Advanced Risk & Psychology",
    level: "Advanced",
    description: "Protect capital, manage drawdowns, and strengthen mindset through practical frameworks.",
  },
];

const platformBenefits = [
  {
    title: "Beginner-friendly roadmap",
    text: "Start from zero with clear lessons and no jargon overload.",
  },
  {
    title: "Practical learning",
    text: "Actionable examples, chart walkthroughs, and exercises after every module.",
  },
  {
    title: "Risk-first mindset",
    text: "Position sizing and risk management are taught before advanced strategies.",
  },
  {
    title: "Progress tracking",
    text: "Structured milestones help you stay consistent and confident.",
  },
];

const learningPath = ["Beginner", "Intermediate", "Advanced"];

const testimonials = [
  {
    quote: "I finally understand when not to trade. The risk management module alone changed everything.",
    name: "Aarav K.",
    role: "Part-time learner",
  },
  {
    quote: "The step-by-step path made complex topics feel simple. Super practical and easy to follow.",
    name: "Mira S.",
    role: "New trader",
  },
  {
    quote: "The content is concise, visual, and focused on discipline over hype. Exactly what I needed.",
    name: "Rohan T.",
    role: "Active swing trader",
  },
];

const faqs = [
  {
    question: "Do I need prior trading experience?",
    answer: "No. The beginner track starts from fundamentals and assumes zero prior knowledge.",
  },
  {
    question: "How much time should I commit each week?",
    answer: "Most learners progress well with 4–6 focused hours per week.",
  },
  {
    question: "Are the lessons strategy specific?",
    answer: "Lessons cover core concepts plus repeatable frameworks that work across styles.",
  },
  {
    question: "Will I get practical assignments?",
    answer: "Yes, each section includes guided tasks like chart reviews and journaling prompts.",
  },
  {
    question: "Is there a mobile-friendly experience?",
    answer: "Yes. The platform is fully responsive so you can learn from any device.",
  },
];

export default function HomePage() {
  return (
    <main className="pb-16">
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-blue-50 via-white to-sky-100">
        <div className="container py-16 md:py-24">
          <Badge>TradePilot Academy</Badge>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-foreground md:text-6xl">
            Learn Trading the Smart Way with Structured, Practical Lessons
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Build confidence with a clear roadmap, real-world examples, and a strong risk-first foundation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/courses"
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white/90">
        <div className="container py-4 text-center">
          <p className="text-sm font-medium text-muted">Trusted by 12,000+ learners worldwide</p>
        </div>
      </section>

      <section className="container py-14">
        <SectionHeading
          eyebrow="Featured"
          title="Featured Courses"
          description="Start with the right program based on your experience level and learning goals."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {featuredCourses.map((course) => (
            <Card key={course.title} className="h-full">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">{course.level}</p>
              <h3 className="mt-3 text-xl font-semibold">{course.title}</h3>
              <p className="mt-3 text-sm text-muted">{course.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="container">
          <SectionHeading
            eyebrow="Why TradePilot"
            title="Why this platform works"
            description="Built for aspiring traders who want clarity, discipline, and practical growth."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {platformBenefits.map((benefit) => (
              <Card key={benefit.title}>
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-sm text-muted">{benefit.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-14">
        <SectionHeading
          eyebrow="Roadmap"
          title="Learning path"
          description="Follow a clear progression from the basics to advanced execution."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {learningPath.map((phase, index) => (
            <Card key={phase} className="relative overflow-hidden">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">Phase {index + 1}</p>
              <h3 className="mt-2 text-2xl font-semibold">{phase}</h3>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container">
          <SectionHeading
            eyebrow="Testimonials"
            title="What learners are saying"
            description="Real feedback from students building consistency and confidence."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name}>
                <p className="text-sm leading-6 text-muted">“{item.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-foreground">{item.name}</p>
                <p className="text-xs text-muted">{item.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-14">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Quick answers to common questions before you start learning."
        />
        <div className="space-y-3">
          {faqs.map((item) => (
            <details key={item.question} className="rounded-xl border border-border bg-white p-4">
              <summary className="cursor-pointer list-none pr-4 text-sm font-semibold text-foreground">{item.question}</summary>
              <p className="mt-3 text-sm text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-amber-50 py-4">
        <div className="container text-center text-sm font-semibold text-amber-900">
          Risk Disclaimer: Educational only, not financial advice.
        </div>
      </section>

      <section className="container py-14 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Start learning today</h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted">
          Join thousands of learners improving their trading knowledge with structured, actionable lessons.
        </p>
        <Link
          href="/courses"
          className="mt-7 inline-flex rounded-md bg-primary px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
        >
          Start learning today
        </Link>
      </section>
    </main>
  );
}
