import { buildSoftwareSchema } from "@/lib/schema";
import { SchemaScript } from "@/components/seo/schema-script";

type SoftwareSchemaProps = {
  name: string;
  description: string;
  url: string;
};

export function SoftwareSchema({ name, description, url }: SoftwareSchemaProps) {
  return <SchemaScript data={buildSoftwareSchema(name, description, url)} />;
}
