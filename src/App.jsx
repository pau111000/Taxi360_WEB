import React, { useMemo, useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  Shield,
  Camera,
  FileText,
  Mail,
  Download,
  BadgeCheck,
  Lock,
  BarChart3,
  Users,
  Building2,
  Briefcase,
  Handshake,
  Linkedin,
  Sparkles,
  PlayCircle,
  Crown,
  ChevronDown,
  Star,
  Zap,
  Clock,
  Eye,
  TrendingUp,
  Menu,
  X,
  ExternalLink,
  ChevronRight,
  CircleCheck,
  Calculator,
  Layers,
  Image,
  Globe,
  Heart,
  Target,
  Award,
  Gift,
  CreditCard,
  Volume2,
  VolumeX,
  UserPlus,
  Megaphone,
} from "lucide-react";

import logo from "./assets/logo.png";
import screens from "./assets/portada_3.png";
import appNetoIcon from "./assets/logo.png";
import netoDemoVideo from "./assets/video.mp4";
import netoDemoPoster from "./assets/chica paula.png";

/* ─── BRAND CONFIG ─── */
const BRAND = {
  name: "Taxi360",
  city: "Barcelona",
  contactEmail: "taxi360barcelona@gmail.com",
  taxiNeto360Play: "https://play.google.com/store/apps/details?id=com.taxi360.taxineto360",
  linkedinUrl: "https://www.linkedin.com/company/taxi360/?viewAsMember=true",
};

/* ─── CONTENT DATA ─── */
const TOOLS_ALL = [
  {
    id: "taximo",
    title: "Táximo IA",
    emoji: "🤖",
    description: "Tu copiloto con inteligencia artificial. Pregúntale lo que necesites: vuelos, barcos, trenes, cuánto llevas ganado, qué herramienta usar… Respuestas al momento sin soltar el volante.",
    badge: "NUEVO",
    badgeColor: "brand",
  },
  {
    id: "gps",
    title: "GPS Taxi",
    emoji: "🗺️",
    description: "Navegación GPS en tiempo real pensada para el taxi. Tráfico, rutas óptimas y puntos de interés. Compatible con Google Maps y Waze.",
    badge: "PREMIUM",
    badgeColor: "brand",
  },
  {
    id: "radares",
    title: "Radares",
    emoji: "📡",
    description: "Alertas de radares fijos, de tramo y semafóricos con datos públicos oficiales (DGT, SCT, ayuntamientos). Más de 1.000 radares en Cataluña.",
    badge: "PREMIUM",
    badgeColor: "brand",
  },
  {
    id: "llegadas",
    title: "LlegadasDay!",
    emoji: "✈️",
    description: "Vuelos aterrizando en tiempo real. Sé el primero en la parada del aeropuerto.",
    badge: "PREMIUM",
    badgeColor: "brand",
  },
  {
    id: "tarifa",
    title: "TarifaGo!",
    emoji: "🚕",
    description: "Calcula tarifas y comisiones al instante. Sin calculadora, sin errores.",
    badge: "PREMIUM",
    badgeColor: "brand",
  },
  {
    id: "kpi",
    title: "KPI Intelligence",
    emoji: "📊",
    description: "Tus números reales: rendimiento, tendencias y datos claros de cada jornada.",
    badge: "PREMIUM",
    badgeColor: "brand",
  },
  {
    id: "neto",
    title: "Neto Apps",
    emoji: "💵",
    description: "¿Cuánto te queda después de Uber, Cabify y comisiones? Aquí lo sabes al céntimo.",
    badge: "PREMIUM",
    badgeColor: "brand",
  },
  {
    id: "historial",
    title: "Historial",
    emoji: "📋",
    description: "Todo tu historial de jornadas guardado. Consulta cualquier día en segundos.",
    badge: "PREMIUM",
    badgeColor: "brand",
  },
  {
    id: "calendario",
    title: "MiCalendario!",
    emoji: "📅",
    description: "Tu calendario de descansos y turnos sincronizado. Nunca pierdas el control de tus días libres.",
    badge: "PREMIUM",
    badgeColor: "brand",
  },
  {
    id: "eventos",
    title: "MisEventos!",
    emoji: "🎪",
    description: "Conciertos, partidos, ferias... Eventos que generan demanda de taxi HOY con previsión del tiempo.",
    badge: "GRATIS",
    badgeColor: "emerald",
  },
  {
    id: "ciudad",
    title: "MiCiudad!",
    emoji: "📍",
    description: "Hospitales, estaciones, monumentos, museos... Todos los puntos clave de tu ciudad con GPS integrado.",
    badge: "GRATIS",
    badgeColor: "emerald",
  },
  {
    id: "gasolinera",
    title: "MiGasolinera!",
    emoji: "⛽",
    description: "Las gasolineras más baratas cerca de ti en tiempo real. Ahorra en cada depósito.",
    badge: "PREMIUM",
    badgeColor: "brand",
  },
  {
    id: "trenes",
    title: "Trenes!",
    emoji: "🚆",
    description: "Llegadas de trenes a Barcelona Sants en tiempo real. Pasajeros con maletas te esperan.",
    badge: "BCN",
    badgeColor: "sky",
  },
  {
    id: "barcos",
    title: "Barcos!",
    emoji: "🚢",
    description: "Cruceros y ferris en el Puerto de Barcelona. Miles de turistas desembarcando cada día.",
    badge: "BCN",
    badgeColor: "sky",
  },
  {
    id: "trafico",
    title: "Tráfico!",
    emoji: "🚦",
    description: "Estado del tráfico en tiempo real: fluido, denso o congestionado. Lo sabes antes de salir.",
    badge: "PREMIUM",
    badgeColor: "brand",
  },
  {
    id: "traductor",
    title: "Tradúceme!",
    emoji: "🌍",
    description: "Traductor instantáneo con voz: español ↔ inglés, francés y alemán. Habla con cualquier turista.",
    badge: "GRATIS",
    badgeColor: "emerald",
  },
  {
    id: "conductores",
    title: "Conductores",
    emoji: "👥",
    description: "Gestiona tu flota de conductores con historial completo y datos individuales de cada uno.",
    badge: "FLOTA",
    badgeColor: "violet",
  },
];

