const defaultAdsClient = "ca-pub-6566192641888645";

export const adsClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim() || defaultAdsClient;
export const adsEnabled = (process.env.NEXT_PUBLIC_ADSENSE_ENABLED ?? "true") === "true";
export const shouldRenderLiveAds = adsEnabled && process.env.NODE_ENV === "production";

export const adSlots = {
  hero: {
    slot: process.env.NEXT_PUBLIC_ADSENSE_SLOT_BANNER?.trim() || "5183612327",
    label: "Banner horizontal",
    className: "min-h-[132px] sm:min-h-[152px]",
  },
  inContent: {
    slot: process.env.NEXT_PUBLIC_ADSENSE_SLOT_SQUARE?.trim() || "9222479973",
    label: "Bloco de conteúdo",
    className: "min-h-[280px] sm:min-h-[320px]",
  },
} as const;
