import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';

const ptBR = {
  "header_title": "Direito Para Você",
  "nav_areas": "Áreas de Atuação",
  "nav_contact": "Contato",
  "nav_cta": "Fale Conosco",
  "hero_title": "Assessoria Jurídica de Excelência",
  "hero_subtitle": "Soluções estratégicas em Direito Civil, Administrativo e Empresarial para proteger e impulsionar o seu negócio.",
  "hero_cta": "Entre em Contato",
  "areas_title": "Nossas Especialidades",
  "areas_subtitle": "Focamos nossa expertise em Direito Civil e Administrativo para oferecer soluções eficazes. Informamos que não atuamos nas áreas Penal e Tributária.",
  "area_civil_title": "Direito Civil",
  "area_civil_desc": "Atuação em diversas áreas do Direito Civil. Cobrimos uma vasta gama de setores para atender às suas necessidades específicas. Veja abaixo os setores que atendemos.",
  "area_admin_title": "Direito Administrativo",
  "area_admin_desc": "Assessoria em licitações e contratos públicos, defesa em processos administrativos, e representação perante órgãos da administração pública.",
  "area_business_title": "Direito Empresarial",
  "area_business_desc": "Assessoria para empresas, incluindo elaboração e análise de contratos, garantindo segurança e conformidade para os seus negócios.",
  "industries_title": "Setores Atendidos",
  "industries_list": [
    "Aéreo", "Agropecuário", "Água e Saneamento", "Alimentício", "Automotivo", "Bancário", "Bens de Consumo", "Concessões", "Construção", "Construção/Infraestrutura", "Cosméticos", "E-Commerce", "Educação", "Eletroeletrônicos", "Embalagens", "Energia", "Entretenimento e Cinema", "Farmacêutico", "Governo", "Imobiliário", "Indústria", "Linha Branca", "Logística", "Máquinas", "Materiais de Construção e Decoração", "Meios de Pagamento", "Mercado Financeiro", "Moda", "Prestação de Serviço", "Publicidade", "Químico", "Saúde", "Seguros", "Serviços", "Siderurgia e Metalurgia", "Tecnologia", "Telecomunicações", "Telefonia", "Têxil", "Transporte", "Turismo", "Varejo"
  ],
  "contact_title": "Pronto para Começar?",
  "contact_subtitle": "Entre em contato conosco hoje mesmo para agendar uma consulta e descobrir como podemos ajudar seu negócio a prosperar com segurança jurídica.",
  "contact_whatsapp": "Fale no WhatsApp",
  "contact_phone": "(11) 95392-0483",
  "contact_email": "Enviar E-mail",
  "whatsapp_greeting": "Olá! Gostaria de mais informações sobre seus serviços jurídicos.",
  "video_title": "Gere um Vídeo com IA",
  "video_subtitle": "Faça o upload de uma imagem e descreva o vídeo que você deseja criar. Nossa IA dará vida à sua visão.",
  "video_upload_label": "Carregar Imagem",
  "video_prompt_placeholder": "Ex: Uma animação desta estátua, com a balança da justiça balançando suavemente.",
  "video_aspect_ratio_label": "Proporção",
  "video_aspect_ratio_landscape": "Paisagem (16:9)",
  "video_aspect_ratio_portrait": "Retrato (9:16)",
  "video_generate_button": "Gerar Vídeo",
  "video_generating_status": "Gerando seu vídeo...",
  "video_polling_status": "Verificando o progresso...",
  "video_finalizing_status": "Finalizando os detalhes...",
  "video_error": "Ocorreu um erro ao gerar o vídeo. Tente novamente.",
  "video_select_key_prompt": "Para usar este recurso, por favor, selecione sua chave de API do Google AI Studio. A geração de vídeo pode incorrer em custos.",
  "video_select_key_button": "Selecionar Chave de API",
  "video_billing_link": "Saiba mais sobre preços.",
  "footer_copyright": "© {year} Direito Para Você. Todos os direitos reservados.",
  "footer_author": "Advocacia por Paulo | Contato: paulo@direitoparavoce.com"
};

