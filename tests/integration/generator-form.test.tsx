import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { GeneratorForm } from "@/components/tool/generator-form";

describe("GeneratorForm", () => {
  it("generates SQL for the main flow", async () => {
    const user = userEvent.setup();
    render(<GeneratorForm />);

    await user.clear(screen.getByLabelText("Tabela"));
    await user.type(screen.getByLabelText("Tabela"), "clientes");
    await user.clear(screen.getByLabelText("Colunas"));
    await user.type(screen.getByLabelText("Colunas"), "id, nome, email");
    await user.type(screen.getByLabelText("Campo"), "status");
    await user.type(screen.getByLabelText("Valor"), "ativo");
    await user.type(screen.getByLabelText("Order by"), "nome");
    await user.type(screen.getByLabelText("Limite"), "25");

    await user.click(screen.getByRole("button", { name: "Gerar SQL" }));

    expect(screen.getByText(/SELECT id, nome, email/i)).toBeInTheDocument();
    expect(screen.getByText(/WHERE status = 'ativo'/i)).toBeInTheDocument();
    expect(screen.getByText(/Limita o resultado a 25 linhas/i)).toBeInTheDocument();
  });

  it("shows accessible validation errors for invalid input", async () => {
    const user = userEvent.setup();
    render(<GeneratorForm />);

    await user.clear(screen.getByLabelText("Tabela"));
    await user.type(screen.getByLabelText("Tabela"), "clientes;drop");
    await user.clear(screen.getByLabelText("Colunas"));
    await user.type(screen.getByLabelText("Colunas"), "id, nome desc;");
    await user.click(screen.getByRole("button", { name: "Gerar SQL" }));

    expect(screen.getByText(/Use apenas identificadores SQL simples/i)).toBeInTheDocument();
    expect(screen.getByText(/Use apenas colunas simples separadas por vírgula ou \*/i)).toBeInTheDocument();
  });

  it("adds and removes filters", async () => {
    const user = userEvent.setup();
    render(<GeneratorForm />);

    await user.click(screen.getByRole("button", { name: /Adicionar filtro/i }));
    expect(screen.getByText("Filtro 2")).toBeInTheDocument();

    await user.click(screen.getAllByRole("button", { name: "Remover" })[0]);
    expect(screen.queryByText("Filtro 2")).not.toBeInTheDocument();
  });

  it("resets the form state", async () => {
    const user = userEvent.setup();
    render(<GeneratorForm />);

    await user.type(screen.getByLabelText("Tabela"), "clientes");
    await user.click(screen.getByRole("button", { name: /Limpar campos/i }));

    expect(screen.getByLabelText("Tabela")).toHaveValue("");
    expect(screen.getByText(/Seu SQL aparece aqui/i)).toBeInTheDocument();
  });
});
