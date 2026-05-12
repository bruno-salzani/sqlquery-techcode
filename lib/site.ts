const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://sqlquery.techcode.com.br";

export const siteConfig = {
  name: "SQL Query",
  shortName: "SQL Query",
  description:
    "Crie consultas SQL simples em segundos com um gerador rápido, intuitivo e pronto para copiar.",
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
  socialImage: "/images/brand/og-cover.svg",
  nav: [
    { href: "/sql-generator", label: "Gerador SQL" },
    { href: "/como-funciona", label: "Como funciona" },
    { href: "/exemplos", label: "Exemplos" },
    { href: "/faq", label: "FAQ" },
  ],
};

export const heroStats = [
  "Sem cadastro",
  "Pronto para copiar",
  "Mobile-first",
  "SEO e performance premium",
];

export const featureCards = [
  {
    title: "SQL limpo e legível",
    description: "Monte queries simples com estrutura clara para estudar, testar e acelerar tarefas repetitivas.",
  },
  {
    title: "Fluxo intuitivo",
    description: "Defina tabela, colunas, filtros, ordenação e limite sem ruído visual nem etapas desnecessárias.",
  },
  {
    title: "Copie em segundos",
    description: "Use exemplos prontos, gere o resultado instantaneamente e copie o SQL com um clique.",
  },
  {
    title: "Pronto para crescer",
    description: "A base já nasce otimizada para SEO técnico, conteúdo indexável e monetização futura.",
  },
];

export const steps = [
  {
    title: "Descreva a consulta",
    description: "Informe a tabela, escolha as colunas e comece com uma estrutura simples e previsível.",
  },
  {
    title: "Ajuste filtros e ordenação",
    description: "Adicione condições, direção de ordenação e limite de linhas conforme o objetivo da consulta.",
  },
  {
    title: "Copie e use",
    description: "Revise o SQL, leia a explicação em linguagem natural e copie o resultado imediatamente.",
  },
];

export const useCases = [
  "SELECT simples para tabelas de clientes, produtos e pedidos",
  "Filtros básicos com igualdade, comparação e busca parcial",
  "Ordenação por data, nome, preço ou outros campos comuns",
  "Limitação de linhas para testes, dashboards e estudos",
];

export const faqItems = [
  {
    question: "O SQL Query funciona para iniciantes?",
    answer:
      "Sim. A interface foi pensada para quem quer gerar consultas SQL simples sem lidar com sintaxe manual logo no início.",
  },
  {
    question: "Posso usar o resultado em MySQL ou PostgreSQL?",
    answer:
      "O foco é gerar SQL simples e legível. Para cenários avançados, o ideal é revisar pequenas diferenças específicas do seu banco.",
  },
  {
    question: "Preciso criar conta para usar o gerador?",
    answer:
      "Não. A ferramenta foi desenhada para acesso rápido, uso direto e menor atrito possível.",
  },
  {
    question: "Esse gerador cria JOINs complexos?",
    answer:
      "Nesta primeira versão, o foco é produtividade em consultas simples com filtros, ordenação e limite.",
  },
  {
    question: "Posso copiar e editar a query depois?",
    answer:
      "Sim. O resultado é entregue em texto puro para você copiar, adaptar e testar no seu ambiente normalmente.",
  },
  {
    question: "O site é otimizado para mobile?",
    answer:
      "Sim. Todo o layout foi construído com abordagem mobile-first para funcionar bem em telas pequenas e grandes.",
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

export const blogPosts = [
  {
    slug: "como-gerar-consultas-sql-simples-mais-rapido",
    title: "Como gerar consultas SQL simples mais rápido",
    description:
      "Entenda um fluxo prático para montar SELECTs com filtros e ordenação sem perder clareza.",
    publishedAt: "2026-05-11",
  },
  {
    slug: "erros-comuns-ao-escrever-select-manualmente",
    title: "Erros comuns ao escrever SELECT manualmente",
    description:
      "Veja pontos que atrapalham iniciantes e como reduzir retrabalho ao montar queries básicas.",
    publishedAt: "2026-05-11",
  },
] as const;
