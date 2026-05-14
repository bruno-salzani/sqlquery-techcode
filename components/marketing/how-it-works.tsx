import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { steps } from "@/lib/site";

export function HowItWorks() {
  return (
    <section className="py-14 sm:py-20" id="como-funciona">
      <Container>
        <div className="max-w-3xl">
          <Badge>Como funciona</Badge>
          <h2 className="section-title mt-5 text-slate-950">Três passos para sair da ideia e chegar em uma query utilizável.</h2>
          <p className="section-copy mt-5">
            O fluxo foi montado para manter contexto, reduzir retrabalho e mostrar o resultado com clareza antes da cópia final.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={step.title} className="relative overflow-hidden">
              <span className="text-sm font-semibold text-blue-600">0{index + 1}</span>
              <h3 className="mt-4 text-lg font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
