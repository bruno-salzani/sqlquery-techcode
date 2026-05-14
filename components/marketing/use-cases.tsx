import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useCases } from "@/lib/site";

export function UseCases() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Badge>Casos de uso</Badge>
            <h2 className="section-title mt-5 text-slate-950">Bom para tarefas rápidas, estudo e consultas operacionais do dia a dia.</h2>
            <p className="section-copy mt-5">
              Quando a necessidade é estruturar um SELECT simples sem perder tempo com sintaxe manual, a ferramenta ajuda a organizar o básico
              e deixar o resultado pronto para revisão.
            </p>
          </div>

          <div className="grid gap-4">
            {useCases.map((item) => (
              <Card key={item} className="flex items-start gap-4">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                  ✓
                </span>
                <p className="text-sm leading-7 text-slate-700">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
