import { notFound } from "next/navigation";
import { ArticleSchema } from "@/components/seo/article-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { buildMetadata } from "@/lib/seo";
import { blogPosts, siteConfig } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return buildMetadata({
      title: "Artigo não encontrado",
      description: "O artigo solicitado não foi encontrado.",
      path: `/blog/${slug}`,
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const articleUrl = `${siteConfig.url}/blog/${post.slug}`;

  return (
    <>
      <ArticleSchema description={post.description} publishedAt={post.publishedAt} title={post.title} url={articleUrl} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` },
          { name: post.title, url: articleUrl },
        ]}
      />
      <section className="py-14 sm:py-20">
        <Container className="max-w-3xl">
          <Badge>Artigo</Badge>
          <h1 className="section-title mt-5 text-slate-950">{post.title}</h1>
          <p className="mt-4 text-sm text-slate-500">{post.publishedAt}</p>
          <div className="mt-8 space-y-5 text-sm leading-8 text-slate-600">
            <p>{post.description}</p>
            <p>
              O objetivo deste conteúdo é ajudar quem pesquisa soluções como gerador SQL online, consulta SQL simples, exemplos de SELECT com filtros e formas mais rápidas de reduzir erros ao montar queries manualmente.
            </p>
            <p>
              Dentro do escopo do SQL Query, a prioridade é simplificar o caminho até o primeiro resultado, mantendo clareza no que cada parte da consulta faz e deixando espaço para expandir a estratégia editorial com guias mais longos, comparativos e exemplos por caso de uso.
            </p>
            <p>
              Em produção, esta seção deve crescer com conteúdo aprofundado, prints, snippets comentados e páginas orientadas a palavras-chave específicas, o que tende a melhorar a descoberta orgânica e criar mais superfícies seguras para monetização com anúncios.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
