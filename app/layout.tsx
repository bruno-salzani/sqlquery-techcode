import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "@/app/globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SchemaScript } from "@/components/seo/schema-script";
import { adsClient, adsEnabled, shouldRenderLiveAds } from "@/lib/ads";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "SQL Query | Gerador SQL online para consultas simples",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  manifest: "/manifest.webmanifest",
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  keywords: siteConfig.keywords,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "SQL Query | Gerador SQL online para consultas simples",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.socialImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SQL Query | Gerador SQL online para consultas simples",
    description: siteConfig.description,
    images: [siteConfig.socialImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={inter.variable} lang="pt-BR">
      <body className={`${inter.className} flex min-h-screen flex-col text-slate-950 antialiased`}>
        <SchemaScript data={organizationSchema} />
        <SchemaScript data={websiteSchema} />
        {adsEnabled ? (
          <Script
            async
            crossOrigin="anonymous"
            data-testid="adsense-script"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsClient}`}
            strategy={shouldRenderLiveAds ? "afterInteractive" : "lazyOnload"}
          />
        ) : null}
        <a
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-slate-950 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
          href="#main-content"
        >
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
