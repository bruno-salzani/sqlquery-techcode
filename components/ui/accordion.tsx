type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.question} className="glass-card group rounded-3xl p-5">
          <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
            {item.question}
          </summary>
          <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
