const normalizeSiteUrl = (value: string) => value.replace(/\/+$/, "");

const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://sqlquery.techcodecompany.com");

export const resolveSiteUrl = (path = "/") => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, `${siteUrl}/`).toString();
};

export const siteConfig = {
  name: "SQL Query",
  shortName: "SQL Query",
  description: "Gere consultas SQL simples em segundos com uma interface rápida, clara e pronta para copiar.",
  url: siteUrl,
  locale: "pt_BR",
  keywords: [
    "sql query generator",
    "criador de consultas sql simples",
    "gerador sql online",
    "sql select generator",
    "consulta sql simples",
    "gerar query sql",
  ],
  author: "TechCode Company",
  socialImagePath: "/opengraph-image",
  socialImage: resolveSiteUrl("/opengraph-image"),
  nav: [
    { href: "/sql-generator", label: "Gerador SQL" },
    { href: "/exemplos", label: "Exemplos" },
    { href: "/faq", label: "FAQ" },
  ],
};

export const heroStats = ["Sem cadastro", "Copia e cola imediato", "Compatível com mobile", "Interface limpa e objetiva"];

export const featureCards = [
  {
    title: "Menos atrito para começar",
    description: "Informe tabela, colunas e filtros sem abrir mão de clareza nem perder tempo com sintaxe manual logo no primeiro passo.",
  },
  {
    title: "Saída pronta para copiar",
    description: "O resultado aparece formatado, legível e com explicação em linguagem natural para revisar antes de usar.",
  },
  {
    title: "Útil para estudo e rotina",
    description: "Funciona bem para aprender SELECTs básicos, validar ideias rápido e acelerar tarefas internas repetitivas.",
  },
  {
    title: "Base leve e escalável",
    description: "A aplicação já nasce preparada para SEO técnico, performance alta e monetização discreta sem poluir a experiência.",
  },
];

export const useCases = [
  "Montar SELECTs simples para clientes, produtos, pedidos e tabelas internas.",
  "Aplicar filtros básicos com igualdade, comparação ou LIKE em poucos cliques.",
  "Ordenar por data, nome, preço ou qualquer campo comum sem reescrever tudo.",
  "Definir limite de linhas para testes rápidos, consultas operacionais e estudo.",
];

export const steps = [
  {
    title: "Descreva a base da consulta",
    description: "Informe a tabela e as colunas que deseja retornar em uma estrutura simples e previsível.",
  },
  {
    title: "Ajuste filtros e ordenação",
    description: "Adicione condições, direção de ordenação e limite de linhas conforme o objetivo da query.",
  },
  {
    title: "Copie, revise e use",
    description: "Leia a explicação em linguagem natural, valide o SQL e copie o resultado para o seu ambiente.",
  },
];

export const faqItems = [
  {
    question: "O SQL Query funciona para iniciantes?",
    answer: "Sim. A interface foi pensada para quem quer gerar consultas SQL simples sem precisar dominar a sintaxe completa logo no início.",
  },
  {
    question: "Posso usar o resultado em MySQL ou PostgreSQL?",
    answer: "Sim para consultas simples. Em cenários avançados, vale revisar pequenas diferenças específicas do banco antes de executar.",
  },
  {
    question: "Preciso criar conta para usar o gerador?",
    answer: "Não. O fluxo foi desenhado para uso direto, rápido e sem barreiras antes do primeiro resultado.",
  },
  {
    question: "Esse gerador cria JOINs complexos?",
    answer: "Não nesta fase. O foco atual é produtividade em SELECTs simples com filtros, ordenação e limite.",
  },
  {
    question: "Posso copiar e editar a query depois?",
    answer: "Sim. O resultado é entregue em texto puro para você copiar, adaptar e testar normalmente no seu ambiente.",
  },
  {
    question: "O site funciona bem no celular?",
    answer: "Sim. Toda a interface foi construída com abordagem mobile-first para manter leitura, navegação e ação principal confortáveis em telas pequenas.",
  },
];

type ExampleItem = {
  title: string;
  summary: string;
  table: string;
  columns: string[];
  filters: Array<{ field: string; operator: "=" | "!=" | ">" | ">=" | "<" | "<=" | "LIKE"; value: string }>;
  orderBy: string;
  direction: "ASC" | "DESC";
  limit: string;
};

export const examples: ExampleItem[] = [
  {
    title: "Listar clientes ativos",
    summary: "Consulta simples com filtro por status e ordenação por nome.",
    table: "clientes",
    columns: ["id", "nome", "email", "status"],
    filters: [{ field: "status", operator: "=", value: "ativo" }],
    orderBy: "nome",
    direction: "ASC",
    limit: "25",
  },
  {
    title: "Produtos com preço acima de 100",
    summary: "Exemplo para catálogo, filtros numéricos e limitação de linhas.",
    table: "produtos",
    columns: ["id", "nome", "preco", "categoria"],
    filters: [{ field: "preco", operator: ">=", value: "100" }],
    orderBy: "preco",
    direction: "DESC",
    limit: "20",
  },
  {
    title: "Pedidos recentes",
    summary: "Uso comum para dashboards e revisão rápida de movimentação recente.",
    table: "pedidos",
    columns: ["id", "cliente_id", "total", "criado_em"],
    filters: [{ field: "status", operator: "=", value: "pago" }],
    orderBy: "criado_em",
    direction: "DESC",
    limit: "10",
  },
];
