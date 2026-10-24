import Motion from "./Motion";

const B = "/juliet-justin-portfolio";

function Sun({ className = "" }: { className?: string }) {
  return (<svg viewBox="0 0 200 200" className={className} aria-hidden><circle cx="100" cy="100" r="92" fill="#ddd5c3" opacity=".75" /><circle className="sun-ring" cx="100" cy="100" r="98" fill="none" stroke="#bdb49c" strokeDasharray="4 5" /></svg>);
}
function Birds({ className = "" }: { className?: string }) {
  return (<svg viewBox="0 0 60 30" className={className} aria-hidden fill="none" stroke="#2b2b2b" strokeWidth="1.4" strokeLinecap="round"><path d="M5 20q4-4 8 0q4-4 8 0" /><path d="M30 8q3-3 6 0q3-3 6 0" /><path d="M44 16q2.5-2.5 5 0q2.5-2.5 5 0" /></svg>);
}
function Tree({ className = "" }: { className?: string }) {
  return (<svg viewBox="0 0 80 100" className={className} aria-hidden fill="#7d7a5a"><rect x="38" y="50" width="4" height="50" /><circle cx="40" cy="35" r="22" /><circle cx="24" cy="45" r="14" /><circle cx="56" cy="44" r="15" /><circle cx="40" cy="18" r="13" /></svg>);
}
function H({ n, t }: { n?: string; t: string }) {
  return (<div className="mb-10" data-reveal><p className="track text-xs text-olive">{n}</p><h2 className="track mt-2 text-2xl font-semibold md:text-3xl">{t}</h2><div className="rule mt-3 h-px w-40 bg-olive" /></div>);
}
function Block({ t, items }: { t: string; items: string[] }) {
  return (<div data-reveal><h3 className="track mb-3 text-sm font-semibold text-olive">{t}</h3><ul className="space-y-2 text-sm leading-relaxed">{items.map((i) => <li key={i}>{i}</li>)}</ul></div>);
}

type Work = { n: string; t: string; tl?: string; s?: string; meta?: string[]; body?: string; quote?: string; imgs: string[]; half?: boolean };
const seq = (k: string, n: number) => Array.from({ length: n }, (_, i) => `${k}-${i + 1}.jpg`);
const works: Work[] = [
  { n: "01", t: "Film Institute", tl: "Thesis", s: "Thesis · Parvai: The Cinematic Continuum", meta: ["Academic Thesis · Chennai, India · 2025–2026", "Site area 13 acres · Built-up area 10,000 sq.m", "Program: Educational + Public", "Software: AutoCAD · SketchUp · Photoshop · Lumion"], quote: "Where Cinema becomes a shared public experience and the story is portrayed through the Director\u2019s lens.", imgs: seq("film-institute", 9) },
  { n: "02", t: "Artist's Residence", s: "Vytilla, Kochi · Area 607 sq.m / 15 cents", body: "A harmonious sanctuary designed for a sand animation artist, where the fluid nature of the craft meets the timeless stability of yurt-inspired architecture. The residence integrates open-plan living with dedicated studio space, utilizing circular geometry with riverfront landscape. Kaniyampuzha River which explores the synergy between an artist\u2019s hobbies and their living space. The design features a guitar-shaped public garden and a greenhouse-integrated corridor, blending nomadic structural wisdom with modern site-specific sustainability.", imgs: seq("artists-residence", 3) },
  { n: "03", t: "Mixed-Use High Rise Building", s: "Vertical Housing", imgs: seq("mixed-use", 3) },
  { n: "04", t: "Housing", s: "Building HIG, MIG, LIG and EWS Houses · Large Scale Project", imgs: seq("housing", 4) },
  { n: "05", t: "Urban Hub", tl: "Time Bound Test", s: "Time Bound Test · Urban Scale Project", imgs: seq("urban-hub", 2) },
  { n: "06", t: "Internship Work", tl: "Selected Works", s: "Selected Works · Asif Rahman Junaid Architects (ARJ+ARCHITECTS)", imgs: seq("internship", 1), half: true },
  { n: "07", t: "Miscellaneous", s: "Canvas Painting · Sketching · Face Mask Painting · Mandala Art · Illustrations · Photography", imgs: seq("miscellaneous", 1), half: true },
];

