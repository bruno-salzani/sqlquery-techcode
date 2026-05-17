import { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Badge } from "@/components/ui/badge";

type PageLayoutProps = {
  children: ReactNode;
  title: string;
  description: string;
  badge?: string;
  showSidebar?: boolean;
  sidebarAds?: Array<{ slot: string; label: string }>;
};

export function PageLayout({
  children,
  title,
  description,
  badge,
  showSidebar = true,
  sidebarAds,
}: PageLayoutProps) {
  const content = (
    <div>
      {badge && <Badge>{badge}</Badge>}
      <h1 className="section-title mt-6 text-slate-950">{title}</h1>
      <p className="section-copy mt-4 max-w-2xl">{description}</p>
      <div className="mt-8">{children}</div>
    </div>
  );

  if (showSidebar) {
    return <PageWrapper sidebarAds={sidebarAds}>{content}</PageWrapper>;
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container maxWidth="lg">{content}</Container>
    </section>
  );
}
