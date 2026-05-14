import { AdSlot } from "@/components/ads/ad-slot";
import { Container } from "@/components/layout/container";
import { FaqSchema } from "@/components/seo/faq-schema";
import { SoftwareSchema } from "@/components/seo/software-schema";
import { GeneratorForm } from "@/components/tool/generator-form";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { adSlots } from "@/lib/ads";
import { buildMetadata } from "@/lib/seo";
import { faqItems, resolveSiteUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Gerador SQL online para consultas simples",
  description: "Gere queries SQL simples com filtros, ordenação e limite em uma interface rápida, clara e pronta para copiar.",
  path: "/sql-generator",
});

export default function SqlGeneratorPage() {
  return (
    <>
      <SoftwareSchema
        description="Gerador online de consultas SQL simples com validação, exemplos rápidos e saída pronta para copiar."
        name="SQL Query Generator"
        url={resolveSiteUrl("/sql-generator")}
      />
      <FaqSchema items={faqItems} />
      <section className="py-14 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <Badge>Ferramenta principal</Badge>
            <h1 className="section-title mt-5 text-slate-950">Monte consultas SQL simples com um fluxo rápido, limpo e pronto para copiar.</h1>
            <p className="section-copy mt-5">
              Preencha a tabela, escolha colunas, ajuste filtros e copie a query final em segundos. A página foi desenhada para manter foco
              na tarefa, boa leitura em mobile e uma experiência sem distrações.
            </p>
          </div>

          <div className="mt-10">
            <GeneratorForm />
          </div>

          <div className="mt-12">
            <AdSlot className={adSlots.inContent.className} label={adSlots.inContent.label} slot={adSlots.inContent.slot} />
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">Feito para encurtar o caminho até o primeiro resultado.</h2>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                Em vez de começar cada SELECT do zero, você organiza a estrutura principal em poucos passos, valida o que está gerando e adapta
                o SQL final com mais previsibilidade.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Isso ajuda tanto quem está aprendendo quanto quem precisa resolver consultas operacionais rápidas sem perder legibilidade.
              </p>
            </div>
            <Accordion items={faqItems} />
          </div>
        </Container>
      </section>
    </>
  );
}
