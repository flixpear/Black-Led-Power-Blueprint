import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Banknote,
  Clock3,
  Landmark,
  Gauge,
  Coins,
  Sparkles,
  ExternalLink,
  TriangleAlert,
} from "lucide-react";
import { Reveal, accentStyles } from "../components/ui";
import { playbooks } from "../data/playbooks";

export default function PlaybookDetail() {
  const { slug } = useParams();
  const index = playbooks.findIndex((p) => p.slug === slug);
  if (index === -1) return <Navigate to="/playbooks" replace />;
  const p = playbooks[index];
  const a = accentStyles[p.accent];
  const Icon = p.icon;
  const next = playbooks[(index + 1) % playbooks.length];
  const nextA = accentStyles[next.accent];
  const NextIcon = next.icon;

  const facts = [
    { icon: Banknote, label: "Startup capital", value: p.capital },
    { icon: Clock3, label: "Timeline", value: p.timeline },
    { icon: Landmark, label: "Legal structure", value: p.structure },
    { icon: Gauge, label: "Difficulty", value: p.effort },
  ];

  return (
    <div>
      {/* ------------------------------- HERO -------------------------------- */}
      <section className={`border-b-2 border-ink ${a.panel}`}>
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:pb-16 lg:pt-10">
          <Link
            to="/playbooks"
            className={`inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-ink shadow-pop-sm transition-transform hover:-translate-y-0.5`}
          >
            <ArrowLeft size={14} /> All playbooks
          </Link>
          <div className="mt-10 flex flex-wrap items-start justify-between gap-6">
            <Reveal>
              <p className={`text-xs font-extrabold uppercase tracking-[0.3em] ${a.on} opacity-80`}>
                Playbook {String(index + 1).padStart(2, "0")}
              </p>
              <h1 className={`mt-3 max-w-3xl font-display text-4xl leading-[1.02] sm:text-5xl lg:text-6xl ${a.on}`}>
                {p.title}
              </h1>
              <p className={`mt-4 max-w-2xl font-accent text-xl italic ${a.on} opacity-90`}>
                {p.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="grid h-20 w-20 place-items-center rounded-3xl border-2 border-ink bg-paper shadow-pop sm:h-28 sm:w-28">
                <Icon className="h-9 w-9 text-ink sm:h-12 sm:w-12" />
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------- FACTS ------------------------------- */}
      <section className="border-b-2 border-ink bg-sand">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.05}>
              <div className="flex h-full items-start gap-3 rounded-2xl border-2 border-ink bg-paper p-4 shadow-pop-sm">
                <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg border-2 border-ink shadow-pop-sm ${a.badge}`}>
                  <f.icon size={16} />
                </span>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-ink/50">
                    {f.label}
                  </p>
                  <p className="mt-0.5 text-sm font-bold leading-snug">{f.value}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ----------------------------- OVERVIEW ------------------------------ */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">
              Why this, why now
            </h2>
            <div className="mt-4 h-1.5 w-24 rounded-full bg-gold" />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-5">
              {p.overview.map((para, i) => (
                <p key={i} className="text-lg leading-relaxed text-ink/80">
                  {para}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------- STEPS ------------------------------- */}
      <section className="border-y-2 border-ink bg-navy text-cream">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-20">
          <Reveal className="text-center">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-gold">The build</p>
            <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {p.steps.length} steps from idea
              <br className="hidden sm:block" /> to institution
            </h2>
          </Reveal>
          <div className="mt-12 space-y-5">
            {p.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.04}>
                <div className="group flex gap-5 rounded-2xl border-2 border-cream/15 bg-cream/5 p-5 transition-colors hover:border-gold sm:p-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border-2 border-cream/30 bg-cream/10 font-display text-lg text-gold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg leading-tight sm:text-xl">{s.title}</h3>
                    <p className="mt-2 leading-relaxed text-cream/70">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------- FUNDING + COMMUNITY ----------------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col overflow-hidden rounded-[26px] border-2 border-ink bg-paper shadow-pop">
              <header className="flex items-center gap-3 border-b-2 border-ink bg-gold px-6 py-4">
                <Coins size={20} />
                <h3 className="font-display text-lg">Where the money comes from</h3>
              </header>
              <div className="flex-1 space-y-4 p-6">
                {p.funding.map((f) => (
                  <div key={f.name} className="rounded-xl border-2 border-ink/10 bg-sand p-4">
                    <p className="font-display text-sm uppercase tracking-wide">{f.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">{f.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col overflow-hidden rounded-[26px] border-2 border-ink bg-paper shadow-pop">
              <header className={`flex items-center gap-3 border-b-2 border-ink px-6 py-4 ${a.panel} ${a.on}`}>
                <Sparkles size={20} />
                <h3 className="font-display text-lg">Make it a cornerstone</h3>
              </header>
              <ul className="flex-1 space-y-3 p-6">
                {p.community.map((c) => (
                  <li key={c} className="flex items-start gap-3 rounded-xl border-2 border-ink/10 bg-sand p-4">
                    <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${a.panel}`} />
                    <span className="text-sm font-semibold leading-relaxed text-ink/80">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ RESOURCES ----------------------------- */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">Dig deeper</h2>
          <div className="mt-4 h-1.5 w-24 rounded-full bg-gold" />
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {p.resources.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.05}>
              <a
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="group block h-full rounded-2xl border-2 border-ink bg-paper p-5 shadow-pop-sm transition-transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="font-display text-sm leading-tight">{r.name}</p>
                  <ExternalLink
                    size={15}
                    className="shrink-0 text-ink/40 transition-colors group-hover:text-red"
                  />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{r.body}</p>
                <p className="mt-3 text-[11px] font-bold uppercase tracking-widest text-panel-blue">
                  {r.url.replace("https://", "").replace("www.", "").replace(/\/$/, "")}
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Reality check */}
        <Reveal delay={0.1} className="mt-10">
          <div className="flex items-start gap-4 rounded-[26px] border-2 border-ink bg-red/10 p-6 sm:p-8">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border-2 border-ink bg-red text-cream shadow-pop-sm">
              <TriangleAlert size={20} />
            </span>
            <div>
              <p className="font-display text-xs uppercase tracking-[0.3em] text-red">
                The real talk
              </p>
              <p className="mt-2 text-lg leading-relaxed text-ink/85">{p.realityCheck}</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ------------------------------ NEXT UP ------------------------------- */}
      <section className={`border-t-2 border-ink ${nextA.panel}`}>
        <Link to={`/playbooks/${next.slug}`} className="group block">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 py-12 sm:px-6">
            <div className="flex items-center gap-5">
              <span className="grid h-16 w-16 place-items-center rounded-2xl border-2 border-ink bg-paper shadow-pop">
                <NextIcon size={28} className="text-ink" />
              </span>
              <div>
                <p className={`text-[11px] font-extrabold uppercase tracking-[0.3em] ${nextA.on} opacity-80`}>
                  Next playbook
                </p>
                <p className={`font-display text-2xl leading-tight sm:text-3xl ${nextA.on}`}>
                  {next.title}
                </p>
              </div>
            </div>
            <span className={`inline-flex items-center gap-2 font-display text-sm uppercase tracking-[0.2em] ${nextA.on}`}>
              Keep building
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
            </span>
          </div>
        </Link>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 py-12 sm:px-6">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl">
              No crew yet? <span className="text-gold">Recruit one.</span>
            </h3>
            <p className="mt-2 max-w-xl text-cream/70">
              Every playbook starts with people. Find builders, funders, and mentors in the national
              organizations directory.
            </p>
          </div>
          <Link
            to="/get-involved"
            className="inline-flex items-center gap-2 rounded-full border-2 border-gold bg-gold px-7 py-3.5 font-display text-sm tracking-wide text-ink shadow-[6px_6px_0_0_rgba(250,243,230,0.25)] transition-transform hover:-translate-y-1"
          >
            FIND YOUR PEOPLE <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}
