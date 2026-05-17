import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Feather, Moon, Sparkles, Leaf, Brain, Swords, Compass, TrendingUp,
  PenLine, Layers, Target, Crown, Lightbulb, Eye, Mail, Instagram, Linkedin, ArrowUpRight,
} from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aya Ben Maamer — Poetry, Strategy, Quiet Power" },
      { name: "description", content: "The personal world of Aya Ben Maamer — where editorial elegance meets cinematic darkness, strategy meets poetry, and ambition learns to whisper." },
    ],
  }),
  component: Home,
});

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3 liquid-glass" : "py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-wide text-gradient">Aya Ben<span className="text-primary"> · </span>Maamer</a>
        
        <div className="hidden md:flex items-center">
          <nav className="flex items-center gap-10 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">{t.about}</a>
            <a href="#passions" className="hover:text-foreground transition-colors">{t.passions}</a>
            <a href="#skills" className="hover:text-foreground transition-colors">{t.skills}</a>
            <a href="#journal" className="hover:text-foreground transition-colors">{t.journal}</a>
            <a href="#manifesto" className="hover:text-foreground transition-colors">{t.manifesto}</a>
            <a href="#contact" className="hover:text-foreground transition-colors">{t.contact}</a>
          </nav>

          <div className="flex items-center gap-4 ml-10 border-l border-white/10 pl-10">
            <button onClick={() => setLanguage('en')} className={`text-[10px] font-body font-medium tracking-[0.2em] uppercase transition-colors ${language === 'en' ? 'text-lavender' : 'text-muted-foreground hover:text-foreground'}`}>EN</button>
            <button onClick={() => setLanguage('fr')} className={`text-[10px] font-body font-medium tracking-[0.2em] uppercase transition-colors ${language === 'fr' ? 'text-lavender' : 'text-muted-foreground hover:text-foreground'}`}>FR</button>
            <button onClick={() => setLanguage('ar')} className={`text-[10px] font-body font-medium tracking-[0.2em] uppercase transition-colors ${language === 'ar' ? 'text-lavender' : 'text-muted-foreground hover:text-foreground'}`}>AR</button>
          </div>
        </div>
        
        <a href="#contact" className="hidden lg:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground border border-border/60 hover:border-primary/60 rounded-full px-5 py-2.5 transition-all">
          {t.contact} <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden noise">
      {/* Hero-specific video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero section.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/50" />
      {/* Original atmospheric overlays on top of video */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[140px] animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo/30 blur-[160px]" />
      <div className="absolute top-20 right-1/4 w-2 h-2 rounded-full bg-moonlight/80 shadow-moon" />
      <div className="absolute top-40 left-1/3 w-1 h-1 rounded-full bg-moonlight/60" />
      <div className="absolute bottom-32 left-20 w-1.5 h-1.5 rounded-full bg-lavender/70" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8 text-muted-foreground text-xs uppercase tracking-[0.4em]" style={{ animation: "fade-up 1s ease-out 0.1s both" }}>
            <Moon className="w-4 h-4 text-lavender" />
            <span>{t.hero.tag}</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight" style={{ animation: "fade-up 1s ease-out 0.2s both" }}>
            <span className="text-gradient">{t.hero.name1}</span>
            <br />
            <span className="italic text-gradient-violet font-light">{t.hero.name2}</span>
          </h1>
          <p className="font-display italic text-2xl md:text-3xl text-lavender/90 mt-10 max-w-2xl leading-relaxed" style={{ animation: "fade-up 1s ease-out 0.4s both" }}>
            {t.hero.quote}
          </p>
          <p className="text-muted-foreground mt-8 max-w-xl text-lg leading-relaxed" style={{ animation: "fade-up 1s ease-out 0.5s both" }}>
            {t.hero.desc}
          </p>
          <div className="flex flex-wrap gap-4 mt-12" style={{ animation: "fade-up 1s ease-out 0.6s both" }}>
            <a href="#manifesto" className="inline-flex items-center gap-2 px-7 py-4 rounded-full liquid-glass text-foreground text-sm tracking-wide transition-all hover:brightness-110">
              {t.hero.btn2}
            </a>
            <a href="#passions" className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-muted-foreground hover:text-foreground text-sm tracking-wide transition-all">
              {t.hero.btn3}
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 right-6 hidden lg:flex flex-col items-end gap-3 text-[10px] uppercase tracking-[0.4em] text-muted-foreground" style={{ animation: "fade-up 1s ease-out 0.8s both" }}>
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-lavender/50 to-transparent" />
          <span>{t.hero.scroll}</span>
        </div>
      </div>
    </section>
  );
}