const TOOLS_EXTRAS = [
  { title: "Evidencias con fotos", emoji: "📸", description: "Fotos de VISA y taxímetro como prueba real ante cualquier reclamación." },
  { title: "Liquidaciones automáticas", emoji: "🧾", description: "Tus ingresos netos resumidos sin hacer cuentas a mano." },
  { title: "Exportación CSV / PDF / Excel", emoji: "📥", description: "Descarga todos tus datos en el formato que necesites. Listo para tu gestoría." },
];

const PRICING_PLANS = [
  {
    id: "individual",
    name: "Individual",
    price: "9,99",
    currency: "€",
    period: "/mes",
    description: "Para taxistas autónomos",
    features: [
      "35+ herramientas incluidas",
      "Modo Caza 🎯 + Cerebro Predictivo 🧠",
      "LlegadasDay! + TarifaGo! + KPI + Neto Apps",
      "Trenes! + Barcos! + Radares + Tráfico",
      "Anticipación IA + Widget + Exportación CSV/PDF",
    ],
    trialDays: 14,
    trialText: "14 días de prueba gratuita",
    popular: true,
    cta: "Probar 14 días gratis",
  },
  {
    id: "flota",
    name: "Flota",
    price: "59,99",
    currency: "€",
    period: "/mes",
    description: "Para empresas de taxi",
    features: [
      "Todo el plan Individual incluido",
      "Gestión de múltiples conductores",
      "Dashboard centralizado por conductor",
      "Historial y KPIs por conductor",
      "Reportes automáticos + Exportación avanzada",
    ],
    trialDays: 14,
    trialText: "14 días de prueba gratuita",
    popular: false,
    cta: "Probar 14 días gratis",
  },
  {
    id: "influencer",
    name: "Micro-Influencer",
    price: "0",
    currency: "€",
    period: "",
    description: "Para divulgadores de contenido taxi",
    features: [
      "30 días gratis (el doble que el trial normal)",
      "Acceso completo a las 35+ herramientas",
      "Modo Caza 🎯, Cerebro IA 🧠, Anticipación",
      "Exportación CSV/PDF/Excel",
      "Único compromiso: crear un vídeo con tu feedback honesto",
    ],
    trialDays: 30,
    trialText: "30 días gratis (en lugar de 14)",
    isInfluencer: true,
    cta: "Contacta con nosotros",
  },
];

const USE_CASES = [
  {
    role: "Taxista autónomo",
    description: "Sabes cuánto ganas, cuánto gastas y cuánto te queda. Controla vuelos, trenes, eventos y tráfico desde tu móvil.",
    price: "9,99€/mes",
    tools: "35+ herramientas: Modo Caza, Cerebro IA, LlegadasDay!, TarifaGo!, Anticipación...",
  },
  {
    role: "Conductor asalariado",
    description: "Compruebas las liquidaciones de tu empresa con datos claros. Tradúceme! gratis para hablar con turistas.",
    price: "9,99€/mes",
    tools: "KPI + Neto Apps + Tradúceme! + MiCiudad! (gratis)",
  },
  {
    role: "Pequeña empresa / Flota",
    description: "Gestión centralizada de conductores, liquidaciones automáticas y transparencia total. Menos errores, menos conflictos.",
    price: "59,99€/mes",
    tools: "Plan completo + Conductores + Dashboard por conductor",
  },
];

