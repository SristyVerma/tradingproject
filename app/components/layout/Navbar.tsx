"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-border bg-white">
      <nav className="container py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-base font-bold text-primary">
            TradePilot Academy
          </Link>

          <ul className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Link
              href="/login"
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Login
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-border p-2 text-slate-600 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open main menu</span>
            <span className="text-lg leading-none">☰</span>
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 space-y-3 border-t border-border pt-4 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-sm text-slate-700"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="inline-flex rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
