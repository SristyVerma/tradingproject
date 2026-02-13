interface CourseDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;

  return (
    <main className="container py-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">Course detail (skeleton)</p>
      <h1 className="mt-2 text-3xl font-bold">{slug.replaceAll("-", " ")}</h1>
      <p className="mt-4 max-w-2xl text-muted">
        This route is ready for dynamic course content. Upcoming phases can add curriculum sections, instructor profile, and enrollment options.
      </p>
    </main>
  );
}
