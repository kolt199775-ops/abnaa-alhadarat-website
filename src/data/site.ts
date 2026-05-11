import { Building2, Cpu, Factory, Globe2, Hotel, Landmark, LucideIcon, Network, ShipWheel, Truck } from "lucide-react";

import { Locale } from "@/lib/i18n";

type LocalizedSector = {
  title: string;
  eyebrow: string;
  summary: string;
  details: string[];
};

export type Sector = {
  slug: string;
  icon: LucideIcon;
  en: LocalizedSector;
  ar: LocalizedSector;
};

type SiteCopy = {
  company: string;
  companyAr: string;
  business: string;
  tagline: string;
  ctaExplore: string;
  ctaContact: string;
  languageLabel: string;
  intro: string;
  aboutTitle: string;
  aboutText: string;
  industrialTitle: string;
  industrialText: string;
  logisticsTitle: string;
  logisticsText: string;
  ceoTitle: string;
  ceoName: string;
  ceoMessage: string;
  contactTitle: string;
  contactText: string;
  form: { name: string; email: string; phone: string; subject: string; message: string; send: string };
  footerText: string;
  pageTitles: Record<string, string>;
};

export const contact = {
  hq: "Baghdad, Zaha Hadid Street, Iraq",
  hqAr: "بغداد، شارع زها حديد، العراق",
  email: "info@abnaa-alhadarat.com",
  phone: "+964 7838866225",
  whatsapp: "https://wa.me/9647838866225"
};

export const navItems = {
  en: [
    { label: "Home", href: "/en" },
    { label: "About Us", href: "/en/about-us" },
    { label: "Sectors", href: "/en/sectors" },
    { label: "Projects", href: "/en/projects" },
    { label: "Investment", href: "/en/investment-industrial-cities" },
    { label: "Contact", href: "/en/contact-us" }
  ],
  ar: [
    { label: "الرئيسية", href: "/ar" },
    { label: "من نحن", href: "/ar/about-us" },
    { label: "القطاعات", href: "/ar/sectors" },
    { label: "المشاريع", href: "/ar/projects" },
    { label: "الاستثمار", href: "/ar/investment-industrial-cities" },
    { label: "اتصل بنا", href: "/ar/contact-us" }
  ]
};

