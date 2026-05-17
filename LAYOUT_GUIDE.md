# Novo Layout Profissional

## Componentes Principais

### 1. **PageWrapper** (`components/layout/page-wrapper.tsx`)
Componente wrapper para páginas com layout principal + sidebar de ads.
- Usa grid layout (9 colunas para conteúdo, 3 para sidebar)
- Sticky sidebar no desktop
- Ads na sidebar com mínimo de altura para exibição adequada

### 2. **PageLayout** (`components/layout/page-layout.tsx`)
Wrapper semântico para páginas de conteúdo.
- Suporta título, descrição e badge
- Integrado com PageWrapper
- Espaçamento profissional

### 3. **SectionAds** (`components/layout/section-ads.tsx`)
Componente para inserir ads entre seções.
- Layout single ou double
- Espaçamento consistente

### 4. **Container Melhorado** (`components/layout/container.tsx`)
Container com múltiplas opções de max-width.
- `sm`: max-w-2xl
- `md`: max-w-4xl
- `lg`: max-w-6xl (padrão)
- `xl`: max-w-7xl
- `2xl`: max-w-7xl

### 5. **SiteHeader Melhorado** 
- Gradient background profissional
- Logo com gradient azul
- Melhor espaçamento e tipografia
- Navegação mais refinada

### 6. **SiteFooter Expandido**
- 4 seções de links (Brand, Produto, Recursos, Legal)
- Informações de copyright
- Links sociais
- Design profissional com background gradient

## CSS Adicionado

No `globals.css`:
- Espaçamento de seções (`section` classes)
- Classes auxiliares (`.content-section`, `.ads-section`, `.main-with-sidebar`)
- Styling de artigos e conteúdo
- Transições suaves

## Slots de AdSense

### Página Inicial
- **Sidebar Top**: 600px (leaderboard ou skyscraper)
- **Sidebar Bottom**: 400px (complementar)

### Outras Páginas
Configure os arrays `sidebarAds` com:
```typescript
const sidebarAds = [
  { slot: "SEU_SLOT_ID", label: "Top Ad" },
  { slot: "SEU_OUTRO_SLOT", label: "Bottom Ad" },
];
```

## Como Usar

### Em Nova Página
```tsx
import { PageLayout } from "@/components/layout/page-layout";

export default function MeuConteudo() {
  const sidebarAds = [
    { slot: "123456", label: "Ad 1" },
    { slot: "789012", label: "Ad 2" },
  ];

  return (
    <PageLayout
      title="Título da Página"
      description="Descrição..."
      badge="Badge opcional"
      sidebarAds={sidebarAds}
    >
      <div>Seu conteúdo aqui</div>
    </PageLayout>
  );
}
```

### Em Seções de Homepage
```tsx
import { PageWrapper } from "@/components/layout/page-wrapper";

return (
  <PageWrapper sidebarAds={sidebarAds}>
    <Hero />
    <Benefits />
    {/* ... */}
  </PageWrapper>
);
```

## Breakpoints
- Mobile: < 640px (sem sidebar)
- Tablet: 640px - 1024px (sem sidebar)
- Desktop: > 1024px (com sidebar)

## Próximos Passos
1. Substituir IDs de slot de AdSense pelos seus IDs reais
2. Testar renderização em diferentes breakpoints
3. Otimizar imagens e performance
4. Adicionar analytics
