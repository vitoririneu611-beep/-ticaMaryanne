/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * CONFIGURAÇÃO CENTRAL DA ÓTICA E RELOJOARIA MARYANNE
 * Cafelândia - Paraná
 */

export const STORE_CONFIG = {
  name: 'Ótica e Relojoaria Maryanne',
  shortName: 'Maryanne',
  slogan: 'Você conhece, você confia.',
  secondarySlogan: 'Seu estilo, sua visão, nossa confiança.',
  city: 'Cafelândia',
  state: 'Paraná',
  foundedYear: '1997', // Começou em setembro de 1997
  physicalStoreYear: '1999', // Loja física em Cafelândia em 1999

  address: {
    street: 'Avenida Governador Moisés Lupion, 303, Sala 1',
    neighborhood: 'Centro',
    city: 'Cafelândia',
    state: 'PR',
    zipCode: '85415-000',
    fullFormatted: 'Av. Gov. Moisés Lupion, 303, Sala 1 - Centro, Cafelândia - PR, 85415-000',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Avenida+Governador+Moisés+Lupion,+303,+Centro,+Cafelândia+-+PR',
    googleMapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.397354924844!2d-53.32296492372765!3d-24.91851221187429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f386927976e109%3A0xe72688f40bf2b67f!2sAv.%20Gov.%20Mois%C3%A9s%20Lupi%C3%B3n%2C%20303%20-%20Centro%2C%20Cafel%C3%A2ndia%20-%20PR%2C%2085415-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr',
  },

  contact: {
    phoneDisplay: '(45) 3241-1966',
    phoneRaw: '4532411966',
    email: 'oticamaryanne@brturbo.com.br',
    whatsappRaw: '554532411966',
    whatsappDisplay: '(45) 3241-1966',
  },

  businessHours: {
    weekdays: '08h às 18h',
    saturday: '08h às 12h',
    sunday: 'Fechado',
    note: 'Atendimento comercial presencial no Centro de Cafelândia.',
  },

  images: {
    logoOriginal: '/public/assets/aistudio/46dd94e2-7b34-4dae-b2a8-d3018f23dc39_b4657efc.jpg',
    logoCrop: '/public/assets/aistudio/2c1fb1e2-9fe6-415a-9bee-c5c6ecbdfa09_fbdd96ff.jpg',
    // Fotos reais do local físico em Cafelândia
    realFacade: '/public/assets/aistudio/OTICAMARYANNEFOTO3_eb49f0e2.webp',
    realInteriorMain: '/public/assets/aistudio/OTICAMARYANNEFOTO1_914681c7.webp',
    realWatchJewelry: '/public/assets/aistudio/OTICAMARYANNEFOTO2_01b66176.webp',
    // Imagens de catálogo e estúdio
    heroEyewear: '/src/assets/images/hero_eyewear_frames_1792683917663.jpg',
    prescriptionFrames: '/src/assets/images/prescription_frames_1792683933253.jpg',
    sunglasses: '/src/assets/images/sunglasses_models_1792683945719.jpg',
    lenses: '/src/assets/images/ophthalmic_lenses_1792683946228.jpg',
  },
};

/**
 * Cria a URL direta do WhatsApp com mensagem codificada
 */
