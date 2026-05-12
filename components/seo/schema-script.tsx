type SchemaScriptProps = {
  data: Record<string, unknown>;
};

export function SchemaScript({ data }: SchemaScriptProps) {
  return <script dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} type="application/ld+json" />;
}
