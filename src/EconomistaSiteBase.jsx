import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Download, Mail, Linkedin, Github, FileText, Newspaper, User, Globe } from "lucide-react";

// ==========================
// Economista — Website Base (PT/EN)
// ==========================

// --- Configurações e links ---
const links = {
  email: "mailto:vitor17reis@gmail.com",
  linkedin: "https://www.linkedin.com/in/vítor-reis",
  github: "https://github.com/vitor17reis-macro",
  cv: "/cv.pdf",
};

const posts = [];

const skills = [
  "Data Analysis (Stata, Excel)",
  "Macroeconomia & Regulação Financeira",
  "Política Monetária e Financeira",
  "Econometria e Cálculo Matemático",
  "Office (Word & Excel)",
  "Liderança & Inovação Tecnológica",
];

const languagesList = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "B1" },
  { name: "Espanhol", level: "B1" },
];

// --- I18N (dicionário simples) ---
const DICT = {
  pt: {
    brand: "Economista — Vítor Reis",
    nav: { sobre: "Sobre", cv: "CV", analises: "Análises", contacto: "Contacto" },
    hero: {
      title: "Economista — Vítor Reis",
      blurb:
        "Sou um economista focado em macroeconomia, política monetária e análise de dados. Partilho semanalmente reflexões sobre a Zona Euro, Portugal e tendências globais.",
      downloadCV: "Download CV",
    },
    about: { title: "Sobre mim" },
    aboutText:
      "Tenho 24 anos e destaco-me pela disciplina, proatividade e persistência. Tenho particular interesse em análise de dados, economia financeira, regulação e política macroeconómica. Procuro aplicar um pensamento crítico e competências técnicas sólidas para interpretar fenómenos económicos complexos e contribuir para soluções práticas e fundamentadas.",
    cv: {
      title: "CV",
      education: "Educação",
      experience: "Experiência",
      skills: "Competências & Ferramentas",
      languages: "Idiomas",
      eduItems: [
        "Mestrado em Economia — FEP, Universidade do Porto (2023–Presente)",
        "Licenciatura em Economia — FEUC, Universidade de Coimbra (2019–2023)",
        "Erasmus+ — Universidade Autónoma de Madrid (2021–2022)",
      ],
      expItems: [
        "Administrative Assistant — Ibermetais (Mar. 2023 – Set. 2023). Apoio à cadeia logística, controlo de stocks e departamento comercial.",
        "Internship — M. Monteiro Serviços de Contabilidade (Jul. 2022). Apoio à contabilidade e organização administrativa.",
      ],
    },
    posts: { title: "Análises Semanais", empty: "Ainda não há artigos publicados. Quando criar o primeiro, adicione um objeto no array `posts` com título, data, resumo e url.", readMore: "Ler mais" },
    contact: { title: "Contacto", name: "Nome", email: "Email", message: "Mensagem", placeholderName: "O seu nome", placeholderEmail: "nome@exemplo.pt", placeholderMsg: "Escreva a sua mensagem", send: "Enviar", orEmail: "ou enviar por email" },
    footer: { top: "Topo", rights: "Todos os direitos reservados." },
    langLabel: "PT",
  },
  en: {
    brand: "Economist — Vítor Reis",
    nav: { sobre: "About", cv: "CV", analises: "Analyses", contacto: "Contact" },
    hero: {
      title: "Economist — Vítor Reis",
      blurb:
        "I am a economist focused on macroeconomics, monetary policy and data analysis. I publish weekly insights on the Euro Area, Portugal and global trends.",
      downloadCV: "Download CV",
    },
    about: { title: "About me" },
    aboutText:
      "I am 24 and known for discipline, proactivity and persistence. I am particularly interested in data analysis, financial economics, regulation and macroeconomic policy. I apply critical thinking and solid technical skills to interpret complex economic phenomena and contribute to practical, well‑grounded solutions.",
    cv: {
      title: "CV",
      education: "Education",
      experience: "Experience",
      skills: "Skills & Tools",
      languages: "Languages",
      eduItems: [
        "MSc in Economics — FEP, University of Porto (2023–Present)",
        "BSc in Economics — FEUC, University of Coimbra (2019–2023)",
        "Erasmus+ — Universidad Autónoma de Madrid (2021–2022)",
      ],
      expItems: [
        "Administrative Assistant — Ibermetais (Mar 2023 – Sep 2023). Logistics support, inventory control and commercial department.",
        "Internship — M. Monteiro Accounting Services (Jul 2022). Support to accounting and administrative organization.",
      ],
    },
    posts: { title: "Weekly Analyses", empty: "No posts yet. When you create the first one, add an object to the `posts` array with title, date, summary and url.", readMore: "Read more" },
    contact: { title: "Contact", name: "Name", email: "Email", message: "Message", placeholderName: "Your name", placeholderEmail: "name@example.com", placeholderMsg: "Write your message", send: "Send", orEmail: "or send by email" },
    footer: { top: "Top", rights: "All rights reserved." },
    langLabel: "EN",
  },
};