const enUS: typeof ptBR = {
  "header_title": "Law For You",
  "nav_areas": "Practice Areas",
  "nav_contact": "Contact",
  "nav_cta": "Contact Us",
  "hero_title": "Legal Consultancy of Excellence",
  "hero_subtitle": "Strategic solutions in Civil, Administrative, and Business Law to protect and boost your business.",
  "hero_cta": "Get in Touch",
  "areas_title": "Our Specialties",
  "areas_subtitle": "We focus our expertise on Civil and Administrative Law to provide effective solutions. Please note that we do not practice in Criminal or Tax Law.",
  "area_civil_title": "Civil Law",
  "area_civil_desc": "Practice in various areas of Civil Law. We cover a wide range of industries to meet your specific needs. See the industries we serve below.",
  "area_admin_title": "Administrative Law",
  "area_admin_desc": "Consulting on public bids and contracts, defense in administrative proceedings, and representation before public administration bodies.",
  "area_business_title": "Business Law",
  "area_business_desc": "Advisory for companies, including drafting and analysis of contracts, ensuring security and compliance for your business.",
  "industries_title": "Industries We Serve",
  "industries_list": [
    "Aviation", "Agribusiness", "Water and Sanitation", "Food", "Automotive", "Banking", "Consumer Goods", "Concessions", "Construction", "Construction/Infrastructure", "Cosmetics", "E-Commerce", "Education", "Electronics", "Packaging", "Energy", "Entertainment and Cinema", "Pharmaceutical", "Armed Forces", "Government", "Real Estate", "Industry", "White Goods", "Logistics", "Machinery", "Construction and Decoration Materials", "Payment Methods", "Financial Market", "Fashion", "Service Provision", "Advertising", "Chemical", "Health", "Insurance", "Services", "Steel and Metallurgy", "Technology", "Telecommunications", "Telephony", "Textile", "Transportation", "Tourism", "Retail"
  ],
  "contact_title": "Ready to Start?",
  "contact_subtitle": "Contact us today to schedule a consultation and find out how we can help your business thrive with legal certainty.",
  "contact_whatsapp": "Chat on WhatsApp",
  "contact_phone": "+55 (11) 95392-0483",
  "contact_email": "Send Email",
  "whatsapp_greeting": "Hello! I would like more information about your legal services.",
  "video_title": "Generate a Video with AI",
  "video_subtitle": "Upload an image and describe the video you want to create. Our AI will bring your vision to life.",
  "video_upload_label": "Upload Image",
  "video_prompt_placeholder": "Ex: An animation of this statue, with the scales of justice gently swaying.",
  "video_aspect_ratio_label": "Aspect Ratio",
  "video_aspect_ratio_landscape": "Landscape (16:9)",
  "video_aspect_ratio_portrait": "Portrait (9:16)",
  "video_generate_button": "Generate Video",
  "video_generating_status": "Generating your video...",
  "video_polling_status": "Checking progress...",
  "video_finalizing_status": "Finalizing the details...",
  "video_error": "An error occurred while generating the video. Please try again.",
  "video_select_key_prompt": "To use this feature, please select your Google AI Studio API key. Video generation may incur costs.",
  "video_select_key_button": "Select API Key",
  "video_billing_link": "Learn more about billing.",
  "footer_copyright": "© {year} Law For You. All rights reserved.",
  "footer_author": "Advocacy by Paulo | Contact: paulo@direitoparavoce.com"
};

const translations = {
  'pt-BR': ptBR,
  'en-US': enUS,
};

export type Locale = keyof typeof translations;

export const getInitialLocale = (): Locale => {
  if (typeof window !== 'undefined') {
    const browserLang = navigator.language;
    if (browserLang.startsWith('en')) {
      return 'en-US';
    }
    if (browserLang.startsWith('pt')) {
      return 'pt-BR';
    }
  }
  return 'pt-BR'; // default locale
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: keyof typeof ptBR, replacements?: { [key: string]: string | number }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(getInitialLocale());

  const t = useCallback((key: keyof (typeof ptBR | typeof enUS), replacements?: { [key: string]: string | number }) => {
    let translation: any = (translations[locale] && translations[locale][key]) || translations['pt-BR'][key] || key;
    
    if (replacements) {
        Object.keys(replacements).forEach(placeholder => {
            if(typeof translation === 'string') {
              translation = translation.replace(`{${placeholder}}`, String(replacements[placeholder]));
            }
        });
    }

    return translation;
  }, [locale]);

  // FIX: Replaced JSX with React.createElement to avoid parsing errors in a .ts file.
  // This resolves the syntax errors in this file and the cascading type errors in index.tsx.
  return React.createElement(LanguageContext.Provider, { value: { locale, setLocale, t } }, children);
};

export const useTranslations = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslations must be used within a LanguageProvider');
  }
  return context;
};
