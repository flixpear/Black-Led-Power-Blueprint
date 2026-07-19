import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Store,
  Landmark,
  TrendingUp,
  ShieldCheck,
  Coins,
  ArrowRight,
  ArrowUpRight,
  Quote,
  ExternalLink,
} from "lucide-react";
import { Reveal, Kicker, BigStat } from "../components/ui";

const pillars = [
  {
    icon: Home,
    title: "Own the Block",
    accent: "bg-panel-blue",
    why: "Homeownership is the single largest driver of household wealth in America — and the largest gap between Black and white families.",
    moves: [
      "Use FHA loans + down-payment assistance — most cities have programs that stack.",
      "Buy through a community land trust to cut the purchase price dramatically.",
      "House-hack: a duplex lets a tenant pay most of your mortgage.",
    ],
  },
  {
    icon: Store,
    title: "Own a Business",
    accent: "bg-gold",
    why: "Business equity compounds faster than wages. Black-owned employer firms are the fastest-growing slice of Black wealth-building.",
    moves: [
      "Start a low-overhead service business where you already have skill.",
      "Buy an existing business from a retiring owner — SBA 7(a) acquisition loans were built for this.",
      "Use CDFI lenders and the laundromat playbook; cash-flow businesses fund everything else.",
    ],
  },
  {
    icon: Landmark,
    title: "Own the Money",
    accent: "bg-navy",
    why: "Where you deposit decides who gets the loan. Moving deposits to Black-owned banks and credit unions licenses them to lend on our blocks.",
    moves: [
      "Move your checking to a Black-owned bank or CDFI credit union — the #BankBlack rule.",
      "Recruit your church, sorority, and employer to move reserve accounts.",
      "Route your next business loan through a CDFI, not a payday-advance app.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Invest Together",
    accent: "bg-panel-teal",
    why: "From sou-sou circles to investment clubs, pooling money is a centuries-old Black wealth technology — formalized, it buys index funds and whole buildings.",
    moves: [
      "Start or join an investment club: 7–10 people, $50–$100 a month, one brokerage account.",
      "Automate boring index investing first — compound interest is the eighth principle.",
      "Co-invest in local real estate through permanent real-estate cooperatives.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Protect the Legacy",
    accent: "bg-red",
    why: "Most Black wealth is lost at death, not in life. No will means courts, forced sales, and heirs'-property tangles that have stripped millions of acres from Black families.",
    moves: [
      "Will, living trust, power of attorney, and insurance — all four, this year.",
      "Check every family deed; resolve heirs'-property titles before they get contested.",
      "Hold shared family land in an LLC with written operating rules.",
    ],
  },
  {
    icon: Coins,
    title: "Circulate the Dollar",
    accent: "bg-panel-green",
    why: "$1.8 trillion in buying power passes through Black hands — how much stays in Black hands is a choice we make purchase by purchase.",
    moves: [
      "Pledge a fixed share of monthly spending to Black-owned businesses — then automate it.",
      "Use directories like Official Black Wall Street, WeBuyBlack, and EatOkra to find them.",
      "Review Black-owned spots and tag them — free marketing is currency too.",
    ],
  },
];

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function Wealth() {
  const [spend, setSpend] = useState(2000);
  const [percent, setPercent] = useState(20);

  const monthly = (spend * percent) / 100;
  const yearly = monthly * 12;
  const block = yearly * 500;

  return (
    <div>
      {/* ------------------------------- HEADER ------------------------------ */}
      <section className="relative overflow-hidden border-b-2 border-ink bg-navy text-cream">
        <div className="bg-dots-light pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <Reveal>
            <Kicker className="border-cream/30 bg-transparent text-cream shadow-none [&>span]:bg-gold">
              Ujamaa — Cooperative Economics
            </Kicker>
            <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.02] sm:text-5xl lg:text-6xl">
              Building <span className="text-gold">Black wealth</span> that
              outlives the march
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/75">
              Wealth is not a vibe — it is deeds, policies, accounts, and documents. Here is the
              six-pillar framework, the honest numbers behind the gap, and a calculator that shows
              what your own redirected spending could do.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------- STATS ------------------------------- */}
      <section className="border-b-2 border-ink bg-ink text-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          <Reveal>
            <BigStat
              value={44900}
              prefix="$"
              label="Median Black household wealth"
              sub="Versus $285,000 for white households — Federal Reserve Survey of Consumer Finances, 2022."
            />
          </Reveal>
          <Reveal delay={0.06}>
            <BigStat
              value={44.7}
              decimals={1}
              suffix="%"
              label="Black homeownership rate"
              sub="Vs. roughly 74% for white households — and home equity is most families' biggest asset."
            />
          </Reveal>
          <Reveal delay={0.12}>
            <BigStat
              value={68}
              suffix="%"
              label="Adults without a will"
              sub="Roughly two in three Black adults have no estate plan — where generational wealth goes to die."
            />
          </Reveal>
          <Reveal delay={0.18}>
            <BigStat
              value={1}
              prefix="<"
              suffix="%"
              label="Venture capital to Black founders"
              sub="The share of U.S. venture funding reaching Black founders in recent years. Ownership beats access."
            />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ PILLARS ------------------------------ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <Kicker>The Framework</Kicker>
          <h2 className="mt-5 font-display text-4xl leading-[1.02] sm:text-5xl">
            Six pillars. Built on paper.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">
            Each pillar pairs one ownership principle with three concrete moves. Work them in any
            order — but work the paperwork ones before the market decides for you.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border-2 border-ink bg-paper shadow-pop transition-transform duration-300 hover:-translate-y-1.5">
                <header className={`flex items-center gap-3 border-b-2 border-ink px-6 py-4 ${p.accent}`}>
                  <span className="grid h-11 w-11 place-items-center rounded-xl border-2 border-ink bg-paper shadow-pop-sm">
                    <p.icon size={20} className="text-ink" />
                  </span>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-ink/60">
                      Pillar {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-display text-lg leading-tight text-ink">{p.title}</h3>
                  </div>
                </header>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-relaxed text-ink/70">{p.why}</p>
                  <div className="mt-5 flex-1 space-y-2.5">
                    {p.moves.map((m) => (
                      <div
                        key={m}
                        className="flex items-start gap-2.5 rounded-xl border-2 border-ink/10 bg-sand px-3.5 py-2.5"
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red" />
                        <span className="text-[13px] font-semibold leading-relaxed text-ink/80">
                          {m}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------------------- CALCULATOR ----------------------------- */}
      <section className="border-y-2 border-ink bg-panel-green text-cream">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-ink/70">
              The circulation challenge
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Run your own numbers
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-cream/85">
              Black buying power tops $1.8 trillion — but a dollar kept inside the community pays a
              Black employee, who banks at a Black bank, who lends to a Black business. Set your
              pledge and watch the math.
            </p>

            <div className="mt-8 space-y-8">
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="spend" className="text-sm font-extrabold uppercase tracking-widest">
                    Your monthly household spending
                  </label>
                  <span className="rounded-full border-2 border-ink bg-paper px-3.5 py-1 font-display text-sm text-ink shadow-pop-sm">
                    {money.format(spend)}
                  </span>
                </div>
                <input
                  id="spend"
                  type="range"
                  min={500}
                  max={6000}
                  step={100}
                  value={spend}
                  onChange={(e) => setSpend(Number(e.target.value))}
                  className="mt-3 h-3 w-full cursor-pointer appearance-none rounded-full border-2 border-ink bg-paper accent-red"
                />
                <div className="mt-1 flex justify-between text-[11px] font-bold text-cream/70">
                  <span>$500</span>
                  <span>$6,000</span>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="percent"
                    className="text-sm font-extrabold uppercase tracking-widest"
                  >
                    Redirected to Black-owned businesses
                  </label>
                  <span className="rounded-full border-2 border-ink bg-paper px-3.5 py-1 font-display text-sm text-ink shadow-pop-sm">
                    {percent}%
                  </span>
                </div>
                <input
                  id="percent"
                  type="range"
                  min={5}
                  max={60}
                  step={5}
                  value={percent}
                  onChange={(e) => setPercent(Number(e.target.value))}
                  className="mt-3 h-3 w-full cursor-pointer appearance-none rounded-full border-2 border-ink bg-paper accent-gold"
                />
                <div className="mt-1 flex justify-between text-[11px] font-bold text-cream/70">
                  <span>5%</span>
                  <span>60%</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex h-full flex-col justify-center gap-5">
              <div className="rounded-3xl border-2 border-ink bg-paper p-7 text-ink shadow-pop-lg">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-ink/50">
                  You circulate, every year
                </p>
                <p className="mt-2 font-display text-5xl text-panel-green sm:text-6xl">
                  {money.format(yearly)}
                </p>
                <p className="mt-2 text-sm font-semibold text-ink/60">
                  That's {money.format(monthly)} a month redirected into Black-owned restaurants,
                  barbershops, grocers, professionals, and brands.
                </p>
              </div>
              <div className="rounded-3xl border-2 border-ink bg-ink p-7 shadow-pop-lg">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-cream/60">
                  If 500 households on your block matched you
                </p>
                <p className="mt-2 font-display text-4xl text-gold sm:text-5xl">
                  {money.format(block)}
                  <span className="text-xl text-cream/60"> / yr</span>
                </p>
                <p className="mt-2 text-sm font-semibold text-cream/60">
                  Enough to capitalize a co-op grocery, fund a CDFI loan pool, or back a dozen
                  first-time homebuyers — every single year.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --------------------------- QUOTE + OWNER PHOTO ---------------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <Quote size={40} className="text-gold" />
              <p className="mt-4 font-accent text-3xl italic leading-snug text-ink sm:text-4xl">
                "The sou-sou, the dues, the church building fund — pooling money was never new to
                us. The blueprint just puts it in writing."
              </p>
              <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.24em] text-ink/50">
                From rotating credit circles to investment clubs — same genius, new paperwork
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  {
                    name: "Lucvi & Co. — the founder's luxury label",
                    url: "https://lucvi.clothing",
                    featured: true,
                  },
                  {
                    name: "Black College Collection by Lucvi & Co.",
                    url: "https://black-college-collection.myspreadshop.com/",
                    featured: true,
                  },
                  { name: "Official Black Wall Street", url: "https://officialblackwallstreet.com" },
                  { name: "WeBuyBlack", url: "https://webuyblack.com" },
                  { name: "EatOkra — find Black-owned food", url: "https://eatokra.com" },
                  { name: "Find a Black-owned bank", url: "https://nationalbankers.org" },
                ].map((r) => (
                  <a
                    key={r.url}
                    href={r.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-1.5 rounded-full border-2 border-ink px-4 py-2 text-xs font-extrabold uppercase tracking-wider shadow-pop-sm transition-transform hover:-translate-y-0.5 ${
                      r.featured ? "bg-gold" : "bg-paper"
                    }`}
                  >
                    {r.name} <ExternalLink size={12} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative">
              <div className="absolute -inset-3 rotate-2 rounded-[28px] border-2 border-ink bg-gold" />
              <img
                src="/images/business-owner.jpg"
                alt="Black woman small business owner standing proudly in her shop"
                className="relative w-full rotate-[-1.5deg] rounded-3xl border-2 border-ink object-cover shadow-pop-lg"
              />
              <div className="absolute -bottom-5 right-6 rounded-full border-2 border-ink bg-paper px-5 py-2 text-xs font-extrabold uppercase tracking-widest shadow-pop-sm">
                Ownership looks like this
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------- CTA -------------------------------- */}
      <section className="border-t-2 border-ink bg-red text-cream">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 py-14 sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">
              Wealth is a team sport<span className="text-gold">.</span>
            </h2>
            <p className="mt-3 max-w-xl text-lg text-cream/85">
              Find the chambers, investment networks, and economic organizations already building —
              or bring five friends and start your own circle.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-cream px-8 py-4 font-display text-sm tracking-wide text-ink shadow-pop transition-transform hover:-translate-y-1"
            >
              JOIN THE BUILDERS <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="border-t-2 border-ink bg-ink text-cream">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 py-10 sm:px-6">
          <p className="text-sm font-semibold text-cream/70">
            Prefer to build the institution first?
          </p>
          <Link
            to="/playbooks/community-bank"
            className="inline-flex items-center gap-2 rounded-full border-2 border-cream/40 px-6 py-3 text-sm font-bold text-cream transition-colors hover:border-cream"
          >
            Read the community bank playbook <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
