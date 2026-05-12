import { CopyButton } from "@/components/tool/copy-button";
import { QueryExplainer } from "@/components/tool/query-explainer";
import { Button } from "@/components/ui/button";

type SqlOutputProps = {
  query: string;
  explanation: string;
  onReset: () => void;
};

export function SqlOutput({ query, explanation, onReset }: SqlOutputProps) {
  return (
    <div className="space-y-4">
      <div className="rounded-[2rem] bg-slate-950 p-5 text-slate-100 shadow-2xl shadow-slate-950/10">
        <div className="flex flex-col gap-4 border-b border-slate-800 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Resultado</p>
            <p className="mt-1 text-sm text-slate-300">SQL pronto para copiar e ajustar.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <CopyButton value={query} />
            <Button onClick={onReset} variant="ghost" className="bg-white/5 text-slate-100 hover:bg-white/10">
              Limpar
            </Button>
          </div>
        </div>
        <pre aria-live="polite" className="mt-4 overflow-x-auto text-sm leading-7 text-slate-200">{query}</pre>
      </div>

      <QueryExplainer explanation={explanation} />
    </div>
  );
}
