import { buildFaqSchema } from "@/lib/schema";
import { SchemaScript } from "@/components/seo/schema-script";

type FaqSchemaProps = {
  items: Array<{ question: string; answer: string }>;
};

export function FaqSchema({ items }: FaqSchemaProps) {
  return <SchemaScript data={buildFaqSchema(items)} />;
}
