import type { GeneratorInput } from "@/lib/sql/validators";
import { generatorExamples } from "@/lib/sql/examples";

type ExamplePromptsProps = {
  onSelect: (value: GeneratorInput) => void;
};

export function ExamplePrompts({ onSelect }: ExamplePromptsProps) {
  return (
    <div className="grid gap-3">
      {generatorExamples.map((example) => (
        <button
          key={example.title}
          className="rounded-3xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-blue-200 hover:bg-blue-50"
          onClick={() => onSelect(example.payload)}
          type="button"
        >
          <p className="text-sm font-semibold text-slate-950">{example.title}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{example.summary}</p>
        </button>
      ))}
    </div>
  );
}
