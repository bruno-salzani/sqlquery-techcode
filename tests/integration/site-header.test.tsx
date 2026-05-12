import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "@/components/layout/site-header";

describe("SiteHeader", () => {
  it("renders the primary navigation and CTA", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("link", { name: /SQL Query/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /abrir menu/i })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Gerar consulta" }).length).toBeGreaterThan(0);
  });

  it("opens the mobile navigation menu", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    await user.click(screen.getByRole("button", { name: /abrir menu/i }));

    const mobileMenu = screen.getByRole("navigation", { name: "Menu mobile" });
    expect(mobileMenu).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "FAQ" }).length).toBeGreaterThan(0);
  });
});
