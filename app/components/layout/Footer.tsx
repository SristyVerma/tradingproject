const footerItems = ["Terms", "Privacy", "Refund", "Disclaimer", "Contact"];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-white">
      <div className="container flex flex-col gap-4 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} TradePilot Academy</p>
        <ul className="flex flex-wrap items-center gap-4">
          {footerItems.map((item) => (
            <li key={item}>
              <a href="#" className="transition hover:text-foreground">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
