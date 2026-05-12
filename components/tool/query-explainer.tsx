type QueryExplainerProps = {
  explanation: string;
};

export function QueryExplainer({ explanation }: QueryExplainerProps) {
  return (
    <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Explicação</p>
      <p className="mt-3 text-sm leading-7 text-emerald-900">{explanation}</p>
    </div>
  );
}
