import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Feather, Moon, Sparkles, Leaf, Brain, Swords, Compass, TrendingUp,
  PenLine, Layers, Target, Crown, Lightbulb, Eye, Mail, Instagram, Linkedin, ArrowUpRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayaben Meamer — Poetry, Strategy, Quiet Power" },
      { name: "description", content: "The personal world of Ayaben Meamer — where editorial elegance meets cinematic darkness, strategy meets poetry, and ambition learns to whisper." },
    ],
  }),
  component: Home,
});

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3 backdrop-blur-xl bg-background/70 border-b border-border/40" : "py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-wide text-gradient">Ayaben<span className="text-primary"> · </span>Meamer</a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#passions" className="hover:text-foreground transition-colors">Passions</a>
          <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
          <a href="#manifesto" className="hover:text-foreground transition-colors">Manifesto</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground border border-border/60 hover:border-primary/60 rounded-full px-5 py-2.5 transition-all">
          Reach Out <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden noise">
      <div className="absolute inset-0 bg-cosmic" />
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[140px] animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo/30 blur-[160px]" />
      <div className="absolute top-20 right-1/4 w-2 h-2 rounded-full bg-moonlight/80 shadow-moon" />
      <div className="absolute top-40 left-1/3 w-1 h-1 rounded-full bg-moonlight/60" />
      <div className="absolute bottom-32 left-20 w-1.5 h-1.5 rounded-full bg-lavender/70" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-4xl animate-fade-up">
          <div className="flex items-center gap-3 mb-8 text-muted-foreground text-xs uppercase tracking-[0.4em]">
            <Moon className="w-4 h-4 text-lavender" />
            <span>A Personal Brand · Est. 2026</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight">
            <span className="text-gradient">Ayaben</span>
            <br />
            <span className="italic text-gradient-violet font-light">Meamer.</span>
          </h1>
          <p className="font-display italic text-2xl md:text-3xl text-lavender/90 mt-10 max-w-2xl leading-relaxed">
            “Born from silence, sharpened by depth — a quiet mind that builds loud futures.”
          </p>
          <p className="text-muted-foreground mt-8 max-w-xl text-lg leading-relaxed">
            Strategist by craft, poet by nature. I shape ideas the way moonlight shapes water —
            softly, deliberately, with an ambition that does not need to shout.
          </p>
          <div className="flex flex-wrap gap-4 mt-12">
            <a href="#about" className="group relative inline-flex items-center gap-2 px-7 py-4 rounded-full bg-violet-gradient text-primary-foreground text-sm tracking-wide shadow-glow hover:shadow-moon transition-all">
              Explore My World <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href="#manifesto" className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass text-foreground text-sm tracking-wide hover:border-primary/40 transition-all">
              Read My Vision
            </a>
            <a href="#passions" className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-muted-foreground hover:text-foreground text-sm tracking-wide transition-all">
              View My Work →
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 right-6 hidden lg:flex flex-col items-end gap-3 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-lavender/50 to-transparent" />
          <span>Scroll to descend</span>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-4">
          <SectionLabel icon={<Eye className="w-3.5 h-3.5" />}>01 · About</SectionLabel>
          <h2 className="font-display text-5xl md:text-6xl mt-6 text-gradient leading-tight">
            A woman of <span className="italic text-gradient-violet">depth</span> & design.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Trained in <span className="text-foreground">Business Administration</span> and
            <span className="text-foreground"> Human Resources Management</span>, I learned early
            that structure is its own kind of poetry — that systems, like sentences, can be
            written with grace.
          </p>
          <p>
            My world lives between two languages: the language of <em className="text-lavender font-display not-italic-display">strategy</em> —
            of plans, frameworks, people, and patient growth — and the language of
            <em className="text-lavender"> art</em> — of poetry, drawing, nature, and the quiet
            psychology of being human.
          </p>
          <p>
            I am drawn to depth over noise, to mystery over spectacle, to characters who fight
            with stillness and lead without raising their voice. This is the brand I am
            building — a presence that is at once a strategist and a soft revolution.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/40">
            <Stat k="GRH" v="Business · HR" />
            <Stat k="Lens" v="Strategic" />
            <Stat k="Voice" v="Poetic" />
          </div>
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
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass text-[10px] uppercase tracking-[0.35em] text-lavender">
      {icon}
      {children}
    </div>
  );
}

const passions = [
  { icon: PenLine, title: "Writing", text: "Sentences that linger like incense in a quiet room." },
  { icon: Feather, title: "Poetry", text: "Where logic surrenders to rhythm, and meaning finds its silk." },
  { icon: Sparkles, title: "Drawing", text: "Lines as breath — drafting feelings the words cannot reach." },
  { icon: Leaf, title: "Nature", text: "Forests, oceans, dusk — my favorite cathedrals." },
  { icon: Brain, title: "Psychology", text: "The architecture of why we are the way we are." },
  { icon: Swords, title: "K-Drama Action", text: "Heroes who fight calmly. Stillness as the loudest weapon." },
  { icon: Compass, title: "Entrepreneurship", text: "Turning vision into structure, structure into legacy." },
  { icon: TrendingUp, title: "Strategic Growth", text: "Slow compounding moves that bend the long arc." },
];

