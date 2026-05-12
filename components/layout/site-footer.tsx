import Link from "next/link";
import { Container } from "@/components/layout/container";

const footerLinks = [
  { href: "/privacy-policy", label: "Privacidade" },
  { href: "/terms", label: "Termos" },
  { href: "/contact", label: "Contato" },
  { href: "/blog", label: "Blog" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/40 bg-white/70 py-10 backdrop-blur-xl">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <p className="text-lg font-semibold text-slate-950">SQL Query</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Gerador de consultas SQL simples com foco em clareza, velocidade, SEO técnico e experiência premium.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm text-slate-600">
          {footerLinks.map((item) => (
            <Link key={item.href} className="transition hover:text-slate-950" href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
