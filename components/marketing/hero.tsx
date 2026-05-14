import { AdSlot } from "@/components/ads/ad-slot";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { adSlots } from "@/lib/ads";
import { heroStats } from "@/lib/site";

export function Hero() {
  return (
    <section className="pb-10 pt-14 sm:pb-14 sm:pt-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Badge>Ferramenta utilitária</Badge>
            <h1 className="section-title text-balance mt-6 max-w-3xl text-slate-950">
              Gere consultas SQL simples com velocidade, clareza e uma interface pronta para usar.
            </h1>
            <p className="section-copy mt-6 max-w-2xl">
              Monte SELECTs com filtros, ordenação e limite sem ruído visual. O foco é colocar você no primeiro resultado rápido,
              com saída legível e pronta para copiar.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/sql-generator">Abrir gerador SQL</Button>
              <Button href="/exemplos" variant="secondary">
                Ver exemplos prontos
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
              {heroStats.map((item) => (
                <li key={item} className="rounded-full border border-white/60 bg-white/75 px-4 py-2 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Card className="p-4 sm:p-6">
            <div className="rounded-[1.75rem] bg-slate-950 p-5 text-slate-100 shadow-2xl shadow-slate-950/10">
              <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                <span>Preview</span>
                <span>Saída pronta</span>
              </div>
              <pre className="overflow-x-auto text-sm leading-7 text-slate-200">
{`SELECT id, nome, email
FROM clientes
WHERE status = 'ativo'
ORDER BY nome ASC
LIMIT 25;`}
              </pre>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">Direto ao ponto</p>
                <p className="mt-2">Sem cadastro, sem onboarding confuso e sem etapas extras.</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">Mais previsibilidade</p>
                <p className="mt-2">Campos objetivos, validação simples e leitura fácil do SQL.</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">Uso real</p>
                <p className="mt-2">Bom para estudar, testar ideias e acelerar tarefas repetitivas.</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-8">
          <AdSlot className={adSlots.hero.className} label={adSlots.hero.label} slot={adSlots.hero.slot} />
        </div>
      </Container>
    </section>
  );
}
