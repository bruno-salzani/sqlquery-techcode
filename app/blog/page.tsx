import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Blog SQL Query",
  description: "Conteúdo sobre consultas SQL simples, produtividade, boas práticas e dúvidas comuns de iniciantes.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <Badge>Blog</Badge>
          <h1 className="section-title mt-5 text-slate-950">Conteúdo para crescer tráfego e aprofundar o uso da ferramenta.</h1>
          <p className="section-copy mt-5">
            A área editorial está preparada para atrair long-tail SEO, responder dúvidas recorrentes e ampliar a monetização sem comprometer performance.
          </p>
        </div>
        <div className="mt-10 grid gap-5">
          {blogPosts.map((post) => (
            <Card key={post.slug}>
              <p className="text-sm text-slate-500">{post.publishedAt}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{post.description}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Cada artigo foi pensado para cobrir buscas de intenção prática, como geração de SELECTs, organização de filtros, erros comuns ao escrever SQL manualmente e boas práticas para quem quer estudar ou acelerar tarefas repetitivas.
              </p>
              <Link className="mt-5 inline-flex text-sm font-semibold text-blue-700" href={`/blog/${post.slug}`}>
                Ler artigo
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
