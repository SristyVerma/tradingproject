import Link from "next/link";

const footerItems = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Refund", href: "/refund" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-white">
      <div className="container flex flex-col gap-4 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} TradePilot Academy. All rights reserved.</p>
        <ul className="flex flex-wrap items-center gap-4">
          {footerItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="transition hover:text-foreground">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
