import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Termos de Uso",
  description: "Termos de uso do SQL Query para utilização da ferramenta e das páginas públicas do site.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container className="max-w-3xl">
        <Badge>Termos</Badge>
        <h1 className="section-title mt-5 text-slate-950">Termos de Uso</h1>
        <div className="mt-6 space-y-5 text-sm leading-8 text-slate-600">
          <p>O SQL Query oferece um gerador de consultas SQL simples para fins de produtividade, apoio educacional e aceleração de tarefas repetitivas.</p>
          <p>O usuário é responsável por revisar e validar a query gerada antes de executá-la em qualquer ambiente. O resultado entregue é uma base inicial, não uma garantia de compatibilidade completa com todos os bancos ou regras de negócio.</p>
          <p>O uso contínuo da plataforma implica concordância com estes termos e com as políticas aplicáveis à operação do site.</p>
        </div>
      </Container>
    </section>
  );
}