export const sectors: Sector[] = [
  {
    slug: "investment-industrial-cities",
    icon: Landmark,
    en: { title: "Investment & Industrial Cities", eyebrow: "Industrial platforms", summary: "Planning, investing in, and managing modern industrial cities that connect land, utilities, tenants, and long-term growth.", details: ["Industrial city master planning and development programs", "Tenant attraction, operating models, and investor relations", "Utility-ready zones for manufacturing, storage, and light industry"] },
    ar: { title: "الاستثمار والمدن الصناعية", eyebrow: "منصات صناعية", summary: "تخطيط واستثمار وإدارة مدن صناعية حديثة تربط الأراضي والخدمات والمستثمرين بفرص نمو طويلة الأمد.", details: ["تطوير المخططات الرئيسية وبرامج المدن الصناعية", "استقطاب المستثمرين ونماذج التشغيل وإدارة العلاقات", "مناطق مجهزة للصناعة والخزن والأنشطة الإنتاجية"] }
  },
  {
    slug: "logistics",
    icon: Truck,
    en: { title: "Logistics & Supply Chain", eyebrow: "Connected movement", summary: "Integrated logistics, warehousing, trading support, and supply chain services for strategic commercial operations.", details: ["Fleet, warehousing, procurement, and last-mile coordination", "Custom supply chain designs for industrial and trading clients", "Operational visibility across import, distribution, and storage"] },
    ar: { title: "اللوجستيات وسلاسل الإمداد", eyebrow: "حركة مترابطة", summary: "حلول متكاملة للنقل والخزن والدعم التجاري وسلاسل الإمداد للعمليات التجارية والصناعية الاستراتيجية.", details: ["إدارة الأساطيل والمخازن والمشتريات والتوزيع", "تصميم سلاسل إمداد مخصصة للعملاء الصناعيين والتجاريين", "رؤية تشغيلية للاستيراد والتوزيع والخزن"] }
  },
  {
    slug: "hotels-hospitality",
    icon: Hotel,
    en: { title: "Hotels & Hospitality", eyebrow: "Destination value", summary: "Development and investment in hospitality assets that elevate business travel, tourism, and mixed-use districts.", details: ["Hotel development concepts and investment partnerships", "Hospitality facilities aligned with business and tourism demand", "Mixed-use destination planning with premium guest experiences"] },
    ar: { title: "الفنادق والضيافة", eyebrow: "قيمة الوجهات", summary: "تطوير واستثمار أصول الضيافة التي تدعم سفر الأعمال والسياحة والمناطق متعددة الاستخدامات.", details: ["مفاهيم تطوير الفنادق وشراكات الاستثمار", "مرافق ضيافة متوافقة مع طلب الأعمال والسياحة", "تخطيط وجهات متعددة الاستخدامات بتجربة ضيافة راقية"] }
  },
  {
    slug: "it-solutions",
    icon: Cpu,
    en: { title: "IT Solutions", eyebrow: "Smart infrastructure", summary: "Digital systems, operational platforms, and technology services that make assets smarter, faster, and easier to manage.", details: ["ERP, asset management, and workflow enablement", "Smart city, access, monitoring, and data systems", "Technology advisory for industrial and logistics operations"] },
    ar: { title: "حلول تقنية المعلومات", eyebrow: "بنية ذكية", summary: "أنظمة رقمية ومنصات تشغيل وخدمات تقنية تجعل الأصول أكثر ذكاء وسرعة وسهولة في الإدارة.", details: ["أنظمة تخطيط الموارد وإدارة الأصول وسير العمل", "حلول المدن الذكية والمراقبة والبيانات", "استشارات تقنية للعمليات الصناعية واللوجستية"] }
  },
  {
    slug: "industrial-projects",
    icon: Factory,
    en: { title: "Industrial Projects", eyebrow: "Production capacity", summary: "Industrial project development from concept to delivery, supporting manufacturing, utilities, and strategic facilities.", details: ["Feasibility, partner coordination, and development management", "Manufacturing, utility, and service facility planning", "Project controls that protect schedule, budget, and quality"] },
    ar: { title: "المشاريع الصناعية", eyebrow: "قدرات إنتاجية", summary: "تطوير المشاريع الصناعية من الفكرة إلى التسليم لدعم التصنيع والخدمات والمرافق الاستراتيجية.", details: ["دراسات الجدوى والتنسيق مع الشركاء وإدارة التطوير", "تخطيط منشآت التصنيع والخدمات والمرافق", "ضوابط مشاريع لحماية الجدول والكلفة والجودة"] }
  },
  {
    slug: "general-trading",
    icon: Globe2,
    en: { title: "General Trading", eyebrow: "Market access", summary: "Commercial sourcing, market access, and trading capabilities across materials, equipment, and strategic commodities.", details: ["Sourcing and procurement for industrial and infrastructure needs", "Supplier relationships across regional and international markets", "Trade coordination from quotation to delivery"] },
    ar: { title: "التجارة العامة", eyebrow: "وصول للأسواق", summary: "قدرات في التوريد والوصول للأسواق والتجارة في المواد والمعدات والسلع الاستراتيجية.", details: ["تجهيز وتوريد للاحتياجات الصناعية والبنى التحتية", "علاقات مورّدين في الأسواق الإقليمية والدولية", "تنسيق تجاري من التسعير حتى التسليم"] }
  },
  {
    slug: "contracting-infrastructure",
    icon: Building2,
    en: { title: "Contracting & Infrastructure", eyebrow: "Foundations that last", summary: "General contracting and infrastructure delivery for roads, utilities, commercial facilities, and enabling works.", details: ["Civil, infrastructure, and enabling works coordination", "Commercial and industrial facilities delivery", "Quality-led execution with disciplined project governance"] },
    ar: { title: "المقاولات والبنى التحتية", eyebrow: "أسس مستدامة", summary: "تنفيذ المقاولات العامة والبنى التحتية للطرق والخدمات والمرافق التجارية والأعمال التمهيدية.", details: ["تنسيق الأعمال المدنية والبنى التحتية والأعمال التمهيدية", "تنفيذ المرافق التجارية والصناعية", "تنفيذ منضبط قائم على الجودة وإدارة المشاريع"] }
  }
];

