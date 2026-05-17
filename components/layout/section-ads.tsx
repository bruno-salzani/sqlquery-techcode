"use client";

import { AdSlot } from "@/components/ads/ad-slot";

type SectionAdsProps = {
  slot: string;
  label: string;
  layout?: "single" | "double";
};

export function SectionAds({ slot, label, layout = "single" }: SectionAdsProps) {
  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {layout === "single" ? (
          <AdSlot slot={slot} label={label} className="min-h-[250px]" />
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            <AdSlot slot={slot} label={label} className="min-h-[300px]" />
            <AdSlot slot={slot} label={`${label} 2`} className="min-h-[300px]" />
          </div>
        )}
      </div>
    </section>
  );
}
