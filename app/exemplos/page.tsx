import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { buildSqlQuery } from "@/lib/sql/prompt-builder";
import { buildMetadata } from "@/lib/seo";
import { examples } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Exemplos de consultas SQL simples",
  description: "Veja exemplos prontos de queries SQL simples com filtros, ordenação e limite para acelerar seu fluxo.",
  path: "/exemplos",
});

export default function ExemplosPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <Badge>Exemplos</Badge>
          <h1 className="section-title mt-5 text-slate-950">Exemplos prontos para aprender, adaptar e copiar.</h1>
          <p className="section-copy mt-5">
            Estas estruturas ajudam a entender rapidamente como montar consultas SQL simples para clientes, produtos, pedidos e outros cenários recorrentes.
          </p>
        </div>

        <div className="mt-10 grid gap-5">
          {examples.map((example) => (
            <Card key={example.title}>
              <p className="text-lg font-semibold text-slate-950">{example.title}</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">{example.summary}</p>
              <pre className="mt-5 overflow-x-auto rounded-3xl bg-slate-950 p-5 text-sm leading-7 text-slate-100">{buildSqlQuery({
                table: example.table,
                columns: example.columns.join(", "),
                filters: example.filters,
                orderBy: example.orderBy,
                direction: example.direction,
                limit: example.limit,
              })}</pre>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
