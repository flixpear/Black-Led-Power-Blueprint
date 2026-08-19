import { Link } from "react-router-dom";
import { ArrowRight, Download, Info, ScrollText, ExternalLink } from "lucide-react";
import { Reveal, Kicker, SectionTitle, Marquee, accentStyles } from "../components/ui";
import { models } from "../data/models";

export default function Models() {
  return (
    <div>
      {/* ------------------------------- HEADER ------------------------------ */}
      <section className="border-b-2 border-ink bg-grid-paper">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_240px] lg:py-20">
          <Reveal>
            <Kicker>Legally-Recognized Structures</Kicker>
            <SectionTitle className="mt-5 text-4xl sm:text-5xl lg:text-6xl">
              The Five Models of
              <br />
              <span className="text-red">Black-Led Power</span>
            </SectionTitle>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
              Every movement needs infrastructure. These are the five legal structures — from
              charities to cooperatives — that turn passion into durable, fundable, ownable
              community institutions. Each panel below expands the original flyer with formation
              steps and compliance notes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {models.map((m) => {
                const a = accentStyles[m.accent];
                return (
                  <a
                    key={m.id}
                    href={`#${m.id}`}
                    className={`rounded-full border-2 border-ink px-4 py-2 text-xs font-extrabold uppercase tracking-widest shadow-pop-sm transition-transform hover:-translate-y-0.5 ${a.badge}`}
                  >
                    {m.number} · {m.nickname.replace("The ", "").replace(" Model", "")}
                  </a>
                );
              })}
            </div>
          </Reveal>
          <Reveal delay={0.15} className="hidden lg:block">
            <a href="/images/upload_1.png" target="_blank" rel="noreferrer" className="group relative block">
              <div className="absolute -inset-2 rotate-3 rounded-2xl border-2 border-ink bg-honey" />
              <img
                src="/images/upload_1.png"
                alt="The original Building Black-Led Power flyer"
                className="relative w-full rotate-[-2deg] rounded-xl border-2 border-ink shadow-pop transition-transform duration-300 group-hover:rotate-0"
              />
              <span className="absolute -bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border-2 border-ink bg-paper px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-widest shadow-pop-sm">
                <ScrollText size={12} /> The flyer that started it
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------- PANELS ------------------------------ */}
      <div className="mx-auto max-w-7xl space-y-14 px-4 py-16 sm:px-6 lg:py-20">
        {models.map((m, i) => {
          const a = accentStyles[m.accent];
          const Icon = m.icon;
          const flip = i % 2 === 1;
          return (
            <Reveal key={m.id} y={40}>
              <article
                id={m.id}
                className="scroll-mt-28 overflow-hidden rounded-[28px] border-2 border-ink bg-paper shadow-pop-lg"
              >
                {/* Panel header */}
                <header className={`border-b-2 border-ink px-6 py-6 sm:px-8 ${a.panel}`}>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className={`font-display text-5xl sm:text-6xl ${a.on} opacity-50`}>
                        {m.number}
                      </span>
                      <div>
                        <p className={`text-[11px] font-extrabold uppercase tracking-[0.24em] ${a.on} opacity-80`}>
                          {m.nickname}
                        </p>
                        <h2 className={`font-display text-xl leading-tight sm:text-2xl ${a.on}`}>
                          {m.name}
                        </h2>
                      </div>
                    </div>
                    <span className="grid h-14 w-14 place-items-center rounded-2xl border-2 border-ink bg-paper shadow-pop-sm">
                      <Icon size={26} className="text-ink" />
                    </span>
                  </div>
                </header>

                {/* Panel body */}
                <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2">
                  <div className={flip ? "lg:order-2" : ""}>
                    <p className="text-lg leading-relaxed text-ink/80">{m.summary}</p>
                    <h3 className="mt-7 font-display text-xs uppercase tracking-[0.24em] text-ink/50">
                      Best for
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {m.bestFor.map((b) => (
                        <span
                          key={b}
                          className={`rounded-full border-2 border-ink px-3.5 py-1.5 text-xs font-bold ${a.soft}`}
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                    <div className="mt-7 flex items-start gap-3 rounded-2xl border-2 border-ink bg-sand p-5">
                      <Info size={18} className="mt-0.5 shrink-0 text-red" />
                      <div>
                        <p className="font-display text-xs uppercase tracking-[0.2em]">Good to know</p>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink/75">{m.goodToKnow}</p>
                      </div>
                    </div>
                  </div>

                  <div className={flip ? "lg:order-1" : ""}>
                    <h3 className="font-display text-xs uppercase tracking-[0.24em] text-ink/50">
                      How to form one
                    </h3>
                    <ol className="mt-4 space-y-3">
                      {m.howToForm.map((step, si) => (
                        <li key={si} className="flex items-start gap-3">
                          <span
                            className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-ink font-display text-[11px] shadow-pop-sm ${a.badge}`}
                          >
                            {si + 1}
                          </span>
                          <span className="text-[15px] leading-relaxed text-ink/80">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Panel footer strip — like the flyer */}
                <footer className="border-t-2 border-ink bg-ink px-6 py-3.5 sm:px-8">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-cream/70">
                    Examples:{" "}
                    <span className="text-gold">{m.examples.join("  ·  ")}</span>
                  </p>
                </footer>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* ------------------------------ CTA BAND ----------------------------- */}
      <Marquee
        items={[
          "Serve — 501(c)(3)",
          "Own — CDCs & Land Trusts",
          "Advocate — 501(c)(4) & PACs",
          "Care — Mutual Aid",
          "Build — Chambers & Co-ops",
        ]}
        dark
      />
      <section className="bg-navy text-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">
              Structure chosen? Time to pick your
              <span className="text-gold"> build.</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-cream/70">
              The playbooks apply these legal models to the real world: a bank, a library, a
              laundromat, a food co-op, a land trust, and a health hub — costs, steps, and funding
              sources included.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-wrap gap-4 lg:justify-end">
            <Link
              to="/playbooks"
              className="inline-flex items-center gap-2 rounded-full border-2 border-gold bg-gold px-7 py-3.5 font-display text-sm tracking-wide text-ink shadow-[6px_6px_0_0_rgba(250,243,230,0.25)] transition-transform hover:-translate-y-1"
            >
              OPEN THE PLAYBOOKS <ArrowRight size={17} />
            </Link>
            <a
              href="/images/upload_1.png"
              download="building-black-led-power-flyer.png"
              className="inline-flex items-center gap-2 rounded-full border-2 border-cream/40 px-7 py-3.5 font-display text-sm tracking-wide text-cream transition-colors hover:border-cream"
            >
              <Download size={16} /> SHARE THE FLYER
            </a>
          </Reveal>
        </div>
      </section>

      {/* Quick note on combining models */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "They stack.",
                body: "A CDC can own the building, a 501(c)(3) can run the programs inside it, and a mutual-aid pod can staff the fridge in the lobby. Most thriving Black institutions layer two or three models at once.",
                accent: "bg-panel-blue",
              },
              {
                title: "They feed each other.",
                body: "Chambers grow businesses that banks finance; land trusts hold the property those businesses lease; 501(c)(4)s fight for the policies that fund it all. The ecosystem is the strategy.",
                accent: "bg-gold",
              },
              {
                title: "They outlive us.",
                body: "Legal structures hold deeds, endowments, and charters that survive any individual. That is the difference between a moment and an institution — and between wealth that visits and wealth that stays.",
                accent: "bg-panel-green",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="overflow-hidden rounded-3xl border-2 border-ink bg-paper shadow-pop"
              >
                <div className={`h-3 border-b-2 border-ink ${c.accent}`} />
                <div className="p-6">
                  <h3 className="font-display text-2xl">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <div className="flex flex-col items-start justify-between gap-4 rounded-3xl border-2 border-dashed border-ink/40 bg-sand p-6 sm:flex-row sm:items-center">
            <p className="text-sm font-semibold text-ink/70">
              Want to see real formations in action? Browse 30+ national organizations using these
              exact models.
            </p>
            <Link
              to="/get-involved"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-ink bg-ink px-6 py-3 text-sm font-bold text-cream shadow-pop-sm transition-transform hover:-translate-y-0.5"
            >
              Browse organizations <ExternalLink size={15} />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
