export type ProjectCategory = "web" | "app" | "uiux";
export type Localized = { en: string; id: string };

export type Project = {
  id: string;
  title: string;
  cat: ProjectCategory;
  images: string[];
  preview: "dashboard" | "phone" | "terminal" | "design" | "kanban" | "space";
  year: number;
  featured: boolean;
  accent: string;
  accent2: string;
  tech: string[];
  metric: {
    icon: "users" | "star" | "layers" | "download" | "eye";
    value: string;
    label: Localized;
  };
  role: Localized;
  type: Localized;
  tagline: Localized;
  desc: Localized;
  features: Localized[];
  demoUrl: string;
  sourceUrl: string;
};

export const PROJECTS: Project[] = [
  {
    id: "securebank",
    title: "SecureBank Dashboard",
    cat: "web",
    images: [
      "/images/gambar1.jpg",
      "/images/gambar2.jpg",
      "/images/gambar3.jpg",
    ],
    preview: "dashboard",
    year: 2025,
    featured: true,
    accent: "#a78bfa",
    accent2: "#22d3ee",
    tech: ["React", "Node.js", "PostgreSQL", "WebSockets"],
    metric: {
      icon: "users",
      value: "12k+",
      label: { en: "daily users", id: "pengguna harian" },
    },
    role: { en: "Full-Stack Developer", id: "Full-Stack Developer" },
    type: { en: "Client Project", id: "Proyek Klien" },
    tagline: {
      en: "A comprehensive banking dashboard with real-time transactions, fraud alerts, and analytics for 12k+ daily users.",
      id: "Dasbor perbankan komprehensif dengan transaksi real-time, peringatan fraud, dan analitik untuk 12k+ pengguna harian.",
    },
    desc: {
      en: "A comprehensive banking dashboard built for a fintech startup. It aggregates accounts, transactions, and fraud-detection alerts into a single real-time interface, serving over 12,000 daily active users with a 99.9% uptime SLA.",
      id: "Dasbor perbankan komprehensif yang dibangun untuk startup fintech. Menggabungkan akun, transaksi, dan peringatan deteksi penipuan dalam satu antarmuka real-time, melayani lebih dari 12.000 pengguna aktif harian dengan SLA uptime 99,9%.",
    },
    features: [
      {
        en: "Real-time transaction monitoring via WebSockets",
        id: "Pemantauan transaksi real-time via WebSocket",
      },
      {
        en: "ML-based fraud detection with instant alerts",
        id: "Deteksi penipuan berbasis ML dengan peringatan instan",
      },
      {
        en: "Role-based access control & audit logs",
        id: "Kontrol akses berbasis peran & log audit",
      },
      {
        en: "Interactive analytics with custom reports",
        id: "Analitik interaktif dengan laporan kustom",
      },
    ],
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    id: "healthtrack",
    title: "HealthTrack Mobile App",
    cat: "app",
    images: [
      "/images/gambar1.jpg",
      "/images/gambar2.jpg",
      "/images/gambar3.jpg",
    ],
    preview: "phone",
    year: 2025,
    featured: true,
    accent: "#34d399",
    accent2: "#2dd4bf",
    tech: ["React Native", "Firebase", "TensorFlow Lite"],
    metric: {
      icon: "star",
      value: "4.9",
      label: { en: "app rating", id: "rating aplikasi" },
    },
    role: { en: "Mobile Developer", id: "Mobile Developer" },
    type: { en: "Client Project", id: "Proyek Klien" },
    tagline: {
      en: "Cross-platform health app with AI-powered insights, habit tracking, and offline-first sync.",
      id: "Aplikasi kesehatan lintas platform dengan insight berbasis AI, pelacakan kebiasaan, dan sinkronisasi offline-first.",
    },
    desc: {
      en: "A cross-platform health companion that turns raw fitness data into actionable insights. On-device AI analyzes sleep, activity, and heart patterns, while Firebase keeps everything in sync across devices — even offline.",
      id: "Aplikasi pendamping kesehatan lintas platform yang mengubah data kebugaran mentah menjadi insight yang bisa ditindaklanjuti. AI on-device menganalisis pola tidur, aktivitas, dan detak jantung, sementara Firebase menjaga semuanya tetap sinkron antar perangkat — bahkan saat offline.",
    },
    features: [
      {
        en: "AI-powered daily health insights",
        id: "Insight kesehatan harian berbasis AI",
      },
      {
        en: "Sleep, steps & heart-rate tracking",
        id: "Pelacakan tidur, langkah & detak jantung",
      },
      { en: "Smart medication reminders", id: "Pengingat obat yang pintar" },
      {
        en: "Offline-first sync across devices",
        id: "Sinkronisasi offline-first antar perangkat",
      },
    ],
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    id: "vulnscan",
    title: "VulnScan Pro",
    cat: "web",
    images: [
      "/images/gambar1.jpg",
      "/images/gambar2.jpg",
      "/images/gambar3.jpg",
    ],
    preview: "terminal",
    year: 2024,
    featured: false,
    accent: "#fb7185",
    accent2: "#fb923c",
    tech: ["Next.js", "Go", "Redis", "Docker"],
    metric: {
      icon: "star",
      value: "2.1k",
      label: { en: "GitHub stars", id: "bintang GitHub" },
    },
    role: { en: "Lead Developer", id: "Lead Developer" },
    type: { en: "Open Source", id: "Open Source" },
    tagline: {
      en: "Open-source vulnerability scanner with 200+ detection rules, CI/CD integration, and actionable PDF reports.",
      id: "Pemindai kerentanan open-source dengan 200+ aturan deteksi, integrasi CI/CD, dan laporan PDF yang informatif.",
    },
    desc: {
      en: "An open-source security scanner that automates vulnerability assessment for web applications. It runs 200+ detection rules against any target, integrates into CI/CD pipelines, and delivers actionable PDF reports — built with a security-first architecture.",
      id: "Pemindai keamanan open-source yang mengotomatiskan penilaian kerentanan untuk aplikasi web. Menjalankan 200+ aturan deteksi terhadap target apa pun, terintegrasi ke pipeline CI/CD, dan menghasilkan laporan PDF yang bisa ditindaklanjuti — dibangun dengan arsitektur security-first.",
    },
    features: [
      {
        en: "200+ CVE & misconfiguration detection rules",
        id: "200+ aturan deteksi CVE & misconfiguration",
      },
      {
        en: "One-command CI/CD pipeline integration",
        id: "Integrasi pipeline CI/CD dengan satu perintah",
      },
      {
        en: "Actionable PDF security reports",
        id: "Laporan keamanan PDF yang informatif",
      },
      {
        en: "Real-time alerts to Slack & Telegram",
        id: "Peringatan real-time ke Slack & Telegram",
      },
    ],
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    id: "lumen",
    title: "Lumen Design System",
    cat: "uiux",
    images: [
      "/images/gambar1.jpg",
      "/images/gambar2.jpg",
      "/images/gambar3.jpg",
    ],
    preview: "design",
    year: 2024,
    featured: false,
    accent: "#22d3ee",
    accent2: "#60a5fa",
    tech: ["Figma", "React", "Storybook", "Style Dictionary"],
    metric: {
      icon: "layers",
      value: "120+",
      label: { en: "components", id: "komponen" },
    },
    role: { en: "Design Engineer", id: "Design Engineer" },
    type: { en: "Internal Tool", id: "Alat Internal" },
    tagline: {
      en: "A complete design system — 120+ accessible components, design tokens, and perfect Figma-to-code sync.",
      id: "Sistem desain lengkap — 120+ komponen aksesibel, design token, dan sinkronisasi Figma-ke-kode yang sempurna.",
    },
    desc: {
      en: "A complete design system unifying design and code for a product team of 20+. It ships 120+ accessible components, automated design tokens, and a Figma kit that stays perfectly in sync with the Storybook implementation.",
      id: "Sistem desain lengkap yang menyatukan desain dan kode untuk tim produk 20+ orang. Memuat 120+ komponen aksesibel, design token otomatis, dan Figma kit yang selalu sinkron sempurna dengan implementasi Storybook.",
    },
    features: [
      {
        en: "120+ WCAG-AA accessible components",
        id: "120+ komponen aksesibel WCAG-AA",
      },
      {
        en: "Automated design tokens pipeline",
        id: "Pipeline design token otomatis",
      },
      {
        en: "Figma-to-code sync via Storybook",
        id: "Sinkronisasi Figma-ke-kode via Storybook",
      },
      {
        en: "Dark & light mode out of the box",
        id: "Tema gelap & terang siap pakai",
      },
    ],
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    cat: "app",
    images: [
      "/images/gambar1.jpg",
      "/images/gambar2.jpg",
      "/images/gambar3.jpg",
    ],
    preview: "kanban",
    year: 2024,
    featured: false,
    accent: "#fbbf24",
    accent2: "#f97316",
    tech: ["Flutter", "Supabase", "Riverpod"],
    metric: {
      icon: "download",
      value: "8k+",
      label: { en: "downloads", id: "unduhan" },
    },
    role: { en: "Mobile Developer", id: "Mobile Developer" },
    type: { en: "Side Project", id: "Proyek Sampingan" },
    tagline: {
      en: "Team collaboration app with real-time kanban boards, drag-and-drop, and smart reminders.",
      id: "Aplikasi kolaborasi tim dengan papan kanban real-time, drag-and-drop, dan pengingat pintar.",
    },
    desc: {
      en: "A team collaboration app focused on speed. Real-time kanban boards, drag-and-drop everything, and smart reminders that learn your team’s rhythm — wrapped in a Flutter UI that feels native on every platform.",
      id: "Aplikasi kolaborasi tim yang berfokus pada kecepatan. Papan kanban real-time, drag-and-drop untuk semuanya, dan pengingat pintar yang mempelajari ritme tim kamu — dibungkus UI Flutter yang terasa native di setiap platform.",
    },
    features: [
      {
        en: "Real-time collaborative kanban boards",
        id: "Papan kanban kolaboratif real-time",
      },
      {
        en: "Fluid drag-and-drop interactions",
        id: "Interaksi drag-and-drop yang mulus",
      },
      {
        en: "Smart deadline reminders",
        id: "Pengingat tenggat waktu yang pintar",
      },
      {
        en: "Cross-platform: iOS, Android & Web",
        id: "Lintas platform: iOS, Android & Web",
      },
    ],
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    id: "nova",
    title: "Nova 3D Portfolio",
    cat: "uiux",
    images: [
      "/images/gambar1.jpg",
      "/images/gambar2.jpg",
      "/images/gambar3.jpg",
    ],
    preview: "space",
    year: 2025,
    featured: false,
    accent: "#e879f9",
    accent2: "#818cf8",
    tech: ["Three.js", "GSAP", "Blender"],
    metric: {
      icon: "eye",
      value: "15k",
      label: { en: "visitors", id: "kunjungan" },
    },
    role: { en: "Creative Developer", id: "Creative Developer" },
    type: { en: "Client Project", id: "Proyek Klien" },
    tagline: {
      en: "An immersive 3D portfolio experience with custom WebGL shaders and buttery-smooth 60fps animations.",
      id: "Pengalaman portofolio 3D imersif dengan shader WebGL kustom dan animasi 60fps yang sangat mulus.",
    },
    desc: {
      en: "An immersive portfolio experience for a creative studio — custom WebGL shaders, scroll-driven camera paths, and particle systems, all tuned to hold a steady 60fps even on mid-range phones.",
      id: "Pengalaman portofolio imersif untuk studio kreatif — shader WebGL kustom, jalur kamera berbasis scroll, dan sistem partikel, semuanya dioptimalkan agar tetap stabil di 60fps bahkan di ponsel kelas menengah.",
    },
    features: [
      {
        en: "Custom GLSL shaders & particle systems",
        id: "Shader GLSL kustom & sistem partikel",
      },
      {
        en: "Scroll-driven cinematic camera",
        id: "Kamera sinematik berbasis scroll",
      },
      {
        en: "60fps on mid-range mobile devices",
        id: "60fps di perangkat mobile kelas menengah",
      },
      {
        en: "Graceful accessible fallback mode",
        id: "Mode fallback aksesibel yang elegan",
      },
    ],
    demoUrl: "#",
    sourceUrl: "#",
  },
];

export function previewBg(p: Project) {
  return {
    background: `radial-gradient(110% 90% at 15% 0%, ${p.accent}1f, transparent 55%), radial-gradient(90% 90% at 95% 100%, ${p.accent2}17, transparent 50%), transparent 50%`,
  };
}
