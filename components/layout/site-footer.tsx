import Link from "next/link";
import { Container } from "@/components/layout/container";

const footerSections = [
  {
    title: "Produto",
    links: [
      { href: "/sql-generator", label: "Gerador SQL" },
      { href: "/exemplos", label: "Exemplos" },
      { href: "/como-funciona", label: "Como Funciona" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/faq", label: "Dúvidas Frequentes" },
      { href: "/contact", label: "Contato" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacidade" },
      { href: "/terms", label: "Termos de Serviço" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/40 bg-gradient-to-b from-white/80 to-white/60 backdrop-blur-xl">
      <Container className="py-12">
        {/* Footer Content */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="text-lg font-semibold text-slate-950">SQL Query</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Gerador de consultas SQL simples com foco em clareza, velocidade, experiência limpa e boa performance.
            </p>
            <p className="mt-4 text-xs text-slate-500">© 2024 SQL Query. Todos os direitos reservados.</p>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <p className="text-sm font-semibold text-slate-950">{section.title}</p>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 transition hover:text-slate-950 hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-white/40" />

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-slate-500">
            Desenvolvido com <span className="text-red-500">❤</span> para facilitar seu trabalho com SQL
          </p>
          <div className="flex gap-4 text-xs text-slate-500">
            <Link href="/" className="transition hover:text-slate-950">
              Twitter
            </Link>
            <Link href="/" className="transition hover:text-slate-950">
              GitHub
            </Link>
            <Link href="/" className="transition hover:text-slate-950">
              LinkedIn
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
