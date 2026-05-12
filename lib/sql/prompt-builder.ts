import type { FilterInput, GeneratorInput } from "@/lib/sql/validators";

const numericPattern = /^-?\d+(\.\d+)?$/;

const normalizeIdentifier = (value: string) => value.trim();

const normalizeColumns = (value: string) =>
  value
    .split(",")
    .map((column) => column.trim())
    .filter(Boolean)
    .join(", ");

const sanitizeValue = (value: string) => {
  const trimmed = value.trim();

  if (numericPattern.test(trimmed)) {
    return trimmed;
  }

  return `'${trimmed.replace(/'/g, "''")}'`;
};

const normalizeFilters = (filters: FilterInput[]) =>
  filters.filter((filter) => filter.field.trim() && filter.value.trim()).map((filter) => ({
    ...filter,
    field: normalizeIdentifier(filter.field),
    value: filter.value.trim(),
  }));

const buildWhereClause = (filters: FilterInput[]) => {
  const validFilters = normalizeFilters(filters);

  if (validFilters.length === 0) {
    return "";
  }

  const conditions = validFilters.map((filter) => {
    const value = filter.operator === "LIKE"
      ? sanitizeValue(`%${filter.value.replace(/^%|%$/g, "")}%`)
      : sanitizeValue(filter.value);

    return `${filter.field} ${filter.operator} ${value}`;
  });

  return `\nWHERE ${conditions.join("\n  AND ")}`;
};

export const buildSqlQuery = (input: GeneratorInput) => {
  const table = normalizeIdentifier(input.table);
  const columns = normalizeColumns(input.columns);
  const whereClause = buildWhereClause(input.filters);
  const orderBy = input.orderBy.trim() ? `\nORDER BY ${normalizeIdentifier(input.orderBy)} ${input.direction}` : "";
  const limit = input.limit.trim() ? `\nLIMIT ${input.limit.trim()}` : "";

  return `SELECT ${columns}\nFROM ${table}${whereClause}${orderBy}${limit};`;
};

export const explainSqlQuery = (input: GeneratorInput) => {
  const columns = normalizeColumns(input.columns);
  const filterCount = normalizeFilters(input.filters).length;
  const base = `Seleciona ${columns} da tabela ${input.table.trim()}.`;
  const filters = filterCount > 0 ? ` Aplica ${filterCount} filtro${filterCount > 1 ? "s" : ""}.` : "";
  const order = input.orderBy.trim() ? ` Ordena por ${input.orderBy.trim()} em ${input.direction}.` : "";
  const limit = input.limit.trim() ? ` Limita o resultado a ${input.limit.trim()} linhas.` : "";

  return `${base}${filters}${order}${limit}`;
};
