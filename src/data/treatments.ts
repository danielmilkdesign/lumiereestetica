export interface TreatmentItem {
  id: string;
  name: string;
  category: 'face' | 'beauty tools' | 'body' | 'laser';
  tag: string;
  duration: string;
  durationMinutes: number;
  price: number;
  priceFormatted: string;
  description: string;
  clinicalDetails: {
    indications: string;
    howItWorks: string;
    downtime: string;
    benefits: string[];
  };
  image: string;
}

export const TREATMENTS_DATA: TreatmentItem[] = [
  {
    id: 'hydrafacial',
    name: 'Hydrafacial Glow & Infusão',
    category: 'face',
    tag: 'Glow Imediato',
    duration: '60 min',
    durationMinutes: 60,
    price: 450,
    priceFormatted: 'R$ 450',
    description: 'Limpeza profunda da derme, sucção indolor de impurezas e hidratação com ácido hialurônico ultrapuro para luminosidade espelhada instantânea.',
    clinicalDetails: {
      indications: 'Poros obstruídos, textura áspera, desidratação e falta de viço.',
      howItWorks: 'Tecnologia vortex patenteada com pontas espirais que esfoliam, extraem e infundem séruns de ácido hialurônico e antioxidantes em 3 etapas sucessivas.',
      downtime: 'Zero downtime — retorne imediatamente à rotina com a pele reluzente.',
      benefits: ['Desobstrução imediata dos poros', 'Hidratação profunda da barreira lipídica', 'Toque aveludado e brilho natural sem oleosidade']
    },
    image: '/src/assets/images/treatment_hydrafacial_luxury_1791237728473.jpg'
  },
  {
    id: 'lashlift',
    name: 'Lash Lift & Brow Lamination',
    category: 'beauty tools',
    tag: 'Olhar Natural',
    duration: '45 min',
    durationMinutes: 45,
    price: 220,
    priceFormatted: 'R$ 220',
    description: 'Curvatura duradoura dos cílios naturais e alinhamento das sobrancelhas com infusão de queratina pura e pigmento orgânico.',
    clinicalDetails: {
      indications: 'Cílios retos ou caídos, sobrancelhas rebeldes ou sem definição natural.',
      howItWorks: 'Amolecimento controlado da haste com ativos enriquecidos com queratina botânica, moldagem anatômica dos fios e tonalização hipoalergênica.',
      downtime: 'Evitar vapor e água nas primeiras 24 horas. Duração de 6 a 8 semanas.',
      benefits: ['Olhar expressivo sem necessidade de rímel', 'Alinhamento elegante das sobrancelhas', 'Fortalecimento da estrutura dos fios']
    },
    image: '/src/assets/images/treatment_eyelash_lift_1791237754216.jpg'
  },
  {
    id: 'lavieen',
    name: 'Laser Lavieen BB Glow',
    category: 'laser',
    tag: 'Laser Túlio Nobre',
    duration: '40 min',
    durationMinutes: 40,
    price: 650,
    priceFormatted: 'R$ 650',
    description: 'Laser fracionado não-ablativo de túlio (1927 nm) que fecha poros, uniformiza manchas e confere acabamento de maquiagem BB cream permanente.',
    clinicalDetails: {
      indications: 'Melasma pigmentar, poros abertos, linhas finas e cicatrizes superficiais.',
      howItWorks: 'Microfeixes de luz de túlio que criam microzonas térmicas na junção dermoepidérmica, acelerando a renovação celular e o colágeno.',
      downtime: 'Leve rubor e sensação de calor por 2 a 4 horas. Sem descamação agressiva.',
      benefits: ['Efeito pele de porcelana duradouro', 'Fechamento visível dos poros dilatados', 'Clareamento seguro de hiperpigmentações']
    },
    image: '/src/assets/images/treatment_lavieen_laser_1791237744802.jpg'
  },
  {
    id: 'facialouro',
    name: 'Facial Ouro 24k & Crioterapia',
    category: 'face',
    tag: 'Assinatura Lumière',
    duration: '75 min',
    durationMinutes: 75,
    price: 420,
    priceFormatted: 'R$ 420',
    description: 'Protocolo sensorial sublime com máscara de lâminas de ouro 24 quilates, drenagem lifting manual e esferas criogênicas descongestionantes.',
    clinicalDetails: {
      indications: 'Pele cansada, inchaço matinal, pré-eventos de gala e perda de viço.',
      howItWorks: 'Higienização com leite de rosas, esfoliação com pó de diamantes, aplicação de lâminas de ouro nobre antioxidante e massagem com esferas a -4°C.',
      downtime: 'Zero downtime — resultado de lifting óptico imediato.',
      benefits: ['Ação antioxidante e anti-inflamatória', 'Desinchaço periorbital notável', 'Estimulação microcirculatória profunda']
    },
    image: '/src/assets/images/treatment_hydrafacial_luxury_1791237728473.jpg'
  },
  {
    id: 'drenagem',
    name: 'Drenagem Linfática Miracle Touch',
    category: 'body',
    tag: 'Desintoxicação',
    duration: '50 min',
    durationMinutes: 50,
    price: 260,
    priceFormatted: 'R$ 260',
    description: 'Manobras manuais exclusivas que desobstruem gânglios linfáticos, atenuam a retenção de líquidos e esculpem a silhueta corporal.',
    clinicalDetails: {
      indications: 'Retenção hídrica, cansaço nas pernas, inchaço abdominal e pós-operatório.',
      howItWorks: 'Pressões rítmicas suaves orientadas aos principais coletores linfáticos, auxiliando a filtração natural e a redução do edema tecidual.',
      downtime: 'Nenhum. Recomenda-se ingestão hídrica abundante após a sessão.',
      benefits: ['Sensação de leveza corporal imediata', 'Definição do contorno da cintura e pernas', 'Estímulo ao sistema imunológico']
    },
    image: '/src/assets/images/treatment_spa_retreat_1791237763167.jpg'
  },
  {
    id: 'microcorrentes',
    name: 'Gua Sha Escultural & Microcorrentes',
    category: 'beauty tools',
    tag: 'Tonificação Facial',
    duration: '50 min',
    durationMinutes: 50,
    price: 290,
    priceFormatted: 'R$ 290',
    description: 'Trabalho fascial com lâminas de quartzo rosa autêntico combinado a microcorrentes elétricas para tonificar os músculos da face.',
    clinicalDetails: {
      indications: 'Flacidez muscular facial inicial, perda do contorno mandibular e linhas ao redor dos lábios.',
      howItWorks: 'As microcorrentes imitam os impulsos elétricos celulares do corpo para estimular a síntese de ATP, enquanto o Gua Sha esculpe a fáscia.',
      downtime: 'Zero downtime.',
      benefits: ['Contorno do queixo e mandíbula mais nítido', 'Alívio da tensão muscular e bruxismo', 'Drenagem do excesso de líquidos faciais']
    },
    image: '/src/assets/images/treatment_eyelash_lift_1791237754216.jpg'
  }
];