function Passions() {
  return (
    <section id="passions" className="relative py-32 px-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-20">
          <SectionLabel icon={<Sparkles className="w-3.5 h-3.5" />}>02 · Passions</SectionLabel>
          <h2 className="font-display text-5xl md:text-6xl mt-6 text-gradient leading-tight">
            The worlds I <span className="italic text-gradient-violet">live inside.</span>
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            A constellation of obsessions — each one a small light that, together,
            describes a single sky.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 rounded-3xl overflow-hidden">
          {passions.map((p) => (
            <article key={p.title} className="group relative bg-card p-8 hover:bg-card/40 transition-all duration-700">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow duration-700">
                  <p.icon className="w-5 h-5 text-lavender" />
                </div>
                <h3 className="font-display text-2xl text-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const skills = [
  { icon: Layers, title: "Project Management", text: "Composing moving parts into one elegant motion." },
  { icon: Compass, title: "Organization & Administration", text: "Calm order beneath ambitious complexity." },
  { icon: Target, title: "Strategic Thinking", text: "Reading the board three moves before the room." },
  { icon: Crown, title: "Leadership", text: "Quiet authority. Decisions made with care, held with steel." },
  { icon: TrendingUp, title: "Entrepreneurial Mindset", text: "Building from instinct, scaling with intention." },
  { icon: Feather, title: "Creative Expression", text: "Translating inner worlds into shared language." },
  { icon: Brain, title: "Psychological Insight", text: "Understanding people as the highest form of strategy." },
  { icon: Lightbulb, title: "Vision Crafting", text: "Holding the long view when others lose the horizon." },
];

function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[160px]" />
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <SectionLabel icon={<Target className="w-3.5 h-3.5" />}>03 · Skills</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl mt-6 text-gradient leading-tight">
              Craft, sharpened <span className="italic text-gradient-violet">into instinct.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-base leading-relaxed">
            Where business meets art, where structure meets feeling — this is the
            inventory of how I work, lead and create.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {skills.map((s, i) => (
            <div key={s.title} className="group relative flex items-start gap-6 p-8 rounded-2xl glass moonlight-ring hover:border-primary/40 transition-all duration-500">
              <div className="font-display text-3xl text-primary/60 w-10">{String(i + 1).padStart(2, "0")}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <s.icon className="w-4 h-4 text-lavender" />
                  <h3 className="font-display text-xl">{s.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section id="manifesto" className="relative py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-cosmic opacity-80" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/15 blur-[180px]" />
      <div className="relative max-w-4xl mx-auto text-center">
        <SectionLabel icon={<Moon className="w-3.5 h-3.5" />}>04 · Manifesto</SectionLabel>
        <div className="mt-10 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 font-display text-[200px] leading-none text-primary/20 select-none">“</div>
          <p className="font-display italic text-3xl md:text-5xl leading-[1.3] text-gradient relative">
            I do not chase the light.<br />
            I become the room<br />
            <span className="text-gradient-violet">where it learns to stay.</span>
          </p>
        </div>
        <p className="text-muted-foreground mt-12 max-w-xl mx-auto leading-relaxed">
          I believe in ambition that whispers, in beauty that is also armor, and in the quiet
          discipline of building a life with the same care a poet brings to a single line.
          <br /><br />
          Mystery is not the absence of clarity — it is clarity, refined until only the
          essential remains.
        </p>
        <div className="mt-12 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-lavender to-transparent animate-shimmer-line" />
        <p className="mt-6 text-xs uppercase tracking-[0.4em] text-lavender/80">— Ayaben Meamer</p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl glass p-12 md:p-20 overflow-hidden moonlight-ring">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/25 blur-[120px]" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-indigo/30 blur-[120px]" />
          <div className="relative">
            <SectionLabel icon={<Mail className="w-3.5 h-3.5" />}>05 · Contact</SectionLabel>
            <h2 className="font-display text-5xl md:text-7xl mt-8 text-gradient leading-tight max-w-3xl">
              Let us build something <span className="italic text-gradient-violet">quietly magnificent.</span>
            </h2>
            <p className="text-muted-foreground mt-6 max-w-xl text-lg">
              For collaborations, conversations, or simply to share a beautiful idea —
              the door is open.
            </p>

            <div className="mt-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
              <a href="mailto:hello@ayabenmeamer.com" className="group inline-flex items-center gap-3 font-display text-2xl md:text-3xl text-foreground hover:text-lavender transition-colors">
                hello@ayabenmeamer.com
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            <div className="mt-12 flex items-center gap-3">
              <Social href="#" icon={<Instagram className="w-4 h-4" />} label="Instagram" />
              <Social href="#" icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" />
              <Social href="#" icon={<Feather className="w-4 h-4" />} label="Journal" />
            </div>
          </div>
        </div>

        <footer className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Ayaben Meamer · Crafted in moonlight.</p>
          <p className="font-display italic text-lavender/80">“Soft power. Sharp mind. Steady soul.”</p>
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
    <div className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <About />
        <Passions />
        <Skills />
        <Manifesto />
        <Contact />
      </main>
    </div>
  );
}
