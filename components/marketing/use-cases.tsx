import { AdSlot } from "@/components/ads/ad-slot";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { adSlots } from "@/lib/ads";
import { useCases } from "@/lib/site";

export function UseCases() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Badge>Casos de uso</Badge>
            <h2 className="section-title mt-5 text-slate-950">Feito para consultas frequentes, rápidas e fáceis de revisar.</h2>
            <p className="section-copy mt-5">
              Ideal para aprendizado, tarefas internas, testes de banco e fluxos repetitivos em que o ganho vem da velocidade com clareza.
            </p>
            <div className="mt-8 hidden lg:block">
              <AdSlot className={adSlots.sidebar.className} label={adSlots.sidebar.label} slot={adSlots.sidebar.slot} />
            </div>
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
