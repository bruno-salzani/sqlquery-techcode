import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function FinalCta() {
  return (
    <section className="pb-16 pt-6 sm:pb-24">
      <Container>
        <Card className="rounded-[2rem] bg-slate-950 p-8 text-white sm:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Pronto para usar</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Gere uma consulta SQL simples agora e reduza o tempo até o primeiro resultado.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Abra o gerador, preencha os campos principais e copie o SQL final em segundos com uma experiência premium e objetiva.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/sql-generator">Abrir gerador</Button>
              <Button href="/faq" variant="secondary">
                Tirar dúvidas
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
