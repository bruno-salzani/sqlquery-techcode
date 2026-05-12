import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type MetadataProps = {
  title: string;
  description: string;
  path?: string;
};

export function buildMetadata({ title, description, path = "" }: MetadataProps): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords: siteConfig.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: `${siteConfig.url}${siteConfig.socialImage}`,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}${siteConfig.socialImage}`],
    },
  };
}
