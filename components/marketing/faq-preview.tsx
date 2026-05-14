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
          <h2 className="section-title mt-5 text-slate-950">Dúvidas comuns antes de usar o gerador.</h2>
          <p className="section-copy mt-5">
            Respostas curtas para explicar o escopo da ferramenta, a compatibilidade com bancos e o tipo de uso ideal nesta fase.
          </p>
        </div>

        <div className="mt-10">
          <Accordion items={faqItems.slice(0, 5)} />
        </div>
      </Container>
    </section>
  );
}
