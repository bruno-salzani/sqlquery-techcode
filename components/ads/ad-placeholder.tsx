type AdPlaceholderProps = {
  label: string;
};

export function AdPlaceholder({ label }: AdPlaceholderProps) {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50/90 px-4 text-center text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
      <div>
        <p>{label}</p>
        <p className="mt-2 text-[10px] tracking-[0.14em] text-slate-400">Placeholder ativo em desenvolvimento</p>
      </div>
    </div>
  );
}
