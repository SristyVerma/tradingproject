import Link from "next/link";

const courses = [
  { slug: "price-action-foundations", title: "Price Action Foundations", level: "Beginner" },
  { slug: "risk-management-blueprint", title: "Risk Management Blueprint", level: "Intermediate" },
  { slug: "swing-trading-lab", title: "Swing Trading Lab", level: "Advanced" },
];

export default function CoursesPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Courses</h1>
      <p className="mt-2 text-muted">Static skeleton page for the full course catalog.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <article key={course.slug} className="rounded-xl border border-border bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">{course.level}</p>
            <h2 className="mt-2 text-lg font-semibold">{course.title}</h2>
            <Link href={`/courses/${course.slug}`} className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
              View course details
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
