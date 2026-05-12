import { Container } from "@/components/layout/container";
import { FaqSchema } from "@/components/seo/faq-schema";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { buildMetadata } from "@/lib/seo";
import { faqItems } from "@/lib/site";

export const metadata = buildMetadata({
  title: "FAQ do SQL Query",
  description: "Respostas diretas sobre o gerador SQL, compatibilidade, usabilidade e principais dúvidas de iniciantes.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <FaqSchema items={faqItems} />
      <section className="py-14 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <Badge>Perguntas frequentes</Badge>
            <h1 className="section-title mt-5 text-slate-950">Tudo o que você precisa saber antes de usar o SQL Query.</h1>
            <p className="section-copy mt-5">
              Esta página reúne dúvidas comuns sobre geração de consultas SQL simples, experiência de uso, diferenças entre bancos e limitações desta primeira versão.
            </p>
          </div>
          <div className="mt-10">
            <Accordion items={faqItems} />
          </div>
        </Container>
      </section>
    </>
  );
}