function Card({ w }: { w: Work }) {
  return (
    <article data-reveal id={`w${w.n}`} className="feature scroll-mt-24 border border-ink/15 bg-paper p-6 md:p-10">
      <div className="flex items-end gap-5"><span className="text-6xl font-bold text-olive md:text-7xl">{w.n}</span><div><h3 className="track text-xl font-semibold">{w.t}</h3>{w.s && <p className="track mt-1 text-[11px] leading-relaxed text-olive">{w.s}</p>}</div></div>
      {w.quote && <p className="mt-6 max-w-3xl text-base italic leading-loose">&ldquo;{w.quote}&rdquo;</p>}
      {w.meta && <ul className="track mt-4 space-y-1 text-[10px] text-ink/70">{w.meta.map((m) => <li key={m}>{m}</li>)}</ul>}
      {w.body && <p className="mt-6 max-w-3xl text-sm leading-loose">{w.body}</p>}
      <div className="mt-8 space-y-6">{w.imgs.map((i, k) => <a key={i} href={`${B}/img/${i}`} target="_blank" rel="noreferrer" data-reveal className="sheet block overflow-hidden border border-ink/10"><img src={`${B}/img/${i}`} alt={`${w.t} — sheet ${k + 1}`} loading="lazy" decoding="async" className="w-full" /></a>)}</div>
      <p className="track mt-3 text-[9px] text-ink/50">Click a sheet to view full size</p>
    </article>
  );
}

