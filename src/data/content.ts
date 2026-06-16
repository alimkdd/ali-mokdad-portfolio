export const site = {
  name: "Ali Mokdad",
  initials: "AM",
  role: "Senior Software Engineer",
  location: "Beirut, Lebanon",
  tagline:
    "I build the systems behind digital wallets — transactions, queues, and integrations that can't afford to fail.",
  email: "ali.a.mk@hotmail.com",
  phone: "+961 78 964 421",
  phoneHref: "+96178964421",
  linkedin: "https://www.linkedin.com/in/ali-mokdad-5511a5168",
  github: "https://github.com/alimkdd",
  cv: "/AliMokdad-SoftwareEngineer_Resume.pdf",
  url: "https://alimokdadportfolio.vercel.app",
};

export const heroStats = [
  { value: 5, suffix: "+", label: "years of .NET engineering" },
  { value: 20, suffix: "+", label: "portals owned in production" },
  { value: 6, suffix: "", label: "payment providers integrated" },
];

export const about = {
  paragraphs: [
    "I'm a backend engineer with 5+ years building financial and high-traffic systems on .NET — most recently designing the Mojo Digital Wallet from the ground up: real-time transactions, notifications, user management, and a fleet of third-party integrations.",
    "Before that I owned 20+ multi-tenant portals serving markets across the Gulf, Africa, and Europe, and shipped fintech products straight into banking environments. I care about Clean Architecture, honest test coverage, and the unglamorous details — idempotency, retries, audit trails — that make money systems trustworthy.",
    "Away from the keyboard I chase numbers of a different kind: kilograms on a barbell. Same philosophy in both — progressive overload, strict form, and logging everything.",
  ],
};

export const skillGroups = [
  {
    title: "Backend & Architecture",
    skills: [
      ".NET 8 / .NET 10",
      "C#",
      "ASP.NET Core",
      "Clean Architecture",
      "Microservices",
      "REST APIs",
      "Blazor Server",
      "EF Core",
    ],
  },
  {
    title: "Data & Caching",
    skills: ["SQL Server", "Oracle", "Redis", "Query optimization", "Caching strategies"],
  },
  {
    title: "Messaging & Background Jobs",
    skills: ["RabbitMQ", "Hangfire", "Firebase Cloud Messaging", "Twilio / SMS gateways", "Real-time processing"],
  },
  {
    title: "DevOps & Delivery",
    skills: ["Docker", "Azure DevOps", "CI/CD pipelines", "IIS", "Git / GitHub", "Jira / Agile"],
  },
  {
    title: "Quality & Security",
    skills: [
      "JWT authentication",
      "WebAuthn / passkeys",
      "FluentValidation",
      "xUnit / Moq",
      "Serilog",
      "Swagger / Postman / Scalar",
      "QuestPDF / Open XML",
    ],
  },
];

export const summary =
  "Senior software engineer with 5+ years building financial and high-traffic systems on .NET — digital wallets, multi-tenant platforms, and banking products. Specialized in real-time transaction processing, messaging architectures, and Clean Architecture codebases that stay testable as they grow.";

export type Job = {
  company: string;
  badge: string;
  title: string;
  period: string;
  summary: string;
  bullets: string[];
  tech: string[];
};

