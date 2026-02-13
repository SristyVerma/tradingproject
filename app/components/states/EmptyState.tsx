import { Button } from "../ui/Button";

type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
};

export function EmptyState({ title, description, actionLabel }: EmptyStateProps) {
  return (
    <div className="rounded-xl border border-dashed border-border bg-white p-8 text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted">{description}</p>
      {actionLabel ? <Button className="mt-4">{actionLabel}</Button> : null}
    </div>
  );
}
