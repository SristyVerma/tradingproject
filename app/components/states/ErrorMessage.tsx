type ErrorMessageProps = {
  message: string;
  hint?: string;
};

export function ErrorMessage({ message, hint }: ErrorMessageProps) {
  return (
    <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700" role="alert">
      <p className="font-semibold">Something went wrong</p>
      <p className="mt-1">{message}</p>
      {hint ? <p className="mt-2 text-red-600">{hint}</p> : null}
    </div>
  );
}