// --- Helpers ---
const Container = ({ children }) => (
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Section = ({ id, title, icon: Icon, children, altBg = false }) => (
  <section id={id} className={`scroll-mt-24 py-12 ${altBg ? "bg-neutral-50 dark:bg-neutral-900" : ""}`}>
    <Container>
      <div className="flex items-center gap-3 mb-6">
        {Icon ? <Icon className="w-5 h-5" aria-hidden /> : null}
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      {children}
    </Container>
  </section>
);

function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });
  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) { root.classList.add("dark"); localStorage.setItem("theme", "dark"); }
    else { root.classList.remove("dark"); localStorage.setItem("theme", "light"); }
  }, [dark]);
  return { dark, setDark };
}

function useI18n() {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "pt");
  useEffect(() => { localStorage.setItem("lang", lang); }, [lang]);
  const t = (path) => {
    const parts = path.split(".");
    return parts.reduce((acc, p) => (acc ? acc[p] : undefined), DICT[lang]) ?? path;
  };
  return { lang, setLang, t };
}

const Nav = ({ onToggleTheme, dark, lang, setLang, t }) => {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "#sobre", label: t("nav.sobre") },
    { href: "#cv", label: t("nav.cv") },
    { href: "#analises", label: t("nav.analises") },
    { href: "#contacto", label: t("nav.contacto") },
  ];
  const toggleLang = () => setLang(lang === "pt" ? "en" : "pt");

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
      <Container>
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-semibold tracking-tight">{t("hero.title")}</a>
          <nav className="hidden md:flex items-center gap-3">
            <ul className="flex items-center gap-6">
              {navItems.map((i) => (
                <li key={i.href}><a href={i.href} className="hover:underline underline-offset-4">{i.label}</a></li>
              ))}
            </ul>
            <button onClick={onToggleTheme} aria-label="Alternar tema" className="p-2 rounded-xl border border-neutral-200 dark:border-neutral-800 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800">
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button onClick={toggleLang} aria-label="Mudar idioma" className="px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 text-sm transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800">
              {DICT[lang].langLabel}
            </button>
          </nav>
          <button className="md:hidden p-2" onClick={() => setOpen((o) => !o)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
        </div>
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            {navItems.map((i) => (
              <a key={i.href} href={i.href} className="py-2 border-b border-neutral-200 dark:border-neutral-800">{i.label}</a>
            ))}
            <div className="flex gap-2">
              <button onClick={onToggleTheme} className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800">
                {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}<span>Theme</span>
              </button>
              <button onClick={() => setLang(lang === "pt" ? "en" : "pt")} className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <Globe className="w-4 h-4" /><span>{DICT[lang].langLabel}</span>
              </button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

const Card = ({ children }) => (
  <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 hover:shadow-lg transition-shadow bg-white dark:bg-neutral-950">{children}</div>
);

const Hero = ({ t }) => (
  <section className="pt-10 pb-8 bg-gradient-to-b from-blue-50 to-white dark:from-neutral-950 dark:to-neutral-900">
    <Container>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-blue-700 dark:text-blue-400">{t("hero.title")}</h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">{t("hero.blurb")}</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            <a href={links.cv} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              <Download className="w-4 h-4" /> {t("hero.downloadCV")}
            </a>
            <a href={links.linkedin} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href={links.github} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

const SecCV = ({ t }) => (
  <Section id="cv" title={t("cv.title")} icon={FileText} altBg>
    <div className="grid md:grid-cols-3 gap-6">
      <Card>
        <h3 className="font-medium">{t("cv.education")}</h3>
        <ul className="mt-3 space-y-2 text-sm">
          {t("cv.eduItems").map((item) => (<li key={item}>{item}</li>))}
        </ul>
      </Card>
      <Card>
        <h3 className="font-medium">{t("cv.experience")}</h3>
        <ul className="mt-3 space-y-2 text-sm">
          {t("cv.expItems").map((item) => (<li key={item}>{item}</li>))}
        </ul>
      </Card>
      <Card>
        <h3 className="font-medium">{t("cv.skills")}</h3>
        <ul className="mt-3 space-y-2 text-sm">
          <li>Stata, Excel, Word</li>
          <li>Econometria aplicada, Análise de dados</li>
          <li>Quick thinking, foco em resultados</li>
        </ul>
      </Card>
      <Card>
        <h3 className="font-medium flex items-center gap-2"><Globe className="w-4 h-4"/>{t("cv.languages")}</h3>
        <ul className="mt-3 space-y-2 text-sm">
          {languagesList.map((lang) => (
            <li key={lang.name} className="flex justify-between border-b border-neutral-200 dark:border-neutral-800 pb-1">
              <span>{lang.name}</span>
              <span className="text-neutral-500">{lang.level}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  </Section>
);

const SecAnalises = ({ t }) => (
  <Section id="analises" title={t("posts.title")} icon={Newspaper} altBg>
    {posts.length === 0 ? (
      <Card><p className="text-sm text-neutral-600 dark:text-neutral-300">{t("posts.empty")}</p></Card>
    ) : (
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((p) => (
          <Card key={p.id}>
            <div className="text-xs text-neutral-500">{p.date}</div>
            <h3 className="mt-1 font-medium leading-snug">{p.title}</h3>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{p.summary}</p>
            <a href={p.url} className="mt-3 inline-flex text-sm underline underline-offset-4">{t("posts.readMore")}</a>
          </Card>
        ))}
      </div>
    )}
  </Section>
);

const SecContacto = ({ t }) => (
  <Section id="contacto" title={t("contact.title")} icon={Mail}>
    <Card>
      <form className="grid gap-4 md:grid-cols-2">
        <div className="md:col-span-1">
          <label className="block text-sm mb-1">{t("contact.name")}</label>
          <input className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2" placeholder={t("contact.placeholderName")} />
        </div>
        <div className="md:col-span-1">
          <label className="block text-sm mb-1">{t("contact.email")}</label>
          <input type="email" className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2" placeholder={t("contact.placeholderEmail")} />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm mb-1">{t("contact.message")}</label>
          <textarea rows={5} className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2" placeholder={t("contact.placeholderMsg")} />
        </div>
        <div className="md:col-span-2 flex items-center gap-3">
          <button type="button" className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors">{t("contact.send")}</button>
          <a href={links.email} className="inline-flex items-center gap-2 text-sm underline underline-offset-4"><Mail className="w-4 h-4"/> {t("contact.orEmail")}</a>
        </div>
      </form>
    </Card>
    <div className="mt-4 flex items-center gap-4 text-sm">
      <a href={links.linkedin} className="underline underline-offset-4">LinkedIn</a>
      <a href={links.github} className="underline underline-offset-4">GitHub</a>
      <a href={links.email} className="underline underline-offset-4">Email</a>
    </div>
  </Section>
);

const Footer = ({ t }) => (
  <footer className="py-8 border-t border-neutral-200 dark:border-neutral-800 text-sm text-neutral-600 dark:text-neutral-400">
    <Container>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} Vítor Reis. {t("footer.rights")}</div>
        <div className="flex items-center gap-4">
          <a href="#sobre" className="underline underline-offset-4">{t("footer.top")}</a>
          <a href="#analises" className="underline underline-offset-4">{t("nav.analises")}</a>
          <a href="#contacto" className="underline underline-offset-4">{t("nav.contacto")}</a>
        </div>
      </div>
    </Container>
  </footer>
);

export default function EconomistaSiteBase() {
  const { dark, setDark } = useTheme();
  const { lang, setLang, t } = useI18n();
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Nav onToggleTheme={() => setDark((d) => !d)} dark={dark} lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <SecCV t={t} />
        <SecAnalises t={t} />
        <SecContacto t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
