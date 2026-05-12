import { describe, expect, it } from "vitest";
import { buildSqlQuery, explainSqlQuery } from "@/lib/sql/prompt-builder";
import { generatorSchema, type GeneratorInput } from "@/lib/sql/validators";

describe("SQL generator logic", () => {
  it("builds a valid simple SELECT query", () => {
    const input: GeneratorInput = {
      table: "clientes",
      columns: "id, nome, email",
      filters: [{ field: "status", operator: "=", value: "ativo" }],
      orderBy: "nome",
      direction: "ASC",
      limit: "25",
    };

    expect(buildSqlQuery(input)).toBe(
      "SELECT id, nome, email\nFROM clientes\nWHERE status = 'ativo'\nORDER BY nome ASC\nLIMIT 25;",
    );
  });

  it("wraps LIKE filter values with wildcards", () => {
    const input: GeneratorInput = {
      table: "clientes",
      columns: "nome",
      filters: [{ field: "nome", operator: "LIKE", value: "ana" }],
      orderBy: "",
      direction: "ASC",
      limit: "",
    };

    expect(buildSqlQuery(input)).toContain("WHERE nome LIKE '%ana%'");
  });

  it("escapes single quotes in string values", () => {
    const input: GeneratorInput = {
      table: "clientes",
      columns: "nome",
      filters: [{ field: "nome", operator: "=", value: "d'angelo" }],
      orderBy: "",
      direction: "ASC",
      limit: "",
    };

    expect(buildSqlQuery(input)).toContain("'d''angelo'");
  });

  it("explains the generated query in natural language", () => {
    const explanation = explainSqlQuery({
      table: "pedidos",
      columns: "id, total",
      filters: [{ field: "status", operator: "=", value: "pago" }],
      orderBy: "criado_em",
      direction: "DESC",
      limit: "10",
    });

    expect(explanation).toContain("Seleciona id, total da tabela pedidos.");
    expect(explanation).toContain("Aplica 1 filtro");
    expect(explanation).toContain("Ordena por criado_em em DESC");
    expect(explanation).toContain("Limita o resultado a 10 linhas");
  });

  it("accepts wildcard columns", () => {
    const parsed = generatorSchema.safeParse({
      table: "clientes",
      columns: "*",
      filters: [],
      orderBy: "",
      direction: "ASC",
      limit: "",
    });

    expect(parsed.success).toBe(true);
  });

  it("rejects invalid table names", () => {
    const parsed = generatorSchema.safeParse({
      table: "clientes; DROP TABLE x",
      columns: "id",
      filters: [],
      orderBy: "",
      direction: "ASC",
      limit: "",
    });

    expect(parsed.success).toBe(false);
  });

  it("rejects invalid orderBy fields", () => {
    const parsed = generatorSchema.safeParse({
      table: "clientes",
      columns: "id",
      filters: [],
      orderBy: "nome desc;",
      direction: "ASC",
      limit: "",
    });

    expect(parsed.success).toBe(false);
  });

  it("rejects invalid limits", () => {
    const parsed = generatorSchema.safeParse({
      table: "clientes",
      columns: "id",
      filters: [],
      orderBy: "",
      direction: "ASC",
      limit: "000000",
    });

    expect(parsed.success).toBe(false);
  });

  it("rejects partial filters", () => {
    const parsed = generatorSchema.safeParse({
      table: "clientes",
      columns: "id",
      filters: [{ field: "status", operator: "=", value: "" }],
      orderBy: "",
      direction: "ASC",
      limit: "",
    });

    expect(parsed.success).toBe(false);
  });
});