export interface BeforeAfterCase {
  id: string;
  title: string;
  patient: string;
  badge: string;
  description: string;
  beforeImg: string;
  afterImg: string;
}

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'case-1',
    title: 'Rosto: Hydrafacial Deep Glow',
    patient: 'Mariana S. · 32 anos',
    badge: 'Textura & Viço',
    description: 'Desobstrução profunda dos poros na zona T e recuperação imediata da barreira de hidratação lipídica com luminosidade uniforme.',
    beforeImg: '/src/assets/images/case_rosto_antes.jpg',
    afterImg: '/src/assets/images/case_rosto_depois.jpg'
  },
  {
    id: 'case-2',
    title: 'Ferramentas: Gua Sha & Microcorrentes',
    patient: 'Camila R. · 34 anos',
    badge: 'Lifting & Contorno',
    description: 'Drenagem fascial profunda, atenuação imediata de edema e refinamento do contorno da mandíbula e maçãs do rosto.',
    beforeImg: '/src/assets/images/case_tools_antes.jpg',
    afterImg: '/src/assets/images/case_tools_depois.jpg'
  },
  {
    id: 'case-3',
    title: 'Corpo: Drenagem Linfática & Modelagem',
    patient: 'Beatriz L. · 28 anos',
    badge: 'Definição Corporal',
    description: 'Eliminação da retenção hídrica, redução de medidas na linha da cintura e alinhamento do tônus corporal.',
    beforeImg: '/src/assets/images/case_corpo_antes.jpg',
    afterImg: '/src/assets/images/case_corpo_depois.jpg'
  }
];