export const pages: Record<Locale, SiteCopy> = {
  en: {
    company: "Abnaa Alhadarat",
    companyAr: "أبناء الحضارات",
    business: "General Contracting and Trading",
    tagline: "Building Civilizations Through Investment, Industry, and Innovation",
    ctaExplore: "Explore Our Sectors",
    ctaContact: "Contact Us",
    languageLabel: "AR",
    intro: "A future-facing Iraqi company building investment platforms across industry, logistics, hospitality, technology, trading, and infrastructure.",
    aboutTitle: "A diversified platform for national growth",
    aboutText: "Abnaa Alhadarat combines investment thinking with operational delivery. We develop industrial cities, manage strategic assets, connect supply chains, and deliver contracting capabilities that support Iraq’s next chapter of economic expansion.",
    industrialTitle: "Industrial cities built for investment",
    industrialText: "We focus on modern industrial zones with disciplined planning, investor-ready services, utility access, logistics connectivity, and management models designed for sustainable tenant growth.",
    logisticsTitle: "Logistics, trading, and execution in one network",
    logisticsText: "Our commercial and supply chain teams connect procurement, warehousing, transport, and trading activity so major projects can move with clarity and confidence.",
    ceoTitle: "CEO Message",
    ceoName: "Yousif Kadhim Al Awadi",
    ceoMessage: "At Abnaa Alhadarat, we believe that real development begins with building strong foundations for industry, logistics, investment, and innovation. Our vision is to contribute to Iraq’s economic growth by developing modern industrial cities, supporting strategic infrastructure, delivering smart logistics solutions, and creating long-term investment opportunities across multiple sectors.",
    contactTitle: "Start a strategic conversation",
    contactText: "For investment, trading, contracting, logistics, hospitality, or technology opportunities, our Baghdad team is ready to connect.",
    form: { name: "Name", email: "Email", phone: "Phone", subject: "Subject", message: "Message", send: "Send Message" },
    footerText: "General contracting and trading company developing industrial, logistics, hospitality, technology, and infrastructure opportunities in Iraq.",
    pageTitles: { "about-us": "About Us", sectors: "Sectors", projects: "Projects", "contact-us": "Contact Us" }
  },
  ar: {
    company: "Abnaa Alhadarat",
    companyAr: "أبناء الحضارات",
    business: "المقاولات العامة والتجارة",
    tagline: "نبني الحضارات عبر الاستثمار والصناعة والابتكار",
    ctaExplore: "استكشف قطاعاتنا",
    ctaContact: "اتصل بنا",
    languageLabel: "EN",
    intro: "شركة عراقية حديثة تبني منصات استثمارية في الصناعة واللوجستيات والضيافة والتقنية والتجارة والبنى التحتية.",
    aboutTitle: "منصة متنوعة للنمو الوطني",
    aboutText: "تجمع أبناء الحضارات بين الرؤية الاستثمارية والقدرة التنفيذية. نطوّر المدن الصناعية وندير الأصول الاستراتيجية ونربط سلاسل الإمداد ونقدّم قدرات مقاولات تدعم المرحلة القادمة من التوسع الاقتصادي في العراق.",
    industrialTitle: "مدن صناعية مصممة للاستثمار",
    industrialText: "نركز على مناطق صناعية حديثة بتخطيط منضبط وخدمات جاهزة للمستثمرين وربط بالخدمات واللوجستيات ونماذج إدارة تدعم نمو المستأجرين على المدى الطويل.",
    logisticsTitle: "اللوجستيات والتجارة والتنفيذ ضمن شبكة واحدة",
    logisticsText: "تربط فرقنا التجارية وسلاسل الإمداد بين التوريد والخزن والنقل والنشاط التجاري لتتحرك المشاريع الكبرى بوضوح وثقة.",
    ceoTitle: "رسالة الرئيس التنفيذي",
    ceoName: "يوسف كاظم العوادي",
    ceoMessage: "في أبناء الحضارات، نؤمن بأن التنمية الحقيقية تبدأ من بناء أسس قوية للصناعة واللوجستيات والاستثمار والابتكار. رؤيتنا هي المساهمة في نمو الاقتصاد العراقي من خلال تطوير مدن صناعية حديثة، ودعم البنى التحتية الاستراتيجية، وتقديم حلول لوجستية ذكية، وخلق فرص استثمارية طويلة الأمد عبر قطاعات متعددة.",
    contactTitle: "ابدأ حوارا استراتيجيا",
    contactText: "لفرص الاستثمار أو التجارة أو المقاولات أو اللوجستيات أو الضيافة أو التقنية، فريقنا في بغداد جاهز للتواصل.",
    form: { name: "الاسم", email: "البريد الإلكتروني", phone: "الهاتف", subject: "الموضوع", message: "الرسالة", send: "إرسال الرسالة" },
    footerText: "شركة مقاولات عامة وتجارة تطور فرصا صناعية ولوجستية وفندقية وتقنية وبنى تحتية في العراق.",
    pageTitles: { "about-us": "من نحن", sectors: "القطاعات", projects: "المشاريع", "contact-us": "اتصل بنا" }
  }
};

export const featureStats = [
  { en: "Industrial cities", ar: "مدن صناعية", value: "01" },
  { en: "Strategic sectors", ar: "قطاعات استراتيجية", value: "07" },
  { en: "Baghdad HQ", ar: "المقر بغداد", value: "HQ" }
];

export const quickIcons = [Network, ShipWheel, Factory];
