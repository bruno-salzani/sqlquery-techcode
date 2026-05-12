import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { AdSlot } from "@/components/ads/ad-slot";
import { CopyButton } from "@/components/tool/copy-button";

describe("AdSlot and CopyButton", () => {

  it("renders the development placeholder for ads", () => {
    render(<AdSlot label="Banner horizontal" slot="5183612327" />);

    expect(screen.getByText("Banner horizontal")).toBeInTheDocument();
    expect(screen.getByText(/Placeholder ativo em desenvolvimento/i)).toBeInTheDocument();
  });

  it("copies SQL successfully and announces feedback", async () => {
    const user = userEvent.setup();
    const copyText = vi.fn().mockResolvedValue(undefined);

    render(<CopyButton copyText={copyText} value="SELECT * FROM clientes;" />);

    await user.click(screen.getByRole("button", { name: "Copiar SQL" }));

    await waitFor(() => {
      expect(copyText).toHaveBeenCalledWith("SELECT * FROM clientes;");
    });
    expect(screen.getByRole("button", { name: "Copiado" })).toBeInTheDocument();
    expect(screen.getByText("SQL copiado com sucesso.")).toBeInTheDocument();
  });

  it("shows failure feedback when clipboard copy fails", async () => {
    const user = userEvent.setup();
    const copyText = vi.fn().mockRejectedValueOnce(new Error("denied"));

    render(<CopyButton copyText={copyText} value="SELECT * FROM clientes;" />);

    await user.click(screen.getByRole("button", { name: "Copiar SQL" }));

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Falha ao copiar" })).toBeInTheDocument();
    });
  });
});
