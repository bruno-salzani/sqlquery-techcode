import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { featureCards } from "@/lib/site";

export function Benefits() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <Badge>Benefícios principais</Badge>
          <h2 className="section-title mt-5 text-slate-950">Uma ferramenta focada em produtividade, clareza e retenção.</h2>
          <p className="section-copy mt-5">
            O SQL Query foi estruturado para remover atrito, acelerar o primeiro resultado e manter a experiência enxuta para quem quer gerar consultas simples sem poluição visual.
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
      </Container>
    </section>
  );
}
