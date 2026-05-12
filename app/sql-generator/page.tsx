import { AdSlot } from "@/components/ads/ad-slot";
import { Container } from "@/components/layout/container";
import { FaqSchema } from "@/components/seo/faq-schema";
import { SoftwareSchema } from "@/components/seo/software-schema";
import { GeneratorForm } from "@/components/tool/generator-form";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { adSlots } from "@/lib/ads";
import { buildMetadata } from "@/lib/seo";
import { faqItems, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "SQL Generator Online para Consultas Simples",
  description:
    "Gere queries SQL simples com filtros, ordenação e limite em uma interface rápida, clara e pronta para copiar.",
  path: "/sql-generator",
});

export default function SqlGeneratorPage() {
  return (
    <>
      <SoftwareSchema
        description="Gerador online de consultas SQL simples com validação, exemplos rápidos e saída pronta para copiar."
        name="SQL Query Generator"
        url={`${siteConfig.url}/sql-generator`}
      />
      <FaqSchema items={faqItems} />
      <section className="py-14 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <Badge>Ferramenta principal</Badge>
            <h1 className="section-title mt-5 text-slate-950">Gerador SQL online para criar consultas simples com rapidez e clareza.</h1>
            <p className="section-copy mt-5">
              Preencha a tabela, escolha as colunas, ajuste filtros e copie a query final em segundos. A estrutura foi pensada para boa UX, uso em mobile e excelente indexação.
            </p>
          </div>

          <div className="mt-10">
            <GeneratorForm />
          </div>

          <div className="mt-10">
            <AdSlot className={adSlots.inContent.className} label={adSlots.inContent.label} slot={adSlots.inContent.slot} />
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">Feito para acelerar o primeiro resultado.</h2>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                Em vez de começar do zero toda vez, você monta a estrutura principal da consulta com menos atrito, mais previsibilidade e um fluxo visual objetivo.
              </p>
            </div>
            <Accordion items={faqItems} />
          </div>
        </Container>
      </section>
    </>
  );
}
