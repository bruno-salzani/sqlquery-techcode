import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Smoke tests", () => {
  test("home page loads and navigates to the generator", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Gere consultas SQL simples");
    await expect(page.getByRole("link", { name: "Abrir gerador SQL" })).toBeVisible();
    await page.getByRole("link", { name: "Abrir gerador SQL" }).click();
    await expect(page).toHaveURL(/sql-generator/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Monte consultas SQL simples");
  });

  test("critical generator flow works", async ({ page }) => {
    await page.goto("/sql-generator");
    await page.getByLabel("Tabela").fill("clientes");
    await page.getByLabel("Colunas").fill("id, nome, email");
    await page.getByLabel("Campo").fill("status");
    await page.getByLabel("Valor").fill("ativo");
    await page.getByLabel("Order by").fill("nome");
    await page.getByLabel("Limite").fill("25");
    await page.getByRole("button", { name: "Gerar SQL" }).click();

    await expect(page.getByText("SELECT id, nome, email")).toBeVisible();
    await expect(page.getByText("WHERE status = 'ativo'")) .toBeVisible();
    await expect(page.getByRole("button", { name: "Copiar SQL" })).toBeVisible();
  });

  test("form validation appears for invalid values", async ({ page }) => {
    await page.goto("/sql-generator");
    await page.getByLabel("Tabela").fill("clientes;drop");
    await page.getByLabel("Colunas").fill("id, nome desc;");
    await page.getByRole("button", { name: "Gerar SQL" }).click();

    await expect(page.getByText("Use apenas identificadores SQL simples.")).toBeVisible();
    await expect(page.getByText("Use apenas colunas simples separadas por vírgula ou *.")).toBeVisible();
  });

  test("main public pages respond and mobile menu works", async ({ page, isMobile }) => {
    await page.goto("/faq");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Respostas objetivas");

    await page.goto("/exemplos");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Consultas prontas");

    if (isMobile) {
      await page.goto("/");
      await page.getByRole("button", { name: /Abrir menu/i }).click();
      await expect(page.getByRole("navigation", { name: "Menu mobile" })).toBeVisible();
    }
  });

  test("main pages have no critical automatic accessibility violations", async ({ page }) => {
    await page.goto("/");
    const homeResults = await new AxeBuilder({ page }).analyze();
    expect(homeResults.violations).toEqual([]);

    await page.goto("/sql-generator");
    const generatorResults = await new AxeBuilder({ page }).analyze();
    expect(generatorResults.violations).toEqual([]);
  });
});
