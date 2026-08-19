import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Download, Sparkles, ChevronRight } from "lucide-react";
import { Reveal, Kicker, SectionTitle, BigStat, Marquee, Starburst, accentStyles } from "../components/ui";
import { models } from "../data/models";
import { playbooks } from "../data/playbooks";

const marqueeItems = [
  "Umoja — Unity",
  "Kujichagulia — Self-Determination",
  "Ujima — Collective Work & Responsibility",
  "Ujamaa — Cooperative Economics",
  "Nia — Purpose",
  "Kuumba — Creativity",
  "Imani — Faith",
];

export default function Home() {
  return (
    <div>
      {/* ------------------------------- HERO ------------------------------- */}
      <section className="relative overflow-hidden bg-grid-paper">
        <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-panel-teal/20 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-24 lg:pt-16">
          <div>
            <Reveal>
              <Kicker>Safe · Legal · Sustainable Community Uplift</Kicker>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-[clamp(2.6rem,7.5vw,5.5rem)] leading-[0.95] tracking-tight">
                BUILDING
                <br />
                <span className="text-red">BLACK-LED</span>
                <br />
                POWER<span className="text-gold">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
                Five legally-recognized models for community uplift — expanded into full playbooks
                for the banks, libraries, laundromats, co-ops, and institutions our neighborhoods
                deserve. Not someday. Starting now.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/models"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-gold px-7 py-3.5 font-display text-sm tracking-wide shadow-pop transition-transform hover:-translate-y-1"
                >
                  EXPLORE THE 5 MODELS <ArrowRight size={17} />
                </Link>
                <Link
                  to="/playbooks"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-ink px-7 py-3.5 font-display text-sm tracking-wide text-cream shadow-pop transition-transform hover:-translate-y-1"
                >
                  OPEN THE PLAYBOOKS
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-10 flex items-center gap-4 text-sm font-bold text-ink/60">
                <div className="flex -space-x-2">
                  {["bg-panel-blue", "bg-gold", "bg-panel-purple", "bg-panel-teal", "bg-panel-green"].map(
                    (c) => (
                      <span
                        key={c}
                        className={`h-8 w-8 rounded-full border-2 border-ink ${c}`}
                      />
                    )
                  )}
                </div>
                <span>5 models · 6 playbooks · 15 more opportunities</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={40}>
            <div className="relative">
              <div className="absolute -inset-3 rotate-2 rounded-[28px] border-2 border-ink bg-honey" />
              <img
                src="/images/hero-community.webp"
                alt="Illustration of a thriving Black neighborhood with a library, laundromat, community bank, and families gardening"
                className="relative w-full rotate-[-1.5deg] rounded-3xl border-2 border-ink object-cover shadow-pop-lg"
              />
              <Starburst className="absolute -right-6 -top-8 h-24 w-24 rotate-12 sm:h-28 sm:w-28">
                Black Wall
                <br />
                Street
              </Starburst>
              <div className="absolute -bottom-5 left-6 flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-4 py-2 text-xs font-extrabold uppercase tracking-widest shadow-pop-sm">
                <Sparkles size={14} className="text-red" /> The community is the institution
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee items={marqueeItems} />

      {/* ------------------------------- STATS ------------------------------ */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-gold">
              Why we build
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight sm:text-4xl">
              The gap is real. So is our response to it.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal delay={0}>
              <BigStat
                value={1.8}
                decimals={1}
                prefix="$"
                suffix="T"
                label="Black buying power"
                sub="Projected annual spending power of Black America — larger than the GDP of most nations."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <BigStat
                value={6.3}
                decimals={1}
                suffix="×"
                label="The wealth gap"
                sub="Median white household net worth vs. Black household net worth (Federal Reserve, 2022 SCF)."
              />
            </Reveal>
            <Reveal delay={0.16}>
              <BigStat
                value={20}
                prefix="<"
                label="Black-owned banks"
                sub="Fewer than twenty remain in the entire country — down from nearly 50 in 2001."
              />
            </Reveal>
            <Reveal delay={0.24}>
              <BigStat
                value={161}
                suffix="K"
                label="Black-owned employer firms"
                sub="And growing. Entrepreneurship is how communities convert dollars into ownership."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------- FIVE MODELS ---------------------------- */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Kicker>The Blueprint</Kicker>
            <SectionTitle>
              Five legal models.
              <br />
              One mission: <span className="text-red">power.</span>
            </SectionTitle>
          </div>
          <Link
            to="/models"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-6 py-3 text-sm font-bold shadow-pop-sm transition-transform hover:-translate-y-0.5"
          >
            See how to form each one
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((m, i) => {
            const a = accentStyles[m.accent];
            const Icon = m.icon;
            return (
              <Reveal
                key={m.id}
                delay={i * 0.06}
                className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <Link to={`/models#${m.id}`} className="group block h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-3xl border-2 border-ink bg-paper shadow-pop transition-transform duration-300 group-hover:-translate-y-1.5">
                    <div className={`flex items-center justify-between border-b-2 border-ink px-6 py-5 ${a.panel}`}>
                      <span className={`font-display text-3xl ${a.on} opacity-60`}>{m.number}</span>
                      <span className="grid h-12 w-12 place-items-center rounded-xl border-2 border-ink bg-paper shadow-pop-sm">
                        <Icon size={22} className="text-ink" />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className={`text-[11px] font-extrabold uppercase tracking-[0.2em] ${a.text}`}>
                        {m.nickname}
                      </p>
                      <h3 className="mt-1.5 font-display text-xl leading-tight">{m.name}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{m.summary}</p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-extrabold uppercase tracking-wider">
                        How it works
                        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </article>
                </Link>
              </Reveal>
            );
          })}

          {/* Flyer card inside grid */}
          <Reveal delay={0.3}>
            <a href="/images/upload_1.png" target="_blank" rel="noreferrer" className="group block h-full">
              <article className="relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden rounded-3xl border-2 border-ink bg-ink p-6 text-cream shadow-pop transition-transform duration-300 group-hover:-translate-y-1.5">
                <div className="bg-dots-light absolute inset-0 opacity-40" />
                <div className="relative">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-gold">
                    Where it started
                  </p>
                  <h3 className="mt-2 font-display text-2xl leading-tight">
                    The original flyer, in living color.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70">
                    This entire site grew out of one infographic. View it full-size, print it, share
                    it at your next meeting.
                  </p>
                </div>
                <span className="relative mt-6 inline-flex w-fit items-center gap-2 rounded-full border-2 border-cream/30 bg-cream/10 px-5 py-2.5 text-xs font-extrabold uppercase tracking-widest">
                  <Download size={14} /> View the flyer
                </span>
              </article>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------- FLYER ------------------------------ */}
      <section className="border-y-2 border-ink bg-sand">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -top-4 left-1/2 z-10 h-9 w-32 -translate-x-1/2 rotate-[-3deg] rounded-sm border border-ink/20 bg-honey/90 shadow-sm" />
              <img
                src="/images/upload_1.png"
                alt="Building Black-Led Power flyer: five legally recognized models for community uplift"
                className="w-full rounded-2xl border-2 border-ink shadow-pop-lg"
              />
              <div className="absolute -bottom-4 left-1/2 h-9 w-32 -translate-x-1/2 rotate-[2deg] rounded-sm border border-ink/20 bg-honey/90 shadow-sm" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Kicker>One sheet of paper can start a movement</Kicker>
            <SectionTitle className="mt-5">
              This site began as a flyer
              <br />
              handed out in the community.
            </SectionTitle>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              The flyer laid out the blueprint in five panels: serve, own, advocate, organize, and
              build economic power — all safe, legal, and recognized structures. We expanded every
              panel into full guides with steps, funding sources, and national organizations you can
              join this week.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Every model here is a legally-recognized structure — vetted, durable, and fundable.",
                "Every playbook starts where you are: a fridge, a book box, a group chat.",
                "Every organization listed is a real door you can walk through today.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-ink/80">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 border-ink bg-gold shadow-pop-sm">
                    <ChevronRight size={12} strokeWidth={3.5} />
                  </span>
                  <span className="font-semibold">{t}</span>
                </li>
              ))}
            </ul>
            <a
              href="/images/upload_1.png"
              download="building-black-led-power-flyer.png"
              className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-red px-7 py-3.5 font-display text-sm tracking-wide text-cream shadow-pop transition-transform hover:-translate-y-1"
            >
              <Download size={16} /> DOWNLOAD THE FLYER
            </a>
          </Reveal>
        </div>
      </section>

      {/* ----------------------------- PLAYBOOKS ---------------------------- */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal className="max-w-3xl">
          <Kicker>The Build List</Kicker>
          <SectionTitle>
            Don't just march.
            <br />
            <span className="text-panel-teal">Build the block.</span>
          </SectionTitle>
          <p className="mt-5 text-lg leading-relaxed text-ink/75">
            Step-by-step guides for the institutions Black communities need most — each with real
            startup costs, legal structures, funding sources, and the community extras that turn a
            business into a cornerstone.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {playbooks.map((p, i) => {
            const a = accentStyles[p.accent];
            const Icon = p.icon;
            return (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link to={`/playbooks/${p.slug}`} className="group block h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-3xl border-2 border-ink bg-paper shadow-pop transition-transform duration-300 group-hover:-translate-y-1.5">
                    <div className={`border-b-2 border-ink px-6 py-8 ${a.panel}`}>
                      <span className="grid h-14 w-14 place-items-center rounded-2xl border-2 border-ink bg-paper shadow-pop-sm">
                        <Icon size={26} className="text-ink" />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-xl leading-tight">{p.title}</h3>
                      <p className="mt-2 flex-1 font-accent text-base italic text-ink/60">
                        {p.tagline}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        <span className="rounded-full border-2 border-ink bg-sand px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider">
                          {p.effort}
                        </span>
                        <span className="rounded-full border-2 border-ink bg-sand px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider">
                          {p.timeline.split("·")[0]}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 flex flex-col items-center gap-4 text-center">
          <Link
            to="/playbooks"
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-panel-teal px-8 py-4 font-display text-sm tracking-wide text-cream shadow-pop transition-transform hover:-translate-y-1"
          >
            OPEN ALL SIX PLAYBOOKS <ArrowRight size={17} />
          </Link>
          <Link
            to="/playbooks#opportunity-index"
            className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest text-ink/70 underline decoration-gold decoration-4 underline-offset-4 transition-colors hover:text-red"
          >
            Plus 9 more main-street moves in the Opportunity Index
          </Link>
        </Reveal>
      </section>

      {/* ------------------------------- WEALTH ----------------------------- */}
      <section className="border-y-2 border-ink bg-navy text-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <Kicker className="border-cream/30 bg-transparent text-cream shadow-none [&>span]:bg-gold">
              Cooperative Economics
            </Kicker>
            <h2 className="mt-5 font-display text-3xl leading-[1.05] sm:text-4xl lg:text-5xl">
              Wealth that stays
              <br />
              in the family<span className="text-gold">.</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/75">
              A six-pillar framework for closing the wealth gap: ownership of land, business, and
              capital — plus the unglamorous paperwork (wills, deeds, insurance) that keeps hard-won
              wealth from leaking away after one generation.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "Own the block: homeownership and land trusts",
                "Own the money: bank Black, lend local through CDFIs",
                "Protect the legacy: wills, trusts, and deeds in order",
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-3 rounded-xl border-2 border-cream/15 bg-cream/5 px-4 py-3 text-sm font-bold"
                >
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-gold" />
                  {t}
                </div>
              ))}
            </div>
            <Link
              to="/wealth"
              className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-gold bg-gold px-7 py-3.5 font-display text-sm tracking-wide text-ink shadow-[6px_6px_0_0_rgba(250,243,230,0.25)] transition-transform hover:-translate-y-1"
            >
              BUILD BLACK WEALTH <ArrowRight size={17} />
            </Link>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative">
              <div className="absolute -inset-3 rotate-[-2deg] rounded-[28px] border-2 border-cream/25 bg-panel-teal/30" />
              <img
                src="/images/wealth-hands.webp"
                alt="Illustration of hands holding up a home, a book, a growing money plant, and a small business"
                className="relative w-full rotate-[1.5deg] rounded-3xl border-2 border-ink object-cover shadow-pop-lg"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* --------------------------- FOUNDER BRAND -------------------------- */}
      <section className="border-b-2 border-ink bg-honey">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <Kicker>Black-Owned Spotlight</Kicker>
            <SectionTitle>
              Built by a Black
              <br />
              business owner<span className="text-red">.</span>
            </SectionTitle>
            <p className="mt-6 text-lg leading-relaxed text-ink/80">
              Every playbook on this site comes with skin in the game. The founder behind The
              Blueprint is also the owner and designer of{" "}
              <strong>Lucvi &amp; Co.</strong> — a Black-owned online luxury clothing brand built
              on the same Ujamaa principle this site teaches: make something excellent, own every
              stitch of it, and keep the dollars circulating.
            </p>
            <p className="mt-4 leading-relaxed text-ink/70">
              The signature GOLF crest line reimagines country-club polish for the culture — crest
              polos, all-over-print sweatshirts, tees, and dad hats — while the{" "}
              <strong>Black College Collection</strong>, beginning with the Mississippi Black
              College hoodie, wears HBCU pride like the heirloom it is, state by state.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {["Black-owned & designed", "Online luxury apparel", "HBCU pride — state by state"].map(
                (b) => (
                  <span
                    key={b}
                    className="rounded-full border-2 border-ink bg-paper px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest shadow-pop-sm"
                  >
                    {b}
                  </span>
                )
              )}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://lucvi.clothing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-panel-green px-7 py-3.5 font-display text-sm tracking-wide text-cream shadow-pop transition-transform hover:-translate-y-1"
              >
                SHOP LUCVI & CO. <ArrowUpRight size={17} />
              </a>
              <a
                href="https://black-college-collection.myspreadshop.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-7 py-3.5 font-display text-sm tracking-wide shadow-pop transition-transform hover:-translate-y-1"
              >
                BLACK COLLEGE COLLECTION <ArrowUpRight size={17} />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative mx-auto max-w-sm pb-10 pr-6 sm:max-w-md">
              <div className="absolute -inset-3 rotate-2 rounded-[28px] border-2 border-ink bg-panel-green" />
              <img
                src="/uploads/lucvi-golf-polo.webp"
                alt="Model wearing the Lucvi & Co. GOLF crest color-block polo in green and yellow"
                className="relative w-full rotate-[-1.5deg] rounded-3xl border-2 border-ink object-cover shadow-pop-lg"
              />
              <div className="absolute -bottom-2 -left-8 w-40 rotate-[-6deg] sm:w-48">
                <img
                  src="/uploads/lucvi-black-college-hoodie.webp"
                  alt="Mississippi Black College hoodie from the Black College Collection by Lucvi & Co."
                  className="w-full rounded-2xl border-2 border-ink shadow-pop-lg"
                />
                <span className="mt-3 block rounded-full border-2 border-ink bg-ink px-3 py-1.5 text-center text-[9px] font-extrabold uppercase tracking-[0.18em] text-cream shadow-pop-sm">
                  Black College Collection
                </span>
              </div>
              <span className="absolute -right-4 -top-7 z-10 rounded-full border-2 border-ink bg-gold px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest shadow-pop-sm">
                The founder's label
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------- GET INVOLVED -------------------------- */}
      <section className="relative overflow-hidden">
        <img
          src="/images/volunteers.jpg"
          alt="Community volunteers working together"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 text-center text-cream sm:px-6">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-gold">
              30+ organizations are waiting on you
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-[1.02] sm:text-5xl">
              The movement has a front door. Walk through it.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-cream/75">
              From the NAACP's 2,200 branches to the mutual-aid fridge two blocks over — find the
              organization fighting your fight, or start the one that should exist.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/get-involved"
                className="inline-flex items-center gap-2 rounded-full border-2 border-cream bg-cream px-8 py-4 font-display text-sm tracking-wide text-ink transition-transform hover:-translate-y-1"
              >
                GET INVOLVED <ArrowRight size={17} />
              </Link>
              <a
                href="https://mutualaidhub.org"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-cream/50 px-8 py-4 font-display text-sm tracking-wide text-cream transition-colors hover:border-cream"
              >
                FIND MUTUAL AID NEAR YOU <ArrowUpRight size={17} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
