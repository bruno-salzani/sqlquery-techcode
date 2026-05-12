import type { GeneratorInput } from "@/lib/sql/validators";
import { examples } from "@/lib/site";

export const generatorExamples: Array<{ title: string; summary: string; payload: GeneratorInput }> = examples.map((example) => ({
  title: example.title,
  summary: example.summary,
  payload: {
    table: example.table,
    columns: example.columns.join(", "),
    filters: example.filters,
    orderBy: example.orderBy,
    direction: example.direction,
    limit: example.limit,
  },
}));