export default function Page() {
  return (
    <main className="overflow-hidden">
      <Motion />
      <div id="progress" aria-hidden className="fixed inset-x-0 top-0 z-30 h-0.5 origin-left scale-x-0 bg-olive" />
      <nav id="nav" className="fixed transition-shadow duration-300 inset-x-0 top-0 z-20 border-b border-ink/10 bg-paper/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="track text-xs font-semibold">Juliet Justin</a>
          <div className="track hidden gap-6 text-[10px] md:flex">{["About", "Profile", "Works", "Contact"].map((x) => <a key={x} href={`#${x.toLowerCase()}`} data-navlink className="navlink hover:text-olive">{x}</a>)}</div>
        </div>
      </nav>

      <section id="top" className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-8 px-6 pt-24 md:grid-cols-2">
        <div className="hero-glow" aria-hidden />
        <div className="sun-float pointer-events-none absolute right-[8%] top-24 w-72 md:w-[26rem]"><Sun className="w-full" /></div>
        <Birds className="birds absolute right-[12%] top-28 w-20" />
        <div className="relative z-10">
          <p className="hero-in track text-lg md:text-2xl" style={{ animationDelay: ".1s" }}>Architectural</p>
          <h1 style={{ animationDelay: ".25s" }} className="hero-in text-5xl font-bold tracking-[0.2em] md:text-7xl">PORTFOLIO</h1>
          <div className="hero-rule my-5 h-0.5 w-full origin-left bg-olive" />
          <p className="hero-in track text-xs" style={{ animationDelay: ".6s" }}>Selected Works 2019 – 2026</p>
          <div style={{ animationDelay: ".8s" }} className="hero-in mt-16 border-l-2 border-olive pl-4"><p className="track text-sm font-semibold">Juliet Justin</p><p className="track mt-1 text-[11px] text-olive">Architectural Designer</p></div>
        </div>
        <img src={`${B}/img/hero-building.jpg`} alt="Section illustration of a building from Juliet Justin's portfolio cover" className="hero-img relative z-10 w-full mix-blend-multiply" />
      </section>

      <section id="about" className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[320px_1fr]">
        <div data-reveal className="portrait group relative mx-auto w-64 md:w-full"><div className="portrait-back absolute -bottom-4 -right-4 h-full w-full bg-[#4a3a20]" /><img src={`${B}/img/juliet.jpg`} alt="Portrait of Juliet Justin" className="relative w-full transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1" /></div>
        <div className="self-center">
          <H n="About" t="Juliet Justin" />
          <p data-reveal className="text-base leading-loose tracking-wide">I am an aspiring Architect who has a constant admiration for colours and materials and who is driven by curiosity, creativity and a passion for thoughtful design.</p>
          <blockquote data-reveal className="mt-8 border-l-2 border-olive pl-6 text-base italic leading-loose text-ink/80">&ldquo;I see Architecture as a process of constant questioning of space, function and experience. I enjoy experimenting with ideas, refining details and learning through making. With a strong interest in thoughtful, people-centered design, I&rsquo;m looking forward to contributing to a studio where curiosity and craft are valued.&rdquo;</blockquote>
        </div>
      </section>

      <section id="profile" className="border-y border-ink/10 bg-sand/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <H n="Profile" t="Education & Experience" />
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <Block t="Education" items={["School — United Indian School, Kuwait (2005–2019)", "Under Graduation — Asian School of Architecture and Design Innovation, Kochi, Kerala (2019–2024 Batch)"]} />
            <Block t="Work Experience" items={["Internship at Asif Rahman Junaid Architects (ARJ+ARCHITECTS), 2023"]} />
            <Block t="Workshops" items={["Parametric Modeling and 3D Printing Workshop — Ar. Liya Sunny", "Uravu and the Collective Vertical Studio Workshop (2019)", "Kaarwan BIM Workshop (2025)"]} />
            <Block t="Attended" items={["Seminar on Energy Conservation Building Code and Eco Nivas Samhitha — organised by EMC", "ASADI Plus Focus", "Young Architects Festival Crossroads (2022)", "Zonal NASA (2019)"]} />
            <Block t="Personal Skills" items={["Critical Thinking", "Team work", "Competitive and Motivating", "Flexibility"]} />
            <div className="space-y-10" data-reveal>
              <div><h3 className="track mb-3 text-sm font-semibold text-olive">Technical Skills</h3><div className="flex flex-wrap gap-2">{["AutoCAD", "SketchUp", "Revit", "Photoshop", "Illustration", "PowerPoint", "Lumion"].map((s) => <span key={s} className="chip border border-ink/25 px-3 py-1 text-xs tracking-wider">{s}</span>)}</div></div>
              <div><h3 className="track mb-3 text-sm font-semibold text-olive">Interests</h3><p className="text-sm tracking-wide">Travelling · Photography · Dance · Music · Movies · Sketching</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="works" className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="sun-float pointer-events-none absolute -right-24 -top-10 w-72 opacity-80"><Sun className="w-full" /></div>
        <Birds className="birds absolute right-16 top-16 w-16" />
        <H n="Contents" t="Works" />
        <div data-reveal className="timeline relative mb-20 hidden md:block">
          <div className="tl-line absolute inset-x-0 top-[3.35rem] h-px origin-left bg-ink/60" />
          <div className="grid grid-cols-7 text-center">{works.map((w) => (
            <a key={w.n} href={`#w${w.n}`} className="tl-item group relative">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-sand text-sm font-semibold tracking-widest transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-olive group-hover:text-paper">{w.n}</span>
              <span className="mx-auto mt-1 block h-3 w-3 rounded-full bg-olive transition-transform duration-300 group-hover:scale-150" />
              <span className="track mt-3 block px-1 text-[10px] font-semibold leading-relaxed group-hover:text-olive">{w.t}</span>
              {w.tl && <span className="track block text-[9px] text-olive">({w.tl})</span>}
            </a>))}</div>
        </div>
        <div className="space-y-10">{works.filter((w) => !w.half).map((w) => <Card key={w.n} w={w} />)}
          <div className="grid gap-10 md:grid-cols-2">{works.filter((w) => w.half).map((w) => <Card key={w.n} w={w} />)}</div>
        </div>
      </section>

      <section id="contact" className="relative border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
          <H n="Get in touch" t="Contact" />
          <div data-reveal className="space-y-3 text-sm tracking-wide">
            <p><a className="hover:text-olive" href="tel:+916238627523">+91 6238627523</a></p>
            <p><a className="hover:text-olive" href="mailto:julietj2113@gmail.com">julietj2113@gmail.com</a></p>
            <p><a className="hover:text-olive" href="https://www.behance.net/juliet-justin" target="_blank" rel="noreferrer">behance.net/juliet-justin</a></p>
          </div>
        </div>
        <div className="flex items-end justify-between px-6"><Tree className="w-20" /><Tree className="w-12" /></div>
        <div className="h-px bg-ink/40" />
        <p className="track py-6 text-center text-[10px] text-ink/60">© 2026 Juliet Justin · Architectural Designer</p>
      </section>
    </main>
  );
}
