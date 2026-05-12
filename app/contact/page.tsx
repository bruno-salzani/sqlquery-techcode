import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contato",
  description: "Entre em contato com a equipe do SQL Query para dúvidas, feedback ou oportunidades comerciais.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container className="max-w-3xl">
        <Badge>Contato</Badge>
        <h1 className="section-title mt-5 text-slate-950">Fale com a equipe do SQL Query.</h1>
        <div className="mt-10 grid gap-4">
          <Card>
            <p className="text-lg font-semibold text-slate-950">Feedback e parcerias</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Para sugestões, melhorias do produto e oportunidades comerciais, use o canal institucional abaixo.
            </p>
            <Link className="mt-4 inline-flex text-sm font-semibold text-blue-700" href="mailto:contato@techcodecompany.com">
              contato@techcodecompany.com
            </Link>
          </Card>
        </div>
      </Container>
    </section>
  );
}
