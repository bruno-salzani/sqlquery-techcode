import { buildArticleSchema } from "@/lib/schema";
import { SchemaScript } from "@/components/seo/schema-script";

type ArticleSchemaProps = {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
};

export function ArticleSchema(props: ArticleSchemaProps) {
  return <SchemaScript data={buildArticleSchema(props)} />;
}
