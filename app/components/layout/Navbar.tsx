const navItems = ["Home", "Courses", "Pricing (later)", "About", "Login"];

export function Navbar() {
  return (
    <header className="border-b border-border bg-white">
      <nav className="container flex h-16 items-center justify-between">
        <p className="text-base font-bold text-primary">TradePilot Academy</p>
        <ul className="flex items-center gap-6 text-sm text-slate-600">
          {navItems.map((item) => (
            <li key={item}>
              <a href="#" className="transition hover:text-foreground">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
