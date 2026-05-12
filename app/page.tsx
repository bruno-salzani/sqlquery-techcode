import { Benefits } from "@/components/marketing/benefits";
import { FinalCta } from "@/components/marketing/final-cta";
import { FaqPreview } from "@/components/marketing/faq-preview";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { UseCases } from "@/components/marketing/use-cases";
import { FaqSchema } from "@/components/seo/faq-schema";
import { SoftwareSchema } from "@/components/seo/software-schema";
import { buildMetadata } from "@/lib/seo";
import { faqItems, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "SQL Query: SQL Generator | Criador de Consultas Simples",
  description:
    "Crie consultas SQL simples online com um gerador rápido, intuitivo e otimizado para copiar, aprender e acelerar tarefas repetitivas.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <SoftwareSchema
        description="Ferramenta web para criar consultas SQL simples com foco em velocidade, clareza e boa experiência de uso."
        name="SQL Query"
        url={siteConfig.url}
      />
      <FaqSchema items={faqItems.slice(0, 5)} />
      <Hero />
      <Benefits />
      <HowItWorks />
      <UseCases />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