function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">

        {/* Left — Label + Heading */}
        <div className="lg:col-span-4 space-y-6">
          <div style={{ animation: "fade-up 1s ease-out 0.1s both" }}>
            <SectionLabel icon={<Eye className="w-3.5 h-3.5" />}>{t.about.label}</SectionLabel>
          </div>
          <h2 className="font-display text-5xl md:text-6xl mt-6 text-gradient leading-tight" style={{ animation: "fade-up 1s ease-out 0.2s both" }}>
            {t.about.title1}<span className="italic text-gradient-violet">{t.about.titleHighlight}</span>{t.about.title2}
          </h2>
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/40" style={{ animation: "fade-up 1s ease-out 0.3s both" }}>
            <Stat k={t.about.stats.k1} v={t.about.stats.v1} />
            <Stat k={t.about.stats.k2} v={t.about.stats.v2} />
            <Stat k={t.about.stats.k3} v={t.about.stats.v3} />
          </div>
        </div>

        {/* Center — Owner portrait video */}
        <div className="lg:col-span-4 flex justify-center" style={{ animation: "fade-up 1s ease-out 0.4s both" }}>
          <div className="relative group w-full max-w-xs">
            {/* Glow ring behind the card */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/50 via-lavender/30 to-indigo/40 blur-lg opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
            {/* Video card */}
            <div className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-2xl">
              <video
                src="/the website owner .mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[3/4] object-cover"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/80 to-transparent" />
              {/* Name tag */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-display text-lg text-foreground tracking-wide">{t.hero.name1} {t.hero.name2}</p>
                <p className="text-xs text-lavender uppercase tracking-[0.3em] mt-0.5">Strategist · Poet · Visionary</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Bio text */}
        <div className="lg:col-span-4 space-y-6 text-lg text-muted-foreground leading-relaxed" style={{ animation: "fade-up 1s ease-out 0.5s both" }}>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>

      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-gradient-violet">{k}</div>
      <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-2">{v}</div>
    </div>
  );
}

function SectionLabel({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full liquid-glass text-[10px] uppercase tracking-[0.35em] text-lavender">
      {icon}
      {children}
    </div>
  );
}

const passionIcons = [PenLine, Feather, Sparkles, Leaf, Brain, Swords, Compass, TrendingUp];

