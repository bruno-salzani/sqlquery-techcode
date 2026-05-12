import { Container } from "@/components/layout/container";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { faqItems } from "@/lib/site";

export function FaqPreview() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <Badge>FAQ</Badge>
          <h2 className="section-title mt-5 text-slate-950">Perguntas frequentes sobre o SQL Query.</h2>
          <p className="section-copy mt-5">
            Estrutura pensada para remover dúvidas antes do primeiro uso e fortalecer a indexação com conteúdo útil e objetivo.
          </p>
        </div>

        <div className="mt-10">
          <Accordion items={faqItems.slice(0, 5)} />
        </div>
      </Container>
    </section>
  );
}
