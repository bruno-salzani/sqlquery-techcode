import { Container } from "@/components/layout/container";

export default function Loading() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="animate-pulse space-y-6">
          <div className="h-8 w-40 rounded-full bg-slate-200" />
          <div className="h-16 max-w-3xl rounded-3xl bg-slate-200" />
          <div className="h-[480px] rounded-[2rem] bg-slate-200" />
        </div>
      </Container>
    </section>
  );
}