export const experience: Job[] = [
  {
    company: "Cube Holdings Limited",
    badge: "CH",
    title: "Backend Engineer",
    period: "Oct 2024 — Present",
    summary: "Building the Mojo Digital Wallet from the ground up.",
    bullets: [
      "Designed and implemented core wallet modules end-to-end: transactions, notifications, user management, system & global management, and third-party integrations.",
      "Built real-time transaction processing on RabbitMQ with Redis for caching and OTP storage (automatic expiry) and Hangfire for background job scheduling.",
      "Integrated six external providers — G2G, Telia, Airhub, SIA Insurance, Ogero, and a payment scheduler — plus GlobeSMS and Twilio messaging and Firebase push notifications.",
      "Generated dynamic Excel reports with Open XML SDK and bank-grade PDF account statements with QuestPDF.",
      "Secured the platform with JWT authentication and authorization, and enforced Clean Architecture for a modular, testable codebase across all modules.",
    ],
    tech: [".NET 8", "C#", "Oracle", "SQL Server", "Redis", "RabbitMQ", "Hangfire", "Docker", "Azure DevOps"],
  },
  {
    company: "Mobile Technology Tomorrow (MT2)",
    badge: "MT2",
    title: "Software Developer",
    period: "Sep 2022 — Sep 2024",
    summary: "Owned a fleet of 20+ multi-tenant VAS portals across three continents.",
    bullets: [
      "Developed and maintained web landing pages and portals for markets across the Gulf, Africa, and Europe on the Value Added Services team.",
      "Owned 20+ multi-tenant educational, gaming, and video portals — support, testing, and troubleshooting end-to-end, with 4–5 microservices behind each portal.",
      "Integrated operator subscription flows and shipped releases through a structured QA process, deploying and verifying on IIS web servers.",
    ],
    tech: [".NET", "C#", "MVC", "HTML5 / CSS3 / JS", "SQL Server", "IIS", "TFS"],
  },
  {
    company: "Allied Engineering Group (AEG)",
    badge: "AEG",
    title: "Software Developer",
    period: "Sep 2020 — Sep 2022",
    summary: "Shipped fintech products straight into banking environments.",
    bullets: [
      "Built features for fintech products used inside banks, including desktop applications and Windows services in C#.",
      "Tested, deployed, and installed web applications on IIS — including database scripts and Windows-service setup on customer banking environments.",
    ],
    tech: [".NET", "C#", "Web Forms", "Telerik", "SQL Server", "TFS"],
  },
];

