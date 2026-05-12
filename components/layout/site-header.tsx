"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-xl">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          <Link className="flex items-center gap-3" href="/">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">SQL</span>
            <div>
              <span className="block text-sm font-semibold text-slate-950">{siteConfig.name}</span>
              <span className="block text-xs text-slate-500">SQL Generator premium</span>
            </div>
          </Link>

          <nav aria-label="Navegação principal" className="hidden items-center gap-6 text-sm text-slate-600 lg:flex">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} className="transition hover:text-slate-950" href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button className="hidden sm:inline-flex" href="/exemplos" variant="ghost">
              Ver exemplos
            </Button>
            <Button href="/sql-generator">Gerar consulta</Button>
          </div>

          <button
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm lg:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            type="button"
          >
            <span className="text-lg">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>

        {menuOpen ? (
          <nav aria-label="Menu mobile" className="mt-4 grid gap-2 rounded-3xl border border-white/50 bg-white/90 p-4 lg:hidden" id="mobile-menu">
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
