import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Banknote, Clock3, Landmark, Gauge, Sparkles } from "lucide-react";
import { Reveal, Kicker, SectionTitle, Marquee, accentStyles } from "../components/ui";
import { playbooks } from "../data/playbooks";
import { professions } from "../data/professions";
import type { Accent } from "../data/models";

const professionAccents: Accent[] = ["red", "gold", "teal", "green", "purple", "blue", "red", "gold", "teal"];

export default function Playbooks() {
  return (
    <div>
      {/* ------------------------------- HEADER ------------------------------ */}
      <section className="border-b-2 border-ink bg-grid-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <Reveal>
            <Kicker>The Community Build List</Kicker>
            <SectionTitle className="mt-5 text-4xl sm:text-5xl lg:text-6xl">
              Six institutions.
              <br />
              Build them <span className="text-panel-teal">in order of courage.</span>
            </SectionTitle>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
              These are the things Black neighborhoods ask for at every town hall: safe banking,
              books, clean clothes, fresh food, affordable homes, and real care. Each playbook
              includes the legal structure, startup capital, step-by-step build, funding sources,
              and the community extras that make it a cornerstone.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-8 flex flex-wrap gap-3 text-xs font-extrabold uppercase tracking-widest">
              <span className="rounded-full border-2 border-ink bg-panel-green px-4 py-2 text-cream shadow-pop-sm">
                Start this weekend: Food Co-op
              </span>
              <span className="rounded-full border-2 border-ink bg-gold px-4 py-2 text-ink shadow-pop-sm">
                Start this year: Library & Laundromat
              </span>
              <span className="rounded-full border-2 border-ink bg-navy px-4 py-2 text-cream shadow-pop-sm">
                Start this decade: Bank & Land Trust
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee
        items={[
          "Banks that lend here",
          "Libraries that guard our stories",
          "Laundromats with book corners",
          "Co-ops that feed the block",
          "Land trusts that hold the deed",
          "Health hubs that heal",
        ]}
      />

      {/* -------------------------------- GRID ------------------------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {playbooks.map((p, i) => {
            const a = accentStyles[p.accent];
            const Icon = p.icon;
            return (
              <Reveal key={p.slug} delay={i * 0.05}>
                <Link to={`/playbooks/${p.slug}`} className="group block h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-[26px] border-2 border-ink bg-paper shadow-pop transition-transform duration-300 group-hover:-translate-y-1.5">
                    <div className={`flex items-center justify-between border-b-2 border-ink px-7 py-6 ${a.panel}`}>
                      <div>
                        <p className={`text-[11px] font-extrabold uppercase tracking-[0.24em] ${a.on} opacity-80`}>
                          Playbook {String(i + 1).padStart(2, "0")}
                        </p>
                        <h2 className={`mt-1 font-display text-2xl leading-tight ${a.on}`}>
                          {p.title}
                        </h2>
                      </div>
                      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border-2 border-ink bg-paper shadow-pop-sm">
                        <Icon size={26} className="text-ink" />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <p className="font-accent text-lg italic text-ink/60">{p.tagline}</p>
                      <div className="mt-6 grid gap-2.5 text-sm sm:grid-cols-2">
                        <div className="flex items-start gap-2.5 rounded-xl border-2 border-ink/10 bg-sand px-3.5 py-2.5">
                          <Banknote size={16} className="mt-0.5 shrink-0 text-ink/50" />
                          <span className="font-semibold text-ink/80">{p.capital}</span>
                        </div>
                        <div className="flex items-start gap-2.5 rounded-xl border-2 border-ink/10 bg-sand px-3.5 py-2.5">
                          <Clock3 size={16} className="mt-0.5 shrink-0 text-ink/50" />
                          <span className="font-semibold text-ink/80">{p.timeline}</span>
                        </div>
                        <div className="flex items-start gap-2.5 rounded-xl border-2 border-ink/10 bg-sand px-3.5 py-2.5">
                          <Landmark size={16} className="mt-0.5 shrink-0 text-ink/50" />
                          <span className="font-semibold text-ink/80">{p.structure}</span>
                        </div>
                        <div className="flex items-start gap-2.5 rounded-xl border-2 border-ink/10 bg-sand px-3.5 py-2.5">
                          <Gauge size={16} className="mt-0.5 shrink-0 text-ink/50" />
                          <span className="font-semibold text-ink/80">Difficulty: {p.effort}</span>
                        </div>
                      </div>
                      <span className="mt-6 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.2em]">
                        Read the full playbook
                        <ArrowUpRight
                          size={16}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </div>
                  </article>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-14">
          <div className="overflow-hidden rounded-[26px] border-2 border-ink bg-ink text-cream shadow-pop-lg">
            <div className="grid items-center gap-6 p-8 sm:p-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="font-display text-xs uppercase tracking-[0.3em] text-gold">
                  Pro move
                </p>
                <h3 className="mt-3 font-display text-2xl leading-tight sm:text-3xl">
                  The playbooks fund each other.
                </h3>
                <p className="mt-4 max-w-2xl text-cream/70">
                  The CDFI you charter in the bank playbook writes the laundromat loan. The land
                  trust holds the co-op's deed. The library runs literacy hours inside the
                  laundromat. Build one, and the second gets cheaper.
                </p>
              </div>
              <Link
                to="/wealth"
                className="inline-flex items-center gap-2 rounded-full border-2 border-gold bg-gold px-7 py-3.5 font-display text-sm tracking-wide text-ink transition-transform hover:-translate-y-1"
              >
                SEE THE WEALTH FRAMEWORK <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ------------------------- OPPORTUNITY INDEX ------------------------ */}
      <section id="opportunity-index" className="scroll-mt-24 border-t-2 border-ink bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <Reveal className="max-w-3xl">
            <Kicker>The Opportunity Index</Kicker>
            <SectionTitle>
              Nine more main-street moves
              <br />
              the block is asking <span className="text-red">for</span>
            </SectionTitle>
            <p className="mt-5 text-lg leading-relaxed text-ink/75">
              Beyond the six full playbooks, these are the professions and businesses Black
              communities consistently say they need nearby — airport runs for elders, rooms to
              celebrate in, and dignified care at life's end. Each runs on the same five legal
              models: an LLC for the shop, a 501(c)(3) for the training arm, a co-op when the
              workers should own it.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {professions.map((p, i) => {
              const a = accentStyles[professionAccents[i % professionAccents.length]];
              const Icon = p.icon;
              return (
                <Reveal key={p.name} delay={(i % 3) * 0.06}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border-2 border-ink bg-paper shadow-pop transition-transform duration-300 hover:-translate-y-1.5">
                    <div className={`h-3 border-b-2 border-ink ${a.panel}`} />
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center justify-between">
                        <span className="grid h-12 w-12 place-items-center rounded-xl border-2 border-ink bg-sand shadow-pop-sm">
                          <Icon size={22} className="text-ink" />
                        </span>
                        <span className={`rounded-full border-2 border-ink px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest ${a.badge}`}>
                          {p.startup}
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-lg leading-tight">{p.name}</h3>
                      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink/70">{p.why}</p>
                      <div className="mt-5 rounded-xl border-2 border-ink/10 bg-sand p-4">
                        <p className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-ink/50">
                          <Sparkles size={12} className="text-gold" /> First move
                        </p>
                        <p className="mt-1.5 text-[13px] font-semibold leading-relaxed text-ink/80">
                          {p.firstMove}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-10">
            <div className="flex flex-col items-start justify-between gap-4 rounded-3xl border-2 border-ink bg-paper p-6 shadow-pop sm:flex-row sm:items-center">
              <p className="max-w-2xl text-sm font-semibold leading-relaxed text-ink/70">
                Any of these can grow into a full playbook. The legal path never changes: pick a
                structure from the five models, license what you offer, and fund it with the same
                CDFI, SBA, and community-capital tools.
              </p>
              <Link
                to="/models"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-ink bg-gold px-6 py-3 text-sm font-bold shadow-pop-sm transition-transform hover:-translate-y-0.5"
              >
                Review the 5 models <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
