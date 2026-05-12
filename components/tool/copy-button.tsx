"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type CopyButtonProps = {
  value: string;
  copyText?: (value: string) => Promise<void>;
};

export function CopyButton({ value, copyText }: CopyButtonProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleCopy = async () => {
    try {
      await (copyText ? copyText(value) : navigator.clipboard.writeText(value));
      setStatus("success");
    } catch {
      setStatus("error");
    }

    window.setTimeout(() => setStatus("idle"), 1800);
  };

  return (
    <>
      <Button onClick={handleCopy} variant="secondary">
        {status === "success" ? "Copiado" : status === "error" ? "Falha ao copiar" : "Copiar SQL"}
      </Button>
      <span aria-live="polite" className="sr-only">
        {status === "success" ? "SQL copiado com sucesso." : status === "error" ? "Não foi possível copiar o SQL." : ""}
      </span>
    </>
  );
}
