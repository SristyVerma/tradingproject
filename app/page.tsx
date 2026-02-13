import { EmptyState } from "./components/states/EmptyState";
import { ErrorMessage } from "./components/states/ErrorMessage";
import { LoadingSkeleton } from "./components/states/LoadingSkeleton";
import { Badge } from "./components/ui/Badge";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { Input } from "./components/ui/Input";
import { SectionHeading } from "./components/ui/SectionHeading";

export default function Home() {
  return (
    <main className="container py-10">
      <SectionHeading
        eyebrow="Design Baseline"
        title="Trading Education Platform Starter UI"
        description="Brand baseline: TradePilot Academy, primary color blue (#2563EB), default Geist font with a clean container rule used across pages."
        actions={<Badge>Primary: #2563EB</Badge>}
      />

      <section className="mb-10 grid gap-6 md:grid-cols-2">
        <Card>
          <h3 className="text-lg font-semibold">Reusable Components</h3>
          <p className="mt-2 text-sm text-muted">Simple building blocks for fast page creation.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
          </div>
          <div className="mt-4">
            <Input placeholder="Email address" />
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold">Layout Plan</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
            <li>Navbar: Home, Courses, Pricing (later), About, Login</li>
            <li>Footer: Terms, Privacy, Refund, Disclaimer, Contact</li>
            <li>Container rule: max-width 1120px with responsive horizontal padding</li>
          </ul>
        </Card>
      </section>

      <section className="space-y-4">
        <SectionHeading title="Global UI States" description="Shared states ready to use throughout pages and feature modules." />
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <h4 className="mb-3 text-sm font-semibold">Loading</h4>
            <LoadingSkeleton />
          </Card>
          <Card>
            <h4 className="mb-3 text-sm font-semibold">Empty</h4>
            <EmptyState title="No courses yet" description="Your published courses will appear here." actionLabel="Create course" />
          </Card>
          <Card>
            <h4 className="mb-3 text-sm font-semibold">Error</h4>
            <ErrorMessage message="We couldn't load pricing plans." hint="Please refresh in a moment." />
          </Card>
        </div>
      </section>
    </main>
  );
}
