import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Política de Privacidade",
  description: "Política de privacidade do SQL Query com informações sobre uso do site, métricas e espaços publicitários.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container className="max-w-3xl">
        <Badge>Privacidade</Badge>
        <h1 className="section-title mt-5 text-slate-950">Política de Privacidade</h1>
        <div className="mt-6 space-y-5 text-sm leading-8 text-slate-600">
          <p>O SQL Query foi estruturado para oferecer uma experiência rápida e objetiva. As informações preenchidas na ferramenta são processadas no navegador para gerar a consulta exibida ao usuário, sem persistência própria de dados inseridos.</p>
          <p>O site pode utilizar integrações de monetização compatíveis com o Google AdSense. Isso pode envolver carregamento de scripts de terceiros, uso de cookies e medição de desempenho para personalização, prevenção de fraude e análise de rendimento dos anúncios.</p>
          <p>Ao navegar no site, você concorda com o uso dos recursos técnicos necessários para operação, segurança, análise básica e monetização. Caso o projeto adote banner de consentimento ou integração de CMP, essa preferência deverá ser respeitada antes da carga de recursos opcionais de publicidade.</p>
          <p>Antes da publicação definitiva, recomenda-se revisão jurídica completa desta política, especialmente para LGPD, consentimento e tratamento de cookies.</p>
        </div>
      </Container>
    </section>
  );
}
