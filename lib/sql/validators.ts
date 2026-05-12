import { z } from "zod";

export const identifierPattern = /^[a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*)?$/;
export const wildcardPattern = /^\*|[a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*)?$/;

const identifierSchema = z
  .string()
  .trim()
  .min(1, "Informe um identificador válido.")
  .max(64, "Use até 64 caracteres.")
  .refine((value) => identifierPattern.test(value), "Use apenas identificadores SQL simples.");

export const filterSchema = z.object({
  field: z.string().trim().max(64).optional().default(""),
  operator: z.enum(["=", "!=", ">", ">=", "<", "<=", "LIKE"]).default("="),
  value: z.string().trim().max(120).optional().default(""),
});

export const generatorSchema = z
  .object({
    table: identifierSchema,
    columns: z
      .string()
      .trim()
      .min(1, "Informe ao menos uma coluna ou use *.")
      .max(240, "Reduza a lista de colunas."),
    filters: z.array(filterSchema).max(3).default([]),
    orderBy: z.string().trim().max(64).optional().default(""),
    direction: z.enum(["ASC", "DESC"]).default("ASC"),
    limit: z.string().trim().max(6).optional().default(""),
  })
  .superRefine((input, ctx) => {
    const columns = input.columns
      .split(",")
      .map((column) => column.trim())
      .filter(Boolean);

    if (columns.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Informe ao menos uma coluna válida.",
        path: ["columns"],
      });
    }

    columns.forEach((column) => {
      if (!wildcardPattern.test(column)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Use apenas colunas simples separadas por vírgula ou *.",
          path: ["columns"],
        });
      }
    });

    if (input.orderBy && !identifierPattern.test(input.orderBy)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Use um campo válido para ordenação.",
        path: ["orderBy"],
      });
    }

    if (input.limit && !/^[1-9]\d{0,4}$/.test(input.limit)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Use um limite numérico entre 1 e 99999.",
        path: ["limit"],
      });
    }

    input.filters.forEach((filter, index) => {
      const hasField = filter.field.trim().length > 0;
      const hasValue = filter.value.trim().length > 0;

      if (hasField && !identifierPattern.test(filter.field)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Use um campo válido no filtro.",
          path: ["filters", index, "field"],
        });
      }

      if (hasField !== hasValue) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Preencha campo e valor do filtro ou deixe ambos vazios.",
          path: ["filters", index, hasField ? "value" : "field"],
        });
      }
    });
  });

export type FilterInput = z.infer<typeof filterSchema>;
export type GeneratorInput = z.infer<typeof generatorSchema>;
