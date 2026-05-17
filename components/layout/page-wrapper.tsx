import { ReactNode } from "react";
import { AdSlot } from "@/components/ads/ad-slot";

type PageWrapperProps = {
  children: ReactNode;
  showSidebar?: boolean;
  sidebarAds?: Array<{ slot: string; label: string }>;
};

export function PageWrapper({ children, showSidebar = true, sidebarAds }: PageWrapperProps) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-6 lg:px-8 lg:py-12">
      {/* Main Content */}
      <div className="lg:col-span-9">{children}</div>

      {/* Sidebar with Ads */}
      {showSidebar && (
        <aside className="mt-12 space-y-6 lg:col-span-3 lg:mt-0">
          {/* Top Sidebar Ad */}
          {sidebarAds?.[0] && (
            <div className="sticky top-24 space-y-6">
              <AdSlot slot={sidebarAds[0].slot} label={sidebarAds[0].label} className="min-h-[600px]" />
              {sidebarAds[1] && <AdSlot slot={sidebarAds[1].slot} label={sidebarAds[1].label} className="min-h-[400px]" />}
            </div>
          )}
        </aside>
      )}
    </div>
  );
}
