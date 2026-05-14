import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { featureCards, useCases } from "@/lib/site";

export function Benefits() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <Badge>Por que usar</Badge>
          <h2 className="section-title mt-5 text-slate-950">Uma utilidade simples para estudar, revisar e agilizar consultas do dia a dia.</h2>
          <p className="section-copy mt-5">
            O SQL Query foi desenhado para reduzir atrito e manter a experiência enxuta. Você entende o que está gerando, copia mais
            rápido e evita começar do zero em tarefas recorrentes.
          </p>
        </div>

        <div className="grid-auto-fit mt-10">
          {featureCards.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {useCases.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-[1.5rem] border border-slate-200/70 bg-white/78 px-5 py-4 shadow-sm">
              <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                ✓
              </span>
              <p className="text-sm leading-7 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
