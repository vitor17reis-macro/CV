import React, { useState } from "react";
import { Menu, X, Moon, Sun, Download, Mail, Linkedin, Github, FileText, Newspaper, User, Globe } from "lucide-react";

// --- Links pessoais ---
const links = {
  email: "mailto:vitor17reis@gmail.com",
  linkedin: "https://www.linkedin.com/in/vítor-reis",
  github: "https://github.com/seu-utilizador",
  cv: "/cv.pdf",
};

// --- Estado inicial dos artigos (vazio) ---
const posts = [];

// --- Competências ---
const skills = [
  "Data Analysis (Stata, Excel)",
  "Macroeconomia & Regulação Financeira",
  "Política Monetária e Financeira",
  "Econometria e Cálculo Matemático",
  "Office (Word & Excel)",
  "Liderança & Inovação Tecnológica"
];

// --- Idiomas ---
const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "B1" },
  { name: "Espanhol", level: "B1" },
];

const Container = ({ children }) => (
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Section = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="scroll-mt-24 py-12">
    <div className="flex items-center gap-3 mb-6">
      {Icon ? <Icon className="w-5 h-5" aria-hidden /> : null}
      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
    {children}
  </section>
);

// --- Navegação + Tema ---
function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  React.useEffect(() => {
    const root = window.document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);
  return { dark, setDark };
}

const Nav = ({ onToggleTheme, dark }) => {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "#sobre", label: "Sobre" },
    { href: "#cv", label: "CV" },
    { href: "#analises", label: "Análises" },
    { href: "#contacto", label: "Contacto" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
      <Container>
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-semibold tracking-tight">Vítor Reis</a>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((i) => (
              <a key={i.href} href={i.href} className="hover:underline underline-offset-4">
                {i.label}
              </a>
            ))}
            <button onClick={onToggleTheme} aria-label="Alternar tema" className="p-2 rounded-xl border border-neutral-200 dark:border-neutral-800">
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </nav>
          <button className="md:hidden p-2" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            {navItems.map((i) => (
              <a key={i.href} href={i.href} className="py-2 border-b border-neutral-200 dark:border-neutral-800">
                {i.label}
              </a>
            ))}
            <button onClick={onToggleTheme} className="mt-2 inline-flex items-center gap-2 self-start px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800">
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}<span>Alternar tema</span>
            </button>
          </div>
        )}
      </Container>
    </header>
  );
};

const Card = ({ children }) => (
  <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 hover:shadow-sm transition-shadow">{children}</div>
);

const Hero = () => (
  <section className="pt-10 pb-8 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
    <Container>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">Economista — Vítor Reis</h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">Sou um jovem economista focado em macroeconomia, política monetária e análise de dados. Partilho semanalmente reflexões sobre a Zona Euro, Portugal e tendências globais.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={links.cv} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700">
              <Download className="w-4 h-4" /> Download CV
            </a>
            <a href={links.linkedin} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href={links.github} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
        <Card>
          <h3 className="font-medium flex items-center gap-2"><User className="w-4 h-4"/>Sobre mim</h3>
          <p className="mt-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
            Tenho 20 anos, sou disciplinado, proativo e persistente. Interesso-me por análise de dados, economia financeira, regulação e política macroeconómica. Procuro aplicar pensamento crítico e competências técnicas para interpretar fenómenos económicos e contribuir para soluções práticas.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="text-xs px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800">{s}</span>
            ))}
          </div>
        </Card>
      </div>
    </Container>
  </section>
);

const SecCV = () => (
  <Section id="cv" title="CV" icon={FileText}>
    <div className="grid md:grid-cols-3 gap-6">
      <Card>
        <h3 className="font-medium">Educação</h3>
        <ul className="mt-3 space-y-2 text-sm">
          <li><strong>Mestrado em Economia</strong> — FEP, Universidade do Porto (2023–Presente)</li>
          <li><strong>Licenciatura em Economia</strong> — FEUC, Universidade de Coimbra (2019–2023)</li>
          <li><strong>Erasmus+</strong> — Universidade Autónoma de Madrid (2021–2022)</li>
        </ul>
      </Card>
      <Card>
        <h3 className="font-medium">Experiência</h3>
        <ul className="mt-3 space-y-2 text-sm">
          <li><strong>Administrative Assistant</strong> — Ibermetais, Indústria de Trefilagem (Mar. 2023 – Set. 2023). Apoio à cadeia logística, controlo de stocks e departamento comercial.</li>
          <li><strong>Internship</strong> — M. Monteiro Serviços de Contabilidade (Jul. 2022). Apoio à contabilidade e organização administrativa.</li>
        </ul>
      </Card>
      <Card>
        <h3 className="font-medium">Competências & Ferramentas</h3>
        <ul className="mt-3 space-y-2 text-sm">
          <li>Stata, Excel, Word</li>
          <li>Econometria aplicada, Análise de dados</li>
          <li>Quick thinking, foco em resultados</li>
        </ul>
      </Card>
      <Card>
        <h3 className="font-medium flex items-center gap-2"><Globe className="w-4 h-4"/>Idiomas</h3>
        <ul className="mt-3 space-y-2 text-sm">
          {languages.map((lang) => (
            <li key={lang.name}><strong>{lang.name}</strong> — {lang.level}</li>
          ))}
        </ul>
      </Card>
    </div>
  </Section>
);

const SecAnalises = () => (
  <Section id="analises" title="Análises Semanais" icon={Newspaper}>
    {posts.length === 0 ? (
      <Card>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">Ainda não há artigos publicados.</p>
      </Card>
    ) : null}
  </Section>
);

const SecContacto = () => (
  <Section id="contacto" title="Contacto" icon={Mail}>
    <Card>
      <a href={links.email} className="inline-flex items-center gap-2 text-sm underline underline-offset-4"><Mail className="w-4 h-4"/> vitor17reis@gmail.com</a>
    </Card>
  </Section>
);

export default function EconomistaSiteBase() {
  const { dark, setDark } = useTheme();
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Nav onToggleTheme={() => setDark((d) => !d)} dark={dark} />
      <main>
        <Hero />
        <Container>
          <SecCV />
          <SecAnalises />
          <SecContacto />
        </Container>
      </main>
    </div>
  );
}