export type Project = {
  name: string;
  blurb: string;
  highlights: string[];
  tech: string[];
  repo: string;
  /** lines rendered in the card's terminal mock — first is the command, rest is output */
  terminal: { cmd: string; lines: string[] };
  extraLink?: { label: string; href: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "NPS — Newsletter Preference System",
    blurb:
      "Full-stack subscription platform with a passkey-protected admin dashboard, built with GDPR-style consent tracking in mind.",
    highlights: [
      "WebAuthn/passkey biometric admin sign-in (Fido2NetLib) + JWT sessions",
      "Field-level encryption at rest, email normalization, soft deletes, audit logs with correlation IDs",
      "Rate limiting, HSTS, CORS allow-list, two-layer validation — 60 xUnit/integration tests",
      "Strict Clean Architecture with the Result pattern and DDD-style aggregates",
    ],
    tech: [".NET 10", "React + TypeScript", "SQL Server 2022", "EF Core", "FluentValidation", "Serilog", "Docker"],
    repo: "https://github.com/alimkdd/NPS",
    terminal: {
      cmd: "dotnet run --project src/Api",
      lines: ["✓ WebAuthn provider registered", "✓ 60/60 tests passing", "→ listening on https://localhost:5001"],
    },
    extraLink: { label: "Frontend repo", href: "https://github.com/alimkdd/NPS-Frontend" },
    featured: true,
  },
  {
    name: "Transaction Retry System",
    blurb:
      "Intelligent retry engine for failed payments — retries transient failures, fails fast on permanent ones.",
    highlights: [
      "Exponential backoff with jitter, circuit breaker, idempotent by design",
      "Gateway pause after consecutive failures; traffic-aware retry reduction at peak hours",
      "Background worker queue with full retry audit history",
    ],
    tech: ["C#", "Clean Architecture", "Background workers"],
    repo: "https://github.com/alimkdd/TransactionRetrySystem",
    terminal: {
      cmd: "retry-worker --queue payments",
      lines: ["⟳ attempt 2/5 · backoff 1.6s + jitter", "✓ txn_8f3a recovered", "✗ txn_2c1d declined → no retry"],
    },
  },
  {
    name: "Fee Calculation Engine",
    blurb:
      "Configuration-driven fee engine for domestic, international, withdrawal, and deposit transactions.",
    highlights: [
      "Strategy pattern per transaction type, Chain of Responsibility for modifiers",
      "Tiered fees, SWIFT surcharges, discounts that stack safely, caps and floors",
      "Preview + final calculation endpoints with full audit logging",
    ],
    tech: ["C#", "Strategy / CoR patterns", "Clean Architecture"],
    repo: "https://github.com/alimkdd/FeeCalculationEngine",
    terminal: {
      cmd: "POST /api/fees/preview",
      lines: ["base $1.50 + 1.5% tier rate", "mods: premium −10% · weekend +5%", "→ total $4.85 (cap ✓ floor ✓)"],
    },
  },
  {
    name: "Payment Scheduler",
    blurb:
      "Recurring-payments automation — rent, subscriptions, and scheduled transfers with failure handling.",
    highlights: [
      "Six schedule frequencies with full CRUD management API",
      "Hangfire background execution, auto-pause after consecutive failures",
      "Execution history and next-payment tracking, per-user isolation",
    ],
    tech: ["C#", "Hangfire", "Clean Architecture"],
    repo: "https://github.com/alimkdd/PaymentScheduler",
    terminal: {
      cmd: "hangfire recurring --list",
      lines: ["rent-2291 · monthly · next 01 Jul", "sub-0114 · weekly · next 16 Jun", "✗ gym-7730 paused (3 failures)"],
    },
  },
  {
    name: "Transaction Smart Filter",
    blurb:
      "Advanced transaction search with dynamic queries and tier-based access control.",
    highlights: [
      "Fluent query-builder for multi-filter search, sorting, and pagination",
      "Access windows by user tier (90 days / 365 days / unlimited)",
      "Async execution for heavy queries, indexing and caching safeguards",
    ],
    tech: ["C#", "Query Builder pattern", "Clean Architecture"],
    repo: "https://github.com/alimkdd/TransactionSmartFilter",
    terminal: {
      cmd: "GET /txns?range=90d&q=transfer",
      lines: ["tier premium → 365d window", "42 results · page 1/3 · 18ms", "cache: HIT"],
    },
  },
  {
    name: "Transaction Compliance API",
    blurb:
      "Regulatory-grade transaction history API with masking and auditability built in.",
    highlights: [
      "Data masking for card numbers and account details",
      "Structured audit logging of every access event",
      "Owner-only authorization, pagination, and rate limiting",
    ],
    tech: ["C#", "REST", "Clean Architecture"],
    repo: "https://github.com/alimkdd/TransactionCompliance",
    terminal: {
      cmd: "GET /history/acc_****4421",
      lines: ["mask: card **** **** **** 9921", "audit: evt_5512 logged", "200 OK · 50 rows · page 1"],
    },
  },
  {
    name: "Smart Restaurant",
    blurb:
      "Restaurant operations platform — menu, inventory, orders, and staff in one system.",
    highlights: [
      "Role-based access (admin / staff / customer) with JWT",
      "Redis-backed brute-force login protection with countdown timers",
      "Server- and client-side validation with FluentValidation",
    ],
    tech: ["Blazor Server", ".NET 8", "EF Core", "SQL Server", "Redis"],
    repo: "https://github.com/alimkdd/SmartRestaurant",
    terminal: {
      cmd: "blazor serve --env production",
      lines: ["✓ menu sync · 84 items", "✓ rate-limit shield active", "3 orders in queue"],
    },
  },
];

export const lifting = {
  heading: "Under the Bar",
  intro:
    "When I'm not shipping backend systems, I'm bodybuilding and powerlifting. It's the same discipline wearing a different outfit: show up daily, add load progressively, keep strict form, and log every session. The barbell taught me patience with systems that only improve through consistent, measured effort — which is to say, all of them.",
  prs: [
    { lift: "Squat", weight: 150 },
    { lift: "Bench Press", weight: 110 },
    { lift: "Deadlift", weight: 210 },
  ],
  total: 470,
};

export const education = [
  {
    degree: "Master 1 — Management Information Systems",
    school: "Lebanese University, Beirut",
    period: "2020 — 2021",
    note: "Advanced coursework in business computing.",
  },
  {
    degree: "B.S. — Management Information Systems",
    school: "Lebanese University, Beirut",
    period: "2015 — 2019",
    note: "Foundations in software development and web technologies.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Personal Projects", href: "#projects" },
  { label: "Liftings", href: "#lifting" },
  { label: "Contact", href: "#contact" },
];
