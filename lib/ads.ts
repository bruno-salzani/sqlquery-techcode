const defaultAdsClient = "ca-pub-6566192641888645";

export const adsClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim() || defaultAdsClient;
export const adsEnabled = (process.env.NEXT_PUBLIC_ADSENSE_ENABLED ?? "true") === "true";
export const shouldRenderLiveAds = adsEnabled && process.env.NODE_ENV === "production";

export const adSlots = {
  hero: {
    slot: process.env.NEXT_PUBLIC_ADSENSE_SLOT_BANNER?.trim() || "5183612327",
    label: "Banner horizontal",
    className: "min-h-[140px] sm:min-h-[160px]",
  },
  inContent: {
    slot: process.env.NEXT_PUBLIC_ADSENSE_SLOT_SQUARE?.trim() || "9222479973",
    label: "Bloco quadrado",
    className: "min-h-[280px] sm:min-h-[320px]",
  },
  sidebar: {
    slot: process.env.NEXT_PUBLIC_ADSENSE_SLOT_VERTICAL?.trim() || "8543823128",
    label: "Anúncio vertical",
    className: "min-h-[600px]",
  },
  mobile: {
    slot: process.env.NEXT_PUBLIC_ADSENSE_SLOT_BANNER?.trim() || "5183612327",
    label: "Mobile ad",
    className: "min-h-[120px]",
  },
} as const;