export function createWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${STORE_CONFIG.contact.whatsappRaw}?text=${encoded}`;
}

export interface CatalogItem {
  id: string;
  category: 'otica' | 'relojoaria-joias' | 'reparos';
  title: string;
  badge: string;
  description: string;
  features: string[];
  image: string;
  whatsappMessage: string;
  ctaText: string;
}

export const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: 'armacoes-grau',
    category: 'otica',
    title: 'Armações e Óculos de Grau',
    badge: 'Óptica & Conforto',
    description:
      'Variedade em armações femininas, masculinas, clássicas e modernas em acetato, metal e titânio para valorizar o seu rosto com ajuste anatômico perfeito.',
    features: ['Acetato nobre e metais leves', 'Ajuste e alinhamento facial', 'Garantia de conforto'],
    image: STORE_CONFIG.images.prescriptionFrames,
    whatsappMessage:
      'Olá! Gostaria de informações sobre armações e óculos de grau na Ótica e Relojoaria Maryanne.',
    ctaText: 'Consultar Armações no WhatsApp',
  },
  {
    id: 'oculos-solares',
    category: 'otica',
    title: 'Óculos Solares',
    badge: 'Proteção UV & Estilo',
    description:
      'Proteção completa contra os raios UV com lentes polarizadas e espelhadas, unindo alta performance visual e as principais tendências de moda.',
    features: ['100% de proteção UV', 'Lentes polarizadas', 'Modelos masculinos e femininos'],
    image: STORE_CONFIG.images.sunglasses,
    whatsappMessage:
      'Olá! Gostaria de conhecer os modelos de óculos solares disponíveis na Ótica Maryanne.',
    ctaText: 'Ver Óculos de Sol no WhatsApp',
  },
  {
    id: 'linha-infantil',
    category: 'otica',
    title: 'Linha Infantil (Grau e Solar)',
    badge: 'Kids & Juvenil',
    description:
      'Armações flexíveis, resistentes a quedas e confortáveis, desenvolvidas especialmente para crianças e adolescentes com segurança total.',
    features: ['Materiais flexíveis e duráveis', 'Encaixe nasal suave', 'Cores alegres e modernas'],
    image: STORE_CONFIG.images.heroEyewear,
    whatsappMessage:
      'Olá! Gostaria de ver opções da linha de óculos infantis (grau e sol) na Ótica Maryanne.',
    ctaText: 'Consultar Linha Infantil no WhatsApp',
  },
  {
    id: 'lentes-oftalmicas',
    category: 'otica',
    title: 'Lentes Oftálmicas com Receita',
    badge: 'Precisão Visual',
    description:
      'Lentes multifocais digitais, visão simples, filtros de luz azul para telas e tratamentos antirreflexo de alta precisão para a sua receita.',
    features: ['Multifocais digitais avançados', 'Filtro de luz azul para telas', 'Tratamento antirreflexo'],
    image: STORE_CONFIG.images.lenses,
    whatsappMessage:
      'Olá! Tenho uma receita médica e gostaria de fazer um orçamento de lentes oftálmicas na Maryanne.',
    ctaText: 'Orçar Lentes no WhatsApp',
  },
  {
    id: 'relogios-relojoaria',
    category: 'relojoaria-joias',
    title: 'Relógios e Relojoaria',
    badge: 'Relojoaria Oficial',
    description:
      'Grande vitrine de relógios de pulso masculinos e femininos, clássicos e esportivos de marcas consagradas, com garantia e assistência.',
    features: ['Vitrine completa de relógios', 'Marcas nacionais e importadas', 'Garantia e assistência técnica'],
    image: STORE_CONFIG.images.realWatchJewelry, // Foto real da área de relógios!
    whatsappMessage:
      'Olá! Gostaria de ver os modelos de relógios disponíveis na Relojoaria Maryanne.',
    ctaText: 'Ver Relógios no WhatsApp',
  },
  {
    id: 'aliancas',
    category: 'relojoaria-joias',
    title: 'Alianças de Compromisso, Noivado e Casamento',
    badge: 'Momentos Especiais',
    description:
      'Mostruário com caixas aveludadas de alianças anatômicas, diamantadas e trabalhadas em ouro e prata para eternizar o seu momento.',
    features: ['Alianças de compromisso, noivado e casamento', 'Acabamento anatômico confortável', 'Gravações personalizadas'],
    image: STORE_CONFIG.images.realWatchJewelry, // Foto real do balcão de alianças!
    whatsappMessage:
      'Olá! Gostaria de conhecer as opções de alianças (compromisso/casamento) na Maryanne.',
    ctaText: 'Consultar Alianças no WhatsApp',
  },
  {
    id: 'folheados-pratas-colares',
    category: 'relojoaria-joias',
    title: 'Folheados, Pratas 925 e Colares',
    badge: 'Joias & Semijoias',
    description:
      'Peças selecionadas em prata legítima 925, folheados de alta durabilidade, correntes, gargantilhas, brincos e colares com brilho impecável.',
    features: ['Prata 925 legítima', 'Folheados com banho nobre', 'Colares, correntes e brincos'],
    image: STORE_CONFIG.images.realInteriorMain, // Salão com vitrines iluminadas!
    whatsappMessage:
      'Olá! Gostaria de ver opções de folheados, pratas 925 e colares na Ótica e Relojoaria Maryanne.',
    ctaText: 'Ver Folheados e Pratas no WhatsApp',
  },
  {
    id: 'servicos-reparos',
    category: 'reparos',
    title: 'Serviços de Reparos e Manutenção',
    badge: 'Assistência Especializada',
    description:
      'Conserto, alinhamento e soldas de armações, troca de parafusos e plaquetas. Na relojoaria: troca de baterias/pilhas, ajustes de pulseiras e revisão.',
    features: ['Troca de pilhas e baterias de relógios', 'Ajuste de pulseiras e alinhamento de óculos', 'Soldas e reparos gerais'],
    image: STORE_CONFIG.images.realFacade, // Fachada com o telefone visível!
    whatsappMessage:
      'Olá! Preciso de um serviço de reparo ou conserto (em óculos ou relógio) na Ótica e Relojoaria Maryanne.',
    ctaText: 'Solicitar Reparo no WhatsApp',
  },
];

export const STORE_GALLERY = [
  {
    id: 'facade',
    title: 'Fachada Oficial em Cafelândia',
    subtitle: 'Av. Governador Moisés Lupion, 303 — Centro',
    badge: 'Localização Privilegiada',
    image: STORE_CONFIG.images.realFacade,
    description:
      'Moderna fachada de esquina com painéis imponentes, letreiro iluminado da Ótica e Relojoaria Maryanne e vitrines panorâmicas.',
  },
  {
    id: 'interior-main',
    title: 'Salão de Atendimento e Óptica',
    subtitle: 'Ambiente climatizado, moderno e acolhedor',
    badge: 'Consultoria Especializada',
    image: STORE_CONFIG.images.realInteriorMain,
    description:
      'Espaço amplo com mesas de atendimento personalizado, parede viva verde, iluminação planejada e mostruários completos de armações e óculos solares.',
  },
  {
    id: 'watch-jewelry',
    title: 'Espaço de Relojoaria, Alianças e Joias',
    subtitle: 'Vitrines iluminadas e mostruário exclusivo',
    badge: 'Relojoaria & Alianças',
    image: STORE_CONFIG.images.realWatchJewelry,
    description:
      'Setor exclusivo com mostruários de relógios masculinos e femininos, relógios de parede decorativos e balcão com alianças de noivado e casamento, pratas 925 e folheados.',
  },
];

export const DIFFERENTIALS = [
  {
    title: 'Tradição em Ótica e Relojoaria',
    description:
      'Desde 1997 atuando com seriedade, sendo uma das referências mais tradicionais de Cafelândia.',
    icon: 'Award',
  },
  {
    title: 'Vendas e Serviços de Reparos',
    description:
      'Além de produtos completos, cuidamos da manutenção e reparo dos seus óculos, relógios e joias.',
    icon: 'Wrench',
  },
  {
    title: 'Atendimento Próximo e Humanizado',
    description:
      'Escuta atenta e respeito ao seu tempo, ajudando a escolher a opção que melhor atende à sua necessidade.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Joias, Alianças, Pratas e Folheados',
    description:
      'Seleção completa para presentear e celebrar os momentos mais especiais da sua vida.',
    icon: 'Sparkles',
  },
  {
    title: 'Precisão e Cuidado Técnico',
    description:
      'Rigor no ajuste anatômico das armações, exatidão na montagem de lentes e manutenção de relógios.',
    icon: 'ShieldCheck',
  },
];
