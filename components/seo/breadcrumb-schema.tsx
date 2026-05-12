import { buildBreadcrumbSchema } from "@/lib/schema";
import { SchemaScript } from "@/components/seo/schema-script";

type BreadcrumbSchemaProps = {
  items: Array<{ name: string; url: string }>;
};

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  return <SchemaScript data={buildBreadcrumbSchema(items)} />;
}