const FEATURES_SECURITY = [
  {
    icon: Shield,
    title: "Datos privados",
    description: "Tu información es solo tuya. Nadie más tiene acceso a tus registros ni a tus ganancias.",
  },
  {
    icon: Lock,
    title: "No se comparten sin tu permiso",
    description: "Nunca compartimos tus datos con terceros. Tú decides quién ve qué.",
  },
  {
    icon: FileText,
    title: "Información protegida",
    description: "Encriptación de nivel empresarial. Tus datos están seguros ante cualquier situación.",
  },
  {
    icon: BadgeCheck,
    title: "Evidencias verificables",
    description: "Fotos de VISA y taxímetro como prueba real de cada jornada. Listo para auditorías.",
  },
];

const TRUST_STATS = [
  { number: "1", label: "Una sola app" },
  { number: "35+", label: "Herramientas incluidas" },
  { number: "7", label: "Días gratis" },
  { number: "3", label: "Formatos de exportación" },
];

const FAQ_ITEMS = [
  {
    question: "¿Cuánto cuesta TaxiNeto360?",
    answer:
      "El plan Individual cuesta 9,99€/mes y el plan Flota (empresas) cuesta 59,99€/mes. Ambos planes incluyen 14 días de prueba gratuita con acceso total a las 35+ herramientas. Si eres divulgador de contenido taxi (micro-influencer), tienes 30 días gratis a cambio de crear un vídeo con tu feedback.",
  },
  {
    question: "¿Qué herramientas incluye?",
    answer:
      "Más de 35 herramientas: Táximo IA (copiloto con inteligencia artificial), Cerebro Predictivo (IA Claude que analiza toda la ciudad), Modo Caza (guía en tiempo real para no ir vacío), GPS Taxi (navegación con heatmap de demanda), Radares (alertas de radares fijos), LlegadasDay! (vuelos en tiempo real), TarifaGo! (cálculo de tarifas), KPI Intelligence (análisis de rendimiento), Neto Apps (neto real tras comisiones), Historial, MiCalendario!, MisEventos! (eventos con demanda de taxi), MiCiudad!, MiGasolinera!, Trenes! (llegadas a Sants), Barcos! (cruceros y ferris), Tráfico!, Tradúceme!, Anticipación IA, Widget de pantalla, Android Auto, Conductores (gestión de flota), evidencias con fotos, liquidaciones automáticas y exportación CSV/PDF/Excel.",
  },
  {
    question: "¿Qué es el plan Micro-Influencer?",
    answer:
      "Si eres divulgador de contenido sobre el taxi, te damos 14 días gratis (el doble que el periodo estándar). El único compromiso es crear un vídeo compartiendo tu feedback honesto sobre la app. Contáctanos para activar este plan.",
  },
  {
    question: "¿Puedo cancelar cuando quiera?",
    answer:
      "Sí, puedes cancelar tu suscripción en cualquier momento sin penalización. Tu acceso se mantendrá hasta el final del período pagado.",
  },
  {
    question: "¿Es seguro conectar mi cuenta?",
    answer:
      "Totalmente. Usamos encriptación de nivel empresarial y nunca compartimos tus datos con terceros. Tus registros son solo tuyos.",
  },
  {
    question: "¿Cómo funciona el programa de afiliados?",
    answer:
      "Si eres usuario de TaxiNeto360 y recomiendas la plataforma a otros taxistas, te bonificamos por cada nuevo cliente que se incorpore gracias a ti. No hay límite de referidos. Contacta con nosotros a través del agente de WhatsApp de la web o escríbenos a taxi360barcelona@gmail.com para unirte al programa.",
  },
];

/* ─── COMPONENTS ─── */
const Container = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const SectionBadge = ({ children }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-400/5 px-4 py-1.5">
    <Sparkles className="w-3.5 h-3.5 text-brand-300" />
    <span className="text-xs font-semibold text-brand-300">{children}</span>
  </div>
);

const SectionTitle = ({ children, subtitle = "" }) => (
  <div className="text-center">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
      <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
        {children}
      </span>
    </h2>
    {subtitle && <p className="mt-3 text-lg text-white/50">{subtitle}</p>}
  </div>
);

const GlassCard = ({ children, className = "" }) => (
  <div
    className={`relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl ${className}`}
  >
    {children}
  </div>
);