function Passions() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="passions" className="relative py-32 px-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-20">
          <div style={{ animation: "fade-up 1s ease-out 0.1s both" }}>
            <SectionLabel icon={<Sparkles className="w-3.5 h-3.5" />}>{t.passions.label}</SectionLabel>
          </div>
          <h2 className="font-display text-5xl md:text-6xl mt-6 text-gradient leading-tight" style={{ animation: "fade-up 1s ease-out 0.2s both" }}>
            {t.passions.title1}<span className="italic text-gradient-violet">{t.passions.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground mt-6 text-lg" style={{ animation: "fade-up 1s ease-out 0.3s both" }}>
            {t.passions.desc}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.passions.items.map((p, i) => {
            const Icon = passionIcons[i % passionIcons.length];
            return (
            <article
              key={p.title}
              className="relative rounded-[28px] overflow-hidden group"
              style={{ animation: `fade-up 0.7s ease-out ${0.1 + i * 0.07}s both` }}
            >
              <img src="/cards bg.webp" alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" />
              <div className="relative w-full h-full liquid-glass p-7 flex flex-col gap-5">
              {/* Top badge */}
              <div className="liquid-glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 w-fit">
                <span className="w-2 h-2 rounded-full bg-white/80" />
                <Icon className="w-3.5 h-3.5 text-white/90" />
              </div>

              {/* Heading */}
              <div className="flex-1">
                <h3 className="font-heading text-2xl tracking-[-0.5px] leading-[1.1] text-foreground group-hover:text-lavender transition-colors">
                  {p.title}
                </h3>
                <p className="font-body font-light text-sm text-foreground/70 mt-3 leading-relaxed">
                  {p.text}
                </p>
              </div>

              {/* Bottom tag */}
              <div className="liquid-glass-strong rounded-full px-4 py-2 text-center">
                <span className="font-body text-xs font-medium text-foreground/80 uppercase tracking-[0.2em]">
                  {t.passions.tag}
                </span>
              </div>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const skillIcons = [Layers, Compass, Target, Crown, TrendingUp, Feather, Brain, Lightbulb];

function Skills() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[160px]" />
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div style={{ animation: "fade-up 1s ease-out 0.1s both" }}>
              <SectionLabel icon={<Target className="w-3.5 h-3.5" />}>{t.skills.label}</SectionLabel>
            </div>
            <h2 className="font-display text-5xl md:text-6xl mt-6 text-gradient leading-tight" style={{ animation: "fade-up 1s ease-out 0.2s both" }}>
              {t.skills.title1}<span className="italic text-gradient-violet">{t.skills.titleHighlight}</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-base leading-relaxed" style={{ animation: "fade-up 1s ease-out 0.3s both" }}>
            {t.skills.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {t.skills.items.map((s, i) => {
            const Icon = skillIcons[i % skillIcons.length];
            return (
            <div
              key={s.title}
              className="relative rounded-[28px] overflow-hidden group"
              style={{ animation: `fade-up 0.7s ease-out ${0.1 + i * 0.07}s both` }}
            >
              <img src="/cards bg.webp" alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" />
              <div className="relative w-full h-full liquid-glass p-7 flex flex-col gap-5">
              {/* Top badge */}
              <div className="flex items-center gap-3">
                <div className="liquid-glass inline-flex items-center gap-2 rounded-full px-3 py-1.5">
                  <span className="w-2 h-2 rounded-full bg-white/80" />
                  <Icon className="w-3.5 h-3.5 text-white/90" />
                </div>
                <span className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.25em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-heading text-2xl tracking-[-0.5px] leading-[1.1] text-foreground group-hover:text-lavender transition-colors">
                  {s.title}
                </h3>
                <p className="font-body font-light text-sm text-foreground/70 mt-3 leading-relaxed">
                  {s.text}
                </p>
              </div>

              {/* CTA tag */}
              <div className="liquid-glass-strong rounded-full px-4 py-2 text-center">
                <span className="font-body text-xs font-medium text-foreground/80 uppercase tracking-[0.2em]">
                  {t.skills.tag}
                </span>
              </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Journal() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="journal" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-violet/10 blur-[180px]" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div style={{ animation: "fade-up 1s ease-out 0.1s both" }}>
              <SectionLabel icon={<PenLine className="w-3.5 h-3.5" />}>{t.journal.label}</SectionLabel>
            </div>
            <h2 className="font-display text-5xl md:text-6xl mt-6 text-gradient leading-tight" style={{ animation: "fade-up 1s ease-out 0.2s both" }}>
              {t.journal.title1}<span className="italic text-gradient-violet">{t.journal.titleHighlight}</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-base leading-relaxed" style={{ animation: "fade-up 1s ease-out 0.3s both" }}>
            {t.journal.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.journal.writings.map((w, i) => (
            <a 
              href="#journal"
              onClick={(e) => {
                e.preventDefault();
                toast.success(t.journal.toastTitle, {
                  description: `"${w.title}" ${t.journal.toastDesc}`
                });
              }}
              key={w.title}
              className="relative rounded-[28px] overflow-hidden group block cursor-pointer"
              style={{ animation: `fade-up 0.8s ease-out ${0.1 + i * 0.1}s both` }}
            >
              {/* Card background */}
              <img src="/cards bg.webp" alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" />
              
              <div className="relative w-full h-full liquid-glass p-8 flex flex-col justify-between min-h-[380px]">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="liquid-glass inline-flex items-center rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-foreground/90">
                      {w.category}
                    </div>
                    <span className="text-xs text-foreground/50 font-body uppercase tracking-wider">{w.date}</span>
                  </div>
                  
                  <h3 className="font-heading text-3xl tracking-[-0.5px] leading-tight text-foreground mb-4 group-hover:text-lavender transition-colors">
                    {w.title}
                  </h3>
                  <p className="font-body font-light text-[15px] leading-relaxed text-foreground/80 italic">
                    "{w.excerpt}"
                  </p>
                </div>
                
                <div className="mt-10 flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium text-lavender group-hover:text-white transition-colors w-fit">
                  <span className="border-b border-lavender/30 pb-0.5 group-hover:border-white/50 transition-colors">{t.journal.read}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="manifesto" className="relative py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-cosmic opacity-80" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/15 blur-[180px]" />
      <div className="relative max-w-4xl mx-auto text-center">
        <div style={{ animation: "fade-up 1s ease-out 0.1s both" }}>
          <SectionLabel icon={<Moon className="w-3.5 h-3.5" />}>{t.manifesto.label}</SectionLabel>
        </div>
        <div className="mt-10 relative" style={{ animation: "fade-up 1s ease-out 0.2s both" }}>
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 font-display text-[200px] leading-none text-primary/20 select-none">“</div>
          <p className="font-display italic text-3xl md:text-5xl leading-[1.3] text-gradient relative">
            {t.manifesto.q1}<br />
            {t.manifesto.q2}<br />
            <span className="text-gradient-violet">{t.manifesto.q3}</span>
          </p>
        </div>
        <p className="text-muted-foreground mt-12 max-w-xl mx-auto leading-relaxed" style={{ animation: "fade-up 1s ease-out 0.3s both" }}>
          {t.manifesto.p1}
          <br /><br />
          {t.manifesto.p2}
        </p>
        <div className="mt-12 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-lavender to-transparent animate-shimmer-line" />
        <p className="mt-6 text-xs uppercase tracking-[0.4em] text-lavender/80" style={{ animation: "fade-up 1s ease-out 0.4s both" }}>{t.manifesto.author}</p>
      </div>
    </section>
  );
}

function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="contact" className="relative py-40 px-6 overflow-hidden">
      {/* Looping video background for footer section */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/footer bg .mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Dark overlay so the card and text stand out */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Seamless fade gradient at the top boundary */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
      
      <div className="relative max-w-5xl mx-auto z-10">
        <div className="relative rounded-3xl liquid-glass p-12 md:p-20 overflow-hidden moonlight-ring" style={{ animation: "fade-up 1s ease-out 0.1s both" }}>
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/25 blur-[120px]" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-indigo/30 blur-[120px]" />
          <div className="relative">
            <SectionLabel icon={<Mail className="w-3.5 h-3.5" />}>{t.contact.label}</SectionLabel>
            <h2 className="font-display text-5xl md:text-7xl mt-8 text-gradient leading-tight max-w-3xl" style={{ animation: "fade-up 1s ease-out 0.2s both" }}>
              {t.contact.title1}<span className="italic text-gradient-violet">{t.contact.titleHighlight}</span>
            </h2>
            <p className="text-muted-foreground mt-6 max-w-xl text-lg" style={{ animation: "fade-up 1s ease-out 0.3s both" }}>
              {t.contact.desc}
            </p>

            <div className="mt-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-12" style={{ animation: "fade-up 1s ease-out 0.4s both" }}>
              <a href="mailto:hello@ayabenmaamer.com" className="group inline-flex items-center gap-3 font-display text-2xl md:text-3xl text-foreground hover:text-lavender transition-colors">
                hello@ayabenmaamer.com
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            <div className="mt-12 flex items-center gap-3" style={{ animation: "fade-up 1s ease-out 0.5s both" }}>
              <Social href="#" icon={<Instagram className="w-4 h-4" />} label="Instagram" />
              <Social href="#" icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" />
              <Social href="#" icon={<Feather className="w-4 h-4" />} label="Journal" />
            </div>
          </div>
        </div>

        <footer className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground" style={{ animation: "fade-up 1s ease-out 0.6s both" }}>
          <p>© {new Date().getFullYear()} Aya Ben Maamer · {t.contact.f1}</p>
          <p className="font-display italic text-lavender/80">{t.contact.f2}</p>
        </footer>
      </div>
    </section>
  );
}

function Social({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a href={href} aria-label={label} className="w-12 h-12 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/60 hover:shadow-glow transition-all">
      {icon}
    </a>
  );
}

function Home() {
  return (
    <div className="text-foreground overflow-x-hidden relative min-h-screen">
      {/* Global Background Video */}
      <div className="fixed inset-0 z-[-2]">
        <video
          className="w-full h-full object-cover"
          src="/bg website.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      
      {/* Global Color Overlay to keep the original midnight plum mood */}
      <div className="fixed inset-0 z-[-1] bg-background/80 backdrop-blur-[2px]" />

      <Nav />
      <main>
        <Hero />
        <About />
        <Passions />
        <Skills />
        <Journal />
        <Manifesto />
        <Contact />
      </main>
    </div>
  );
}
