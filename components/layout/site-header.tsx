"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-xl">
      <Container className="py-4" maxWidth="2xl">
        <div className="flex items-center justify-between gap-4">
          <Link className="flex items-center gap-3 transition hover:opacity-80" href="/">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-sm font-bold text-white shadow-lg shadow-blue-600/20">
              SQL
            </span>
            <div>
              <span className="block text-sm font-semibold text-slate-950">{siteConfig.name}</span>
              <span className="block text-xs text-slate-500">Gerador SQL simples e rápido</span>
            </div>
          </Link>

          <nav aria-label="Navegação principal" className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
            {siteConfig.nav.map((item) => (
              <Link 
                key={item.href} 
                className="transition hover:text-slate-950 hover:underline underline-offset-4" 
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button className="hidden sm:inline-flex" href="/faq" variant="ghost">
              FAQ
            </Button>
            <Button href="/sql-generator">Gerar SQL</Button>
          </div>

          <button
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:shadow-md lg:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            type="button"
          >
            <span className="text-lg">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>

        {menuOpen ? (
          <nav aria-label="Menu mobile" className="mt-4 grid gap-2 rounded-3xl border border-white/60 bg-white/95 p-4 lg:hidden" id="mobile-menu">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                className="rounded-2xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="mt-2" href="/sql-generator">
              Gerar consulta
            </Button>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
