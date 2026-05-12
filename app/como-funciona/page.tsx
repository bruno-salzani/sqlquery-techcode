import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";
import { steps } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Como funciona o SQL Query",
  description: "Veja como usar o SQL Query para gerar consultas simples de forma rápida, clara e sem atrito.",
  path: "/como-funciona",
});

export default function ComoFuncionaPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <Badge>Como funciona</Badge>
          <h1 className="section-title mt-5 text-slate-950">Um fluxo simples para montar queries sem perder clareza.</h1>
          <p className="section-copy mt-5">
            A proposta do SQL Query é reduzir o tempo até o primeiro resultado, mantendo uma estrutura compreensível para quem aprende SQL e útil para quem quer agilidade em tarefas repetitivas.
          </p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.title}>
              <h2 className="text-xl font-semibold text-slate-950">{step.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
