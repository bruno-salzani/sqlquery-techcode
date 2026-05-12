import { describe, expect, it } from "vitest";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbSchema, buildFaqSchema, buildSoftwareSchema, organizationSchema, websiteSchema } from "@/lib/schema";
import { adsClient, adSlots, adsEnabled } from "@/lib/ads";

describe("SEO and config helpers", () => {
  it("builds canonical metadata for a route", () => {
    const metadata = buildMetadata({
      title: "Gerador SQL",
      description: "Descrição teste",
      path: "/sql-generator",
    });

    expect(metadata.alternates?.canonical).toBe("https://sqlquery.techcode.com.br/sql-generator");
    expect(metadata.openGraph?.url).toBe("https://sqlquery.techcode.com.br/sql-generator");
  });

  it("creates software application schema", () => {
    const schema = buildSoftwareSchema("SQL Query", "Gerador SQL", "https://sqlquery.techcode.com.br");
    expect(schema["@type"]).toBe("SoftwareApplication");
    expect(schema.offers.price).toBe("0");
  });

  it("creates faq schema entries", () => {
    const schema = buildFaqSchema([{ question: "Q1", answer: "A1" }]);
    expect(schema.mainEntity).toHaveLength(1);
    expect(schema.mainEntity[0].acceptedAnswer.text).toBe("A1");
  });

  it("creates breadcrumb schema entries", () => {
    const schema = buildBreadcrumbSchema([
      { name: "Home", url: "https://sqlquery.techcode.com.br" },
      { name: "FAQ", url: "https://sqlquery.techcode.com.br/faq" },
    ]);

    expect(schema.itemListElement[1].position).toBe(2);
  });

  it("exposes base organization and website schemas", () => {
    expect(organizationSchema["@type"]).toBe("Organization");
    expect(websiteSchema["@type"]).toBe("WebSite");
  });

  it("loads live ad configuration defaults", () => {
    expect(adsEnabled).toBe(true);
    expect(adsClient).toBe("ca-pub-6566192641888645");
    expect(adSlots.hero.slot).toBe("5183612327");
    expect(adSlots.inContent.slot).toBe("9222479973");
    expect(adSlots.sidebar.slot).toBe("8543823128");
  });
});
