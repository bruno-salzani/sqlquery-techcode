# SQL Query

Gerador de consultas SQL simples com foco em velocidade, UX limpa, SEO técnico e estrutura pronta para monetização com Google AdSense.

## Stack
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Vitest + Testing Library
- Playwright

## Requisitos
- Node.js 20+
- npm 10+

## Instalação
```bash
npm install
```

## Desenvolvimento
```bash
npm run dev
```

## Qualidade
```bash
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
```

## Variáveis de ambiente
Copie `.env.example` e ajuste os valores conforme o ambiente.

Variáveis principais:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_ADSENSE_ENABLED`
- `NEXT_PUBLIC_ADSENSE_CLIENT`
- `NEXT_PUBLIC_ADSENSE_SLOT_BANNER`
- `NEXT_PUBLIC_ADSENSE_SLOT_SQUARE`

## Escopo funcional atual
O projeto gera apenas consultas `SELECT` simples com:
- tabela
- colunas
- filtros básicos
- ordenação
- limite

Não há backend, autenticação, CRUD, upload, banco de dados ou persistência de dados.

## Scripts
- `npm run dev`
- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run test:coverage`
- `npm run test:e2e`
- `npm run test:smoke`
- `npm run build`
- `npm run ci`

## Publicação
Base canônica atual:
- `https://sqlquery.techcodecompany.com`

## Segurança
Consulte [SECURITY.md](SECURITY.md).

## Licença
Consulte [LICENSE](LICENSE).
