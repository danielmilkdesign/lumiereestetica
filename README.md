# Lumière Haute Beauté & Esthétique ✨

Website oficial da clínica de estética avançada e boutique de alta beleza **Lumière**. Desenvolvido com padrão visual de luxo editorial, tipografia de alta costura, microinterações fluidas e sistema interativo completo de diagnóstico e agendamento.

---

## 🌟 Funcionalidades Principais

- **Hero Section Editorial:** Imersão visual com glassmorfismo, selos de validação clínica e CTAs estratégicos.
- **Quiz de Diagnóstico de Pele:** Quiz interativo em etapas para recomendar procedimentos dermatológicos personalizados baseados nas necessidades da pele do paciente.
- **Catálogo Interativo de Procedimentos:** Filtros dinâmicos por categoria (*Face*, *Laser*, *Beauty Tools*, *Body*), badges de destaque, preços formatados e durações de sessão.
- **Modal Clínico Detalhado:** Ficha completa de cada tratamento exibindo indicações clínicas, tecnologia utilizada, tempo de downtime e benefícios esperados.
- **Comparador Antes & Depois Interativo:** Slider visual em tempo real para visualização fidedigna dos resultados em rosto, equipamentos e corpo.
- **Calculadora de Spa Day & Pacotes:** Montagem personalizada de protocolos combinados com cálculo instantâneo e aplicação de benefício VIP de 10%.
- **Sacola de Procedimentos (Cart Drawer):** Gestão de tratamentos selecionados com resumo de valores e integração direta para agendamento.
- **Agendamento Online Integrado:** Formulário com seleção de procedimento, data, horário e direcionamento inteligente para WhatsApp da recepção.
- **Depoimentos & Avaliações:** Prova social qualificada com notas e relatos de pacientes.
- **FAQ Expansível:** Resolução das principais dúvidas sobre segurança, anestésicos e procedimentos.
- **Versão Standalone:** Landing page completa e independente disponível em `public/clinica-estetica-lumiere.html`.

---

## 🛠️ Tecnologias Utilizadas

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animações:** [Motion (Framer Motion)](https://motion.dev/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Tipografia:** Cormorant Garamond, Plus Jakarta Sans & Alex Brush via Google Fonts

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- `npm` ou `pnpm`

### Passos

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/danielmilkdesign/lumiereestetica.git
   cd lumiereestetica
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse a aplicação no navegador em `http://localhost:3000`.

4. **Gerar build de produção:**
   ```bash
   npm run build
   ```

5. **Visualizar build localmente:**
   ```bash
   npm run preview
   ```

---

## 📁 Estrutura do Projeto

```
lumiere/
├── public/                     # Assets estáticos, vídeos, favicons e versão standalone
│   ├── assets/images/          # Fotos de procedimentos e comparadores
│   ├── clinica-estetica-lumiere.html # Versão estática de página única
│   ├── favicon.svg             # Monograma L Lumière em vetor dourado
│   └── lumiere-hero-video.mp4  # Vídeo promocional de alta definição
├── src/
│   ├── assets/images/          # Imagens clínicas e avatares
│   ├── components/             # Componentes modulares da aplicação
│   │   ├── BeforeAfterComparator.tsx
│   │   ├── BookingSection.tsx
│   │   ├── CartDrawer.tsx
│   │   ├── CatalogSection.tsx
│   │   ├── CategoriesSection.tsx
│   │   ├── ClinicalModal.tsx
│   │   ├── DiagnosticQuiz.tsx
│   │   ├── FaqSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── SpaDayCalculator.tsx
│   │   └── TrustBar.tsx
│   ├── data/
│   │   └── treatments.ts       # Base de dados clínica e procedimentos
│   ├── App.tsx                 # Composição principal e gerenciamento de estado
│   ├── index.css               # Configurações globais e tokens CSS
│   └── main.tsx                # Ponto de entrada React
├── index.html                  # HTML base com meta tags SEO e Open Graph
├── package.json                # Dependências e scripts do projeto
├── tsconfig.json               # Configurações de tipagem TypeScript
└── vite.config.ts              # Configuração do Vite e Tailwind CSS
```

---

## 📄 Licença

Propriedade exclusiva de **Lumière Haute Beauté & Esthétique** e [Daniel Milk Design](https://github.com/danielmilkdesign). Todos os direitos reservados.
