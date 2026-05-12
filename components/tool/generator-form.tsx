"use client";

import { useMemo, useRef, useState } from "react";
import { ExamplePrompts } from "@/components/tool/example-prompts";
import { SqlOutput } from "@/components/tool/sql-output";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { generatorSchema, type FilterInput, type GeneratorInput } from "@/lib/sql/validators";
import { buildSqlQuery, explainSqlQuery } from "@/lib/sql/prompt-builder";

type LocalFilter = FilterInput & { id: string };
type LocalForm = Omit<GeneratorInput, "filters"> & { filters: LocalFilter[] };
type FilterError = { field?: string; value?: string };

type FormErrors = {
  table?: string;
  columns?: string;
  orderBy?: string;
  limit?: string;
  filters: Record<string, FilterError>;
};

const createFilter = (id: string): LocalFilter => ({ id, field: "", operator: "=", value: "" });

const toGeneratorInput = (form: LocalForm): GeneratorInput => ({
  ...form,
  filters: form.filters.map((filter) => ({
    field: filter.field,
    operator: filter.operator,
    value: filter.value,
  })),
});

const emptyErrors = (): FormErrors => ({ filters: {} });

export function GeneratorForm() {
  const filterSeedRef = useRef(2);
  const createFilterId = () => `filter-${filterSeedRef.current++}`;

  const buildInitialForm = (): LocalForm => ({
    table: "",
    columns: "*",
    filters: [createFilter(createFilterId())],
    orderBy: "",
    direction: "ASC",
    limit: "",
  });

  const [form, setForm] = useState<LocalForm>({
    table: "",
    columns: "*",
    filters: [createFilter("filter-1")],
    orderBy: "",
    direction: "ASC",
    limit: "",
  });
  const [errors, setErrors] = useState<FormErrors>(emptyErrors);
  const [query, setQuery] = useState("");
  const [explanation, setExplanation] = useState("");

  const validFilterCount = useMemo(
    () => form.filters.filter((filter) => filter.field.trim() && filter.value.trim()).length,
    [form.filters],
  );

  const updateFilter = (id: string, key: keyof FilterInput, value: string) => {
    setForm((current) => ({
      ...current,
      filters: current.filters.map((filter) => (filter.id === id ? { ...filter, [key]: value } : filter)),
    }));
  };

  const addFilter = () => {
    setForm((current) => ({
      ...current,
      filters: [...current.filters, createFilter(createFilterId())],
    }));
  };

  const removeFilter = (id: string) => {
    setForm((current) => ({
      ...current,
      filters: current.filters.length === 1 ? [createFilter(createFilterId())] : current.filters.filter((filter) => filter.id !== id),
    }));
    setErrors((current) => {
      const nextFilters = { ...current.filters };
      delete nextFilters[id];
      return { ...current, filters: nextFilters };
    });
  };

  const resetForm = () => {
    setForm(buildInitialForm());
    setErrors(emptyErrors());
    setQuery("");
    setExplanation("");
  };

  const handleGenerate = () => {
    const payload = toGeneratorInput(form);
    const parsed = generatorSchema.safeParse(payload);

    if (!parsed.success) {
      const nextErrors = emptyErrors();

      parsed.error.issues.forEach((issue) => {
        const [root, index, child] = issue.path;

        if (root === "filters" && typeof index === "number" && typeof child === "string") {
          const filterId = form.filters[index]?.id;

          if (filterId) {
            nextErrors.filters[filterId] = {
              ...nextErrors.filters[filterId],
              [child]: issue.message,
            };
          }

          return;
        }

        if (typeof root === "string" && root !== "filters") {
          nextErrors[root as keyof Omit<FormErrors, "filters">] = issue.message;
        }
      });

      setErrors(nextErrors);
      return;
    }

    const nextQuery = buildSqlQuery(parsed.data);
    const nextExplanation = explainSqlQuery(parsed.data);

    setErrors(emptyErrors());
    setQuery(nextQuery);
    setExplanation(nextExplanation);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="glass-card rounded-[2rem] p-5 sm:p-6">
        <div className="grid gap-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="table">
              Tabela
            </label>
            <Input
              aria-describedby={errors.table ? "table-error" : undefined}
              aria-invalid={Boolean(errors.table)}
              hasError={Boolean(errors.table)}
              id="table"
              onChange={(event) => setForm((current) => ({ ...current, table: event.target.value }))}
              placeholder="clientes"
              value={form.table}
            />
            {errors.table ? <p className="mt-2 text-sm text-rose-600" id="table-error">{errors.table}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="columns">
              Colunas
            </label>
            <Input
              aria-describedby={errors.columns ? "columns-error" : "columns-help"}
              aria-invalid={Boolean(errors.columns)}
              hasError={Boolean(errors.columns)}
              id="columns"
              onChange={(event) => setForm((current) => ({ ...current, columns: event.target.value }))}
              placeholder="id, nome, email"
              value={form.columns}
            />
            <p className="mt-2 text-xs text-slate-500" id="columns-help">
              Use colunas simples separadas por vírgula ou *.
            </p>
            {errors.columns ? <p className="mt-2 text-sm text-rose-600" id="columns-error">{errors.columns}</p> : null}
          </div>

          <fieldset>
            <div className="mb-2 flex items-center justify-between gap-3">
              <legend className="block text-sm font-semibold text-slate-900">Filtros</legend>
              <span className="text-xs uppercase tracking-[0.18em] text-slate-500">{validFilterCount} ativo(s)</span>
            </div>

            <div className="space-y-4">
              {form.filters.map((filter, index) => {
                const filterErrors = errors.filters[filter.id] ?? {};
                const fieldErrorId = `${filter.id}-field-error`;
                const valueErrorId = `${filter.id}-value-error`;

                return (
                  <div key={filter.id} className="rounded-3xl border border-slate-200/80 bg-white/80 p-4">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-slate-900">Filtro {index + 1}</p>
                      {form.filters.length > 1 ? (
                        <button
                          className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
                          onClick={() => removeFilter(filter.id)}
                          type="button"
                        >
                          Remover
                        </button>
                      ) : null}
                    </div>
                    <div className="grid gap-3 sm:grid-cols-[1fr_110px_1fr]">
                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500" htmlFor={`${filter.id}-field`}>
                          Campo
                        </label>
                        <Input
                          aria-describedby={filterErrors.field ? fieldErrorId : undefined}
                          aria-invalid={Boolean(filterErrors.field)}
                          hasError={Boolean(filterErrors.field)}
                          id={`${filter.id}-field`}
                          onChange={(event) => updateFilter(filter.id, "field", event.target.value)}
                          placeholder="status"
                          value={filter.field}
                        />
                        {filterErrors.field ? <p className="mt-2 text-sm text-rose-600" id={fieldErrorId}>{filterErrors.field}</p> : null}
                      </div>
                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500" htmlFor={`${filter.id}-operator`}>
                          Operador
                        </label>
                        <Select
                          id={`${filter.id}-operator`}
                          onChange={(event) => updateFilter(filter.id, "operator", event.target.value)}
                          value={filter.operator}
                        >
                          <option value="=">=</option>
                          <option value="!=">!=</option>
                          <option value=">">&gt;</option>
                          <option value=">=">&gt;=</option>
                          <option value="<">&lt;</option>
                          <option value="<=">&lt;=</option>
                          <option value="LIKE">LIKE</option>
                        </Select>
                      </div>
                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500" htmlFor={`${filter.id}-value`}>
                          Valor
                        </label>
                        <Input
                          aria-describedby={filterErrors.value ? valueErrorId : undefined}
                          aria-invalid={Boolean(filterErrors.value)}
                          hasError={Boolean(filterErrors.value)}
                          id={`${filter.id}-value`}
                          onChange={(event) => updateFilter(filter.id, "value", event.target.value)}
                          placeholder="ativo"
                          value={filter.value}
                        />
                        {filterErrors.value ? <p className="mt-2 text-sm text-rose-600" id={valueErrorId}>{filterErrors.value}</p> : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {form.filters.length < 3 ? (
              <button
                className="mt-3 text-sm font-semibold text-blue-700 transition hover:text-blue-800"
                onClick={addFilter}
                type="button"
              >
                + Adicionar filtro
              </button>
            ) : null}
          </fieldset>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="sm:col-span-1">
              <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="orderBy">
                Order by
              </label>
              <Input
                aria-describedby={errors.orderBy ? "orderBy-error" : undefined}
                aria-invalid={Boolean(errors.orderBy)}
                hasError={Boolean(errors.orderBy)}
                id="orderBy"
                onChange={(event) => setForm((current) => ({ ...current, orderBy: event.target.value }))}
                placeholder="nome"
                value={form.orderBy}
              />
              {errors.orderBy ? <p className="mt-2 text-sm text-rose-600" id="orderBy-error">{errors.orderBy}</p> : null}
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="direction">
                Direção
              </label>
              <Select
                id="direction"
                onChange={(event) =>
                  setForm((current) => ({ ...current, direction: event.target.value as GeneratorInput["direction"] }))
                }
                value={form.direction}
              >
                <option value="ASC">ASC</option>
                <option value="DESC">DESC</option>
              </Select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="limit">
                Limite
              </label>
              <Input
                aria-describedby={errors.limit ? "limit-error" : "limit-help"}
                aria-invalid={Boolean(errors.limit)}
                hasError={Boolean(errors.limit)}
                id="limit"
                inputMode="numeric"
                onChange={(event) => setForm((current) => ({ ...current, limit: event.target.value }))}
                placeholder="25"
                value={form.limit}
              />
              <p className="mt-2 text-xs text-slate-500" id="limit-help">
                Use um valor entre 1 e 99999.
              </p>
              {errors.limit ? <p className="mt-2 text-sm text-rose-600" id="limit-error">{errors.limit}</p> : null}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button className="sm:flex-1" onClick={handleGenerate}>
              Gerar SQL
            </Button>
            <Button className="sm:flex-1" onClick={resetForm} variant="secondary">
              Limpar campos
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {query ? (
          <SqlOutput explanation={explanation} onReset={resetForm} query={query} />
        ) : (
          <div className="glass-card rounded-[2rem] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Resultado</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">Seu SQL aparece aqui.</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Preencha os campos principais, gere a consulta e copie o resultado com um clique.
            </p>
          </div>
        )}

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Exemplos rápidos</p>
          <ExamplePrompts
            onSelect={(value) =>
              setForm({
                ...value,
                filters: value.filters.length > 0 ? value.filters.map((filter) => ({ ...filter, id: createFilterId() })) : [createFilter(createFilterId())],
              })
            }
          />
        </div>
      </div>
    </div>
  );
}