const PrimaryButton = ({ children, onClick, href, className = "" }) => {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-400 to-brand-500 px-6 py-3 text-sm font-semibold text-gray-900 shadow-lg shadow-brand-500/40 transition-all duration-200 hover:shadow-xl hover:shadow-brand-500/60 hover:scale-105 ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

const SecondaryButton = ({ children, onClick, href, className = "" }) => {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl border border-brand-400/30 bg-brand-400/5 px-6 py-3 text-sm font-semibold text-brand-300 transition-all duration-200 hover:bg-brand-400/10 hover:border-brand-400/50 ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

const GhostButton = ({ children, onClick, href, className = "" }) => {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] px-6 py-3 text-sm font-semibold text-white/70 transition-all duration-200 hover:bg-white/[0.05] hover:text-white ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

const StatCounter = ({ number, label }) => (
  <motion.div
    className="flex flex-col items-center gap-1"
    whileInView={{ scale: 1 }}
    initial={{ scale: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-brand-300 to-brand-400 bg-clip-text text-transparent">
      {number}
    </div>
    <div className="text-xs sm:text-sm text-white/50 text-center">{label}</div>
  </motion.div>
);

const FeatureCard = ({ title, description, icon: Icon }) => (
  <GlassCard className="p-6 flex flex-col gap-4">
    <div className="flex items-center gap-3">
      {Icon && <Icon className="w-5 h-5 text-brand-400" />}
      <h3 className="font-semibold text-white">{title}</h3>
    </div>
    <p className="text-sm text-white/60">{description}</p>
  </GlassCard>
);

const PricingCard = ({ plan }) => {
  const getButtonContent = () => {
    if (plan.popular) {
      return (
        <a
          href={BRAND.taxiNeto360Play}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-b from-brand-300 to-brand-500 px-6 py-3.5 text-sm font-bold text-dark-950 shadow-[0_0_30px_rgba(251,191,36,0.2)] hover:shadow-[0_0_50px_rgba(251,191,36,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all"
        >
          <Download className="w-4 h-4" /> {plan.cta}
        </a>
      );
    }
    if (plan.isInfluencer) {
      return (
        <a
          href={`mailto:${BRAND.contactEmail}?subject=Plan%20Micro-Influencer%20TaxiNeto360`}
          className="mt-auto w-full inline-flex items-center justify-center gap-2.5 rounded-xl border border-violet-400/30 bg-violet-400/10 px-6 py-3.5 text-sm font-semibold text-violet-200 hover:bg-violet-400/20 hover:-translate-y-0.5 transition-all"
        >
          <Mail className="w-4 h-4" /> {plan.cta}
        </a>
      );
    }
    return (
      <a
        href={BRAND.taxiNeto360Play}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto w-full inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white/90 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-0.5 transition-all"
      >
        <Download className="w-4 h-4" /> {plan.cta}
      </a>
    );
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <GlassCard
        className={`relative p-8 flex flex-col gap-6 h-full ${
          plan.popular ? "ring-2 ring-brand-400/50 bg-white/[0.06]" : ""
        } ${plan.isInfluencer ? "ring-2 ring-violet-400/50 bg-violet-900/[0.1]" : ""}`}
      >
        {plan.popular && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-400 to-brand-500 px-4 py-1.5 text-xs font-bold text-dark-950 shadow-lg">
              <Star className="w-3 h-3" /> Más popular
            </span>
          </div>
        )}

        {plan.isInfluencer && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-400 to-violet-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
              <Megaphone className="w-3 h-3" /> Divulgadores
            </span>
          </div>
        )}

        <div className="pt-4">
          <h3 className="text-xl font-extrabold text-white">{plan.name}</h3>
          <p className="mt-1 text-sm text-white/50">{plan.description}</p>
        </div>

        <div>
          {plan.price !== "0" ? (
            <div className="flex items-baseline gap-1">
              <span className={`text-4xl font-extrabold tracking-tight ${plan.popular ? "bg-gradient-to-r from-brand-300 to-brand-400 bg-clip-text text-transparent" : "text-white"}`}>
                {plan.price}€
              </span>
              <span className="text-sm text-white/40">{plan.period}</span>
            </div>
          ) : (
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold tracking-tight text-white">Gratis</span>
            </div>
          )}
          <p className={`mt-2 text-xs font-semibold flex items-center gap-1.5 ${plan.isInfluencer ? "text-violet-300" : "text-emerald-300"}`}>
            <Gift className="w-3.5 h-3.5" /> {plan.trialText}
          </p>
        </div>

        <div className="space-y-3 flex-1">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <CircleCheck
                className={`mt-0.5 w-4 h-4 shrink-0 ${
                  plan.isInfluencer ? "text-violet-400" : plan.popular ? "text-brand-400" : "text-emerald-400/70"
                }`}
              />
              <span className="text-sm text-white/65">{feature}</span>
            </div>
          ))}
        </div>

        {getButtonContent()}
      </GlassCard>
    </motion.div>
  );
};

const TestimonialCard = ({ name, role, quote, avatar }) => (
  <GlassCard className="p-6">
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-brand-400 text-brand-400" />
      ))}
    </div>
    <p className="text-sm text-white/70 mb-4">"{quote}"</p>
    <div className="flex items-center gap-3">
      <img
        src={avatar}
        alt={name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <p className="text-sm font-semibold text-white">{name}</p>
        <p className="text-xs text-white/50">{role}</p>
      </div>
    </div>
  </GlassCard>
);

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-white/[0.06]">
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between py-5 text-left text-sm sm:text-base font-semibold text-white/90 hover:text-white transition-colors"
    >
      {question}
      <ChevronDown
        className={`w-5 h-5 text-white/40 shrink-0 ml-4 transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pb-5">
            <p className="text-sm text-white/55 leading-relaxed">{answer}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const PhoneDemo = ({ videoSrc, poster }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div className="absolute inset-0 bg-brand-400/10 blur-[80px] rounded-full scale-75" />
      <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-white/10 bg-dark-950 shadow-[0_40px_100px_rgba(0,0,0,0.7)]">
        <div className="absolute inset-0 pointer-events-none rounded-[2.5rem] ring-1 ring-inset ring-white/[0.08]" />
        <div className="pointer-events-none absolute left-1/2 top-3 h-5 w-24 -translate-x-1/2 rounded-full bg-dark-950 ring-1 ring-white/10 z-10" />
        <div className="h-[560px] bg-dark-950 relative">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={videoSrc}
            poster={poster}
            playsInline
            preload="metadata"
            autoPlay
            muted
            loop
          />
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:bg-black/80 transition-all"
            title={isMuted ? "Activar audio" : "Silenciar"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
      <div className="mt-3 text-center">
        <a
          href={BRAND.taxiNeto360Play}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-brand-300 transition-colors"
        >
          Ver en Google Play <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};

/* ─── NAVBAR ─── */
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-black/40 backdrop-blur-xl">
      <Container className="py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt={BRAND.name} className="w-10 h-10 rounded-lg" />
          <span className="font-bold text-lg text-white hidden sm:block">TaxiNeto360</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#herramientas" className="text-sm text-white/60 hover:text-white transition-colors">
            Herramientas
          </a>
          <a href="#precios" className="text-sm text-white/60 hover:text-white transition-colors">
            Precios
          </a>
          <a href="#seguridad" className="text-sm text-white/60 hover:text-white transition-colors">
            Seguridad
          </a>
          <a href="#sobre-nosotros" className="text-sm text-white/60 hover:text-white transition-colors">
            Sobre nosotros
          </a>
          <a href="#afiliados" className="text-sm text-white/60 hover:text-white transition-colors">
            Afiliados
          </a>
          <a href="#contacto" className="text-sm text-white/60 hover:text-white transition-colors">
            Contacto
          </a>
        </div>

        <div className="hidden sm:block">
          <PrimaryButton href={BRAND.taxiNeto360Play}>
            Probar 14 días gratis
            <ArrowRight className="w-4 h-4" />
          </PrimaryButton>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white/60 hover:text-white transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/[0.06] bg-black/80 backdrop-blur-xl"
          >
            <Container className="py-4 flex flex-col gap-4">
              <a href="#herramientas" className="text-sm text-white/60 hover:text-white transition-colors">
                Herramientas
              </a>
              <a href="#precios" className="text-sm text-white/60 hover:text-white transition-colors">
                Precios
              </a>
              <a href="#seguridad" className="text-sm text-white/60 hover:text-white transition-colors">
                Seguridad
              </a>
              <a href="#sobre-nosotros" className="text-sm text-white/60 hover:text-white transition-colors">
                Sobre nosotros
              </a>
              <a href="#afiliados" className="text-sm text-white/60 hover:text-white transition-colors">
                Afiliados
              </a>
              <a href="#contacto" className="text-sm text-white/60 hover:text-white transition-colors">
                Contacto
              </a>
              <PrimaryButton href={BRAND.taxiNeto360Play} className="w-full">
                Probar 14 días gratis
              </PrimaryButton>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/* ─── MOBILE CTA BAR ─── */
const MobileCTABar = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      setHidden(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 md:hidden z-40 border-t border-white/[0.06] bg-gradient-to-t from-black to-black/80 backdrop-blur-xl p-4"
        >
          <Container>
            <PrimaryButton href={BRAND.taxiNeto360Play} className="w-full">
              Probar 14 días gratis
              <ArrowRight className="w-4 h-4" />
            </PrimaryButton>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ─── MAIN APP ─── */
export default function App() {
  const [openFAQ, setOpenFAQ] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 text-white overflow-hidden">
      <Navbar />
      <MobileCTABar />

      {/* HERO */}
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 lg:pt-48 lg:pb-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex justify-center"
            >
              <SectionBadge>
                🚀 En vivo en Google Play
              </SectionBadge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
            >
              <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                Claridad para tu día a día en el taxi
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/60 mb-8 leading-relaxed"
            >
              Vuelos, trenes, barcos, eventos, tráfico, traductor, gasolineras y mucho más.<br />
              35+ herramientas en una sola app. 3 de ellas totalmente gratis.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <PrimaryButton href={BRAND.taxiNeto360Play} className="w-full sm:w-auto">
                  Probar 14 días gratis
                  <ArrowRight className="w-4 h-4" />
                </PrimaryButton>
                <GhostButton href={BRAND.linkedinUrl} target="_blank" className="w-full sm:w-auto">
                  Conoce más
                  <ExternalLink className="w-4 h-4" />
                </GhostButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-white/50"
            >
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" /> 14 días gratis
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" /> Simple y directo
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" /> Pensado para el taxi real
              </span>
            </motion.div>
          </div>
        </Container>

        <div className="mt-16 sm:mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Container>
              <PhoneDemo videoSrc={netoDemoVideo} poster={netoDemoPoster} />
            </Container>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="relative py-12 sm:py-16 border-y border-white/[0.06]">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {TRUST_STATS.map((stat, idx) => (
              <div key={idx} className="text-center">
                <StatCounter number={stat.number} label={stat.label} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* EL PROBLEMA */}
      <section className="relative py-16 sm:py-20 lg:py-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <SectionTitle subtitle="El sector del taxi tiene un problema claro">
              ¿Sabes realmente cuánto ganas?
            </SectionTitle>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Briefcase,
                role: "Autónomos",
                problem: "Calculan a ojo. No saben cuánto ganan de verdad después de comisiones, gasolina y gastos.",
              },
              {
                icon: Users,
                role: "Asalariados",
                problem: "Dependen de las liquidaciones de su jefe. No tienen datos propios ni forma de comprobarlos.",
              },
              {
                icon: Building2,
                role: "Pequeñas empresas",
                problem: "Gestionan todo en hojas de cálculo. Errores, conflictos y falta de transparencia interna.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <GlassCard className="p-6 h-full flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-400/10 border border-red-400/20">
                      <item.icon className="w-5 h-5 text-red-300" />
                    </div>
                    <h3 className="font-bold text-white">{item.role}</h3>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">{item.problem}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* DIFERENCIACIÓN */}
      <section className="relative py-16 sm:py-20 lg:py-28 border-y border-white/[0.06]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <SectionBadge>Lo que nos diferencia</SectionBadge>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-10">
              <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                Simple. Directo. Para el taxi real.
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-10">
              <GlassCard className="p-6">
                <h3 className="text-sm font-bold text-red-300 mb-4">TaxiNeto360 NO es:</h3>
                <ul className="space-y-3">
                  {["Un Excel complicado", "Un sistema pesado de flotas", "Una app genérica que no entiende el taxi"].map(
                    (text, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm text-white/60">
                        <X className="w-4 h-4 text-red-400/70 shrink-0" />
                        {text}
                      </li>
                    )
                  )}
                </ul>
              </GlassCard>
              <GlassCard className="p-6 ring-1 ring-brand-400/20">
                <h3 className="text-sm font-bold text-brand-300 mb-4">TaxiNeto360 SÍ es:</h3>
                <ul className="space-y-3">
                  {["Simple: lo usas desde el primer día", "Directo: datos claros, sin rodeos", "Pensado para el taxista real de Barcelona"].map(
                    (text, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm text-white/60">
                        <Check className="w-4 h-4 text-brand-400 shrink-0" />
                        {text}
                      </li>
                    )
                  )}
                </ul>
              </GlassCard>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="relative py-16 sm:py-20 lg:py-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <SectionTitle subtitle="En 4 pasos, todo claro">
              Cómo funciona
            </SectionTitle>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Descarga", desc: "Instala TaxiNeto360 desde Google Play." },
              { step: "2", title: "Configura", desc: "Introduce tu perfil: autónomo, asalariado o empresa." },
              { step: "3", title: "Registra", desc: "Cada jornada, registra llegadas, tarifas y fotos." },
              { step: "4", title: "Analiza", desc: "Consulta tu neto real, KPIs y exporta tus datos." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <GlassCard className="p-6 h-full flex flex-col gap-4 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-400/20 to-brand-400/5 border border-brand-400/20">
                    <span className="text-lg font-extrabold text-brand-300">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-white/55">{item.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* HERRAMIENTAS */}
      <section id="herramientas" className="relative py-16 sm:py-20 lg:py-28 border-t border-white/[0.06]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <SectionTitle subtitle="Todo lo que necesitas para dominar tu jornada, en una sola app">
              17+ Herramientas que trabajan por ti
            </SectionTitle>
          </motion.div>

          {/* Badge legend */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 text-[11px] font-bold text-emerald-300">
              GRATIS
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-400/10 border border-brand-400/20 px-3 py-1 text-[11px] font-bold text-brand-300">
              PREMIUM
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-400/10 border border-sky-400/20 px-3 py-1 text-[11px] font-bold text-sky-300">
              BCN — Exclusivo Barcelona
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-400/10 border border-violet-400/20 px-3 py-1 text-[11px] font-bold text-violet-300">
              FLOTA
            </span>
          </motion.div>

          {/* All tools grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-12">
            {TOOLS_ALL.map((tool, idx) => {
              const colorMap = {
                brand: { bg: "bg-brand-400/10", border: "border-brand-400/20", text: "text-brand-300" },
                emerald: { bg: "bg-emerald-400/10", border: "border-emerald-400/20", text: "text-emerald-300" },
                sky: { bg: "bg-sky-400/10", border: "border-sky-400/20", text: "text-sky-300" },
                violet: { bg: "bg-violet-400/10", border: "border-violet-400/20", text: "text-violet-300" },
              };
              const colors = colorMap[tool.badgeColor] || colorMap.brand;

              return (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 4) * 0.08 }}
                >
                  <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <GlassCard className="p-6 h-full flex flex-col gap-3 group hover:border-white/[0.15] transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{tool.emoji}</div>
                        <span className={`inline-flex items-center rounded-full ${colors.bg} border ${colors.border} px-2.5 py-0.5 text-[10px] font-bold ${colors.text} shrink-0`}>
                          {tool.badge}
                        </span>
                      </div>
                      <h3 className="text-lg font-extrabold text-white">
                        {tool.title}
                      </h3>
                      <p className="text-sm text-white/55 flex-grow leading-relaxed">
                        {tool.description}
                      </p>
                    </GlassCard>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Extra tools */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h3 className="text-center text-lg font-bold text-white/70 mb-6">Y además...</h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TOOLS_EXTRAS.map((tool, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className="p-5 flex items-start gap-4">
                  <div className="text-2xl shrink-0">{tool.emoji}</div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-white/50">
                      {tool.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* CTA within tools section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <p className="text-white/50 mb-5 text-sm">Todo esto en una sola app. Sin complicaciones.</p>
            <PrimaryButton href={BRAND.taxiNeto360Play}>
              Descargar TaxiNeto360 gratis
              <ArrowRight className="w-4 h-4" />
            </PrimaryButton>
          </motion.div>
        </Container>
      </section>

      {/* SCREENSHOTS */}
      <section className="relative py-16 sm:py-20 lg:py-28 border-y border-white/[0.06]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                Visual limpio. Fácil de usar.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={screens}
              alt="App screenshots"
              className="w-full rounded-3xl border border-white/[0.1]"
            />
          </motion.div>
        </Container>
      </section>

      {/* PRICING */}
      <section id="precios" className="relative py-16 sm:py-20 lg:py-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <SectionTitle>Elige tu plan</SectionTitle>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {PRICING_PLANS.map((plan, idx) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <PricingCard plan={plan} />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {USE_CASES.map((useCase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <GlassCard className="p-6 flex flex-col gap-4 h-full">
                  <span className="rounded-full bg-brand-400/10 border border-brand-400/15 px-3 py-1 text-[11px] font-semibold text-brand-300 w-fit">
                    {useCase.price}
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {useCase.role}
                  </h3>
                  <p className="text-sm text-white/50 flex-grow">
                    {useCase.description}
                  </p>
                  <div className="flex items-start gap-2.5">
                    <Check className="mt-0.5 w-4 h-4 text-emerald-400/70 shrink-0" />
                    <span className="text-sm text-white/55">
                      {useCase.tools}
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* SEGURIDAD */}
      <section id="seguridad" className="relative py-16 sm:py-20 lg:py-28 border-y border-white/[0.06]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <SectionTitle subtitle="Tus datos son solo tuyos. Esto da credibilidad.">
              Seguridad y privacidad
            </SectionTitle>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES_SECURITY.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="sobre-nosotros" className="relative py-16 sm:py-20 lg:py-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                Sobre Taxi360
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-4">
                Taxi360 nace para dar claridad al día a día del taxi.
              </p>
              <p className="text-lg text-white/60 leading-relaxed mb-4">
                Creemos que cada conductor merece saber cuánto gana de verdad, sin depender de nadie. Una herramienta simple, directa y pensada 100% para el taxi real de Barcelona.
              </p>
              <p className="text-base text-white/40 leading-relaxed mb-8">
                Nuestros valores: <span className="text-white/60">Simplicidad</span> · <span className="text-white/60">Claridad</span> · <span className="text-white/60">Control</span> · <span className="text-white/60">Seguridad</span> · <span className="text-white/60">Honestidad</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <PrimaryButton href={BRAND.linkedinUrl} target="_blank">
                  LinkedIn de Taxi360
                  <ExternalLink className="w-4 h-4" />
                </PrimaryButton>
                <SecondaryButton href={`mailto:${BRAND.contactEmail}`}>
                  Contacta con nosotros
                  <Mail className="w-4 h-4" />
                </SecondaryButton>
              </div>
            </GlassCard>
          </motion.div>
        </Container>
      </section>

      {/* PROGRAMA DE AFILIADOS */}
      <section id="afiliados" className="relative py-16 sm:py-20 lg:py-28 border-y border-white/[0.06]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="relative p-8 sm:p-12 overflow-hidden">
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-brand-400/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400/20 to-brand-400/10 border border-emerald-400/20">
                    <UserPlus className="w-7 h-7 text-emerald-300" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 text-xs font-bold text-emerald-300 mb-1">
                      <Zap className="w-3 h-3" /> Programa de afiliados
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                  Gana bonificaciones por cada taxista que traigas
                </h2>
                <p className="text-lg text-white/60 leading-relaxed mb-6 max-w-3xl">
                  En Taxi360 valoramos a los buenos clientes. Si eres usuario de TaxiNeto360 y recomiendas la plataforma a otros taxistas, te bonificamos por cada nuevo cliente que se incorpore gracias a ti.
                </p>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/15 shrink-0">
                      <Gift className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white/90">Bonificación por cliente</h4>
                      <p className="text-xs text-white/50 mt-1">Recibe una compensación por cada taxista que se registre gracias a tu recomendación.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-brand-400/15 shrink-0">
                      <TrendingUp className="w-4 h-4 text-brand-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white/90">Sin límite de referidos</h4>
                      <p className="text-xs text-white/50 mt-1">Cuantos más taxistas traigas, más bonificaciones acumulas. Sin techo.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-violet-400/15 shrink-0">
                      <Award className="w-4 h-4 text-violet-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white/90">Reconocimiento real</h4>
                      <p className="text-xs text-white/50 mt-1">Los buenos clientes merecen ser recompensados. Tu esfuerzo tiene valor.</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-5 mb-8">
                  <p className="text-sm text-white/70 leading-relaxed">
                    <strong className="text-emerald-300">¿Cómo participar?</strong> Si estás interesado en formar parte del programa de marketing de afiliados, contacta con nosotros a través del <strong className="text-white/85">agente de WhatsApp</strong> que encontrarás en esta web, o escríbenos directamente un correo a <a href={`mailto:${BRAND.contactEmail}`} className="text-brand-300 hover:text-brand-200 underline underline-offset-2">{BRAND.contactEmail}</a> y te informaremos de todo.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <SecondaryButton href={`mailto:${BRAND.contactEmail}?subject=Programa%20de%20Afiliados%20TaxiNeto360`}>
                    <Mail className="w-4 h-4" /> Solicitar info por email
                  </SecondaryButton>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="relative py-16 sm:py-20 lg:py-28 border-y border-white/[0.06]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-3xl mx-auto"
          >
            <SectionTitle>
              Preguntas frecuentes
            </SectionTitle>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {FAQ_ITEMS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
              >
                <FAQItem
                  question={item.question}
                  answer={item.answer}
                  isOpen={openFAQ === idx}
                  onToggle={() => setOpenFAQ(openFAQ === idx ? -1 : idx)}
                />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-16 sm:py-20 lg:py-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <GlassCard className="relative p-8 sm:p-12 lg:p-16 text-center overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-400/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                  Sabe cuánto ganas. De verdad.
                </h2>
                <p className="text-lg text-white/50 mb-8 max-w-2xl mx-auto">
                  Sin cuentas manuales. Sin líos. Sin sorpresas.<br />
                  35+ herramientas profesionales en una sola app, desde 9,99€/mes. 3 herramientas gratis.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <PrimaryButton href={BRAND.taxiNeto360Play}>
                    Probar 14 días gratis
                    <ArrowRight className="w-4 h-4" />
                  </PrimaryButton>
                  <GhostButton href={`mailto:${BRAND.contactEmail}`}>
                    Contacta con nosotros
                    <Mail className="w-4 h-4" />
                  </GhostButton>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/[0.06] bg-gradient-to-b from-transparent to-white/[0.02] py-12">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt={BRAND.name} className="w-8 h-8 rounded-lg" />
                <span className="font-bold text-white">{BRAND.name}</span>
              </div>
              <p className="text-sm text-white/50">
                Claridad para el día a día del taxi.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
                Navegación
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#herramientas" className="text-sm text-white/60 hover:text-white transition-colors">
                    Herramientas
                  </a>
                </li>
                <li>
                  <a href="#precios" className="text-sm text-white/60 hover:text-white transition-colors">
                    Precios
                  </a>
                </li>
                <li>
                  <a href="#seguridad" className="text-sm text-white/60 hover:text-white transition-colors">
                    Seguridad
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
                Empresa
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#sobre-nosotros" className="text-sm text-white/60 hover:text-white transition-colors">
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-sm text-white/60 hover:text-white transition-colors">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href={BRAND.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
                    LinkedIn
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
                Contacto
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href={`mailto:${BRAND.contactEmail}`} className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {BRAND.contactEmail}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="privacidad.html" className="text-sm text-white/60 hover:text-white transition-colors">
                    Política de privacidad
                  </a>
                </li>
                <li>
                  <a href="terminos.html" className="text-sm text-white/60 hover:text-white transition-colors">
                    Términos y condiciones
                  </a>
                </li>
                <li>
                  <a href="eliminar-cuenta.html" className="text-sm text-white/60 hover:text-white transition-colors">
                    Eliminar cuenta
                  </a>
                </li>
                <li>
                  <a href="cookies.html" className="text-sm text-white/60 hover:text-white transition-colors">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="aviso-legal.html" className="text-sm text-white/60 hover:text-white transition-colors">
                    Aviso legal
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} {BRAND.name}. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={BRAND.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
