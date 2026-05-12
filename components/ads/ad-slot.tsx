"use client";

import { useEffect, useRef } from "react";
import { AdPlaceholder } from "@/components/ads/ad-placeholder";
import { adsClient, shouldRenderLiveAds } from "@/lib/ads";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdSlotProps = {
  slot: string;
  label: string;
  className?: string;
};

export function AdSlot({ slot, label, className = "" }: AdSlotProps) {
  const pushedRef = useRef(false);

  useEffect(() => {
    if (!shouldRenderLiveAds || pushedRef.current) {
      return;
    }

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
      pushedRef.current = true;
    } catch {
      pushedRef.current = false;
    }
  }, []);

  return (
    <div className={`glass-card overflow-hidden rounded-[2rem] p-3 ${className}`.trim()}>
      {shouldRenderLiveAds ? (
        <ins
          className="adsbygoogle block h-full w-full overflow-hidden rounded-[1.5rem]"
          data-ad-client={adsClient}
          data-ad-format="auto"
          data-ad-slot={slot}
          data-full-width-responsive="true"
        />
      ) : (
        <AdPlaceholder label={label} />
      )}
    </div>
  );
}
