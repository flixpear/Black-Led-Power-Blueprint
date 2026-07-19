import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Landmark,
  Church,
  GraduationCap,
  Store,
  Users,
  MapPin,
  HandHeart,
  Megaphone,
  Search,
} from "lucide-react";
import { Reveal, Kicker, Marquee, accentStyles } from "../components/ui";
import { organizations, ORG_CATEGORIES, type OrgCategory } from "../data/organizations";

const categoryAccent: Record<string, keyof typeof accentStyles> = {
  "Civil Rights": "red",
  "Political Power": "purple",
  "Economic Power": "green",
  "Women & Girls": "blue",
  "Youth & Justice": "navy",
  "Grassroots & Mutual Aid": "teal",
  "Education & Legacy": "gold",
};

const pathway = [
  {
    title: "Show up",
    body: "Pick one meeting this month — city council, school board, or a community benefits hearing. Presence is the freshman year of organizing.",
  },
  {
    title: "Listen first",
    body: "Knock on 50 doors or sit in five barbershop chairs. Ask one question: what would you fix first if you could? Write the answers down.",
  },
  {
    title: "Pick one winnable fight",
    body: "A crossing guard, a cleaned-up lot, one summer program funded. Small, fast wins are how a group chat becomes a constituency.",
  },
  {
    title: "Organize your pod",
    body: "Eight to twelve committed people, a standing meeting time, transparent shared funds with a fiscal host. Roles: a convener, a treasurer, a scribe.",
  },
  {
    title: "Register, educate, mobilize",
    body: "Turn each win into voter registration and turnout. People who win together vote together — and then they endorse.",
  },
  {
    title: "Plug into the national movement",
    body: "Join a member organization below for training, legal support, and national campaign days. Local pods with national backup win bigger.",
  },
];

const localDoors = [
  {
    icon: Landmark,
    name: "Your local NAACP branch",
    accent: "bg-red",
    how: "2,200+ branches and youth councils. Search naacp.org for the branch in every county — membership is open and cheap.",
  },
  {
    icon: Users,
    name: "Urban League affiliate",
    accent: "bg-panel-blue",
    how: "90+ affiliates run job centers, housing counseling, and small-business programs. Find yours at nul.org.",
  },
  {
    icon: GraduationCap,
    name: "The Divine Nine",
    accent: "bg-panel-purple",
    how: "Nine Black fraternities and sororities with graduate chapters doing service in every major city. Find chapters via nphchq.org.",
  },
  {
    icon: Church,
    name: "Black churches & faith networks",
    accent: "bg-gold",
    how: "America's original mutual aid network. Ask any pastor about their community benefits board, food pantry, or scholarship fund.",
  },
  {
    icon: Store,
    name: "Your city's Black chamber",
    accent: "bg-panel-green",
    how: "Most mid-size cities have one in the National Black Chamber (130+ chapters) or US Black Chambers network — show up to a mixer.",
  },
  {
    icon: HandHeart,
    name: "Mutual aid near you",
    accent: "bg-panel-teal",
    how: "Open mutualaidhub.org and type your city. There is almost certainly a fridge, fund, or pod that needs a fourth volunteer.",
  },
];

export default function GetInvolved() {
  const [category, setCategory] = useState<"All" | OrgCategory>("All");
  const [query, setQuery] = useState("");

  const filtered = organizations.filter((o) => {
    const matchesCategory = category === "All" || o.category === category;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q || o.name.toLowerCase().includes(q) || o.focus.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  return (
    <div>
      {/* ------------------------------- HEADER ------------------------------ */}
      <section className="relative overflow-hidden">
        <img
          src="/images/volunteers.jpg"
          alt="Volunteers in white shirts working together outdoors"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/85" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-cream sm:px-6 lg:py-24">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-gold">Get involved</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] sm:text-5xl lg:text-6xl">
              The front door is open. <span className="text-gold">Walk in.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/75">
              Six steps from bystander to organizer, thirty-plus national organizations with
              chapters near you, and the local doors — branches, churches, chambers, and mutual aid
              pods — that have always been the movement's engine.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee
        items={[
          "Show up",
          "Listen first",
          "Win something small",
          "Organize the pod",
          "Register & mobilize",
          "Go national",
        ]}
      />

      {/* ------------------------------- PATHWAY ----------------------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <Reveal className="max-w-3xl">
          <Kicker>The Grassroots Pathway</Kicker>
          <h2 className="mt-5 font-display text-4xl leading-[1.02] sm:text-5xl">
            Six steps from bystander
            <br />
            to <span className="text-red">base-builder</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pathway.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="relative h-full rounded-3xl border-2 border-ink bg-paper p-6 shadow-pop">
                <span className="absolute -top-4 left-6 grid h-9 w-9 place-items-center rounded-xl border-2 border-ink bg-gold font-display text-sm shadow-pop-sm">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-display text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ----------------------------- DIRECTORY ----------------------------- */}
      <section id="directory" className="border-y-2 border-ink bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <Reveal className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <Kicker>The National Directory</Kicker>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] sm:text-5xl">
                {organizations.length}+ organizations,
                <br />
                one filter away
              </h2>
            </div>
            <div className="relative w-full max-w-sm">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or mission…"
                className="w-full rounded-full border-2 border-ink bg-paper py-3 pl-11 pr-4 text-sm font-semibold shadow-pop-sm outline-none placeholder:text-ink/40 focus:ring-2 focus:ring-gold"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {ORG_CATEGORIES.map((c) => {
                const active = category === c;
                return (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`rounded-full border-2 border-ink px-4 py-2 text-xs font-extrabold uppercase tracking-wider transition-all ${
                      active
                        ? "bg-ink text-cream shadow-pop-sm"
                        : "bg-paper text-ink/70 hover:-translate-y-0.5"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-ink/50">
            Showing {filtered.length} of {organizations.length} organizations
          </p>

          <div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((o, i) => {
              const accent = categoryAccent[o.category] ?? "gold";
              const a = accentStyles[accent];
              return (
                <Reveal key={o.name} delay={(i % 6) * 0.04}>
                  <a
                    href={o.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-full flex-col rounded-2xl border-2 border-ink bg-paper p-5 shadow-pop-sm transition-transform hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className={`rounded-full border-2 border-ink px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest ${a.badge}`}
                      >
                        {o.category}
                      </span>
                      {o.since && (
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-ink/40">
                          Est. {o.since}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-4 font-display text-lg leading-tight">{o.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{o.focus}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-ink/80">
                      {o.url.replace("https://", "").replace("www.", "").replace(/\/$/, "")}
                      <ExternalLink
                        size={13}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="mt-6 rounded-2xl border-2 border-dashed border-ink/40 bg-paper p-10 text-center">
              <p className="font-display text-lg">No matches — try a broader search.</p>
              <button
                onClick={() => {
                  setQuery("");
                  setCategory("All");
                }}
                className="mt-4 rounded-full border-2 border-ink bg-gold px-6 py-2.5 text-sm font-bold shadow-pop-sm"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ---------------------------- LOCAL DOORS ---------------------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <Reveal className="max-w-3xl">
          <Kicker>Happening within five miles of you</Kicker>
          <h2 className="mt-5 font-display text-4xl leading-[1.02] sm:text-5xl">
            The local doors nobody
            <br />
            puts on a flyer
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/75">
            National brands get the headlines, but the work happens in branches, basements, and
            back rooms. These six doors exist in almost every American city — knock on one this
            week.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {localDoors.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.05}>
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border-2 border-ink bg-paper shadow-pop transition-transform duration-300 hover:-translate-y-1.5">
                <div className={`flex items-center gap-3 border-b-2 border-ink px-6 py-4 ${d.accent}`}>
                  <span className="grid h-11 w-11 place-items-center rounded-xl border-2 border-ink bg-paper shadow-pop-sm">
                    <d.icon size={20} className="text-ink" />
                  </span>
                  <h3 className="font-display text-base leading-tight text-ink">{d.name}</h3>
                </div>
                <p className="flex-1 p-6 text-sm leading-relaxed text-ink/70">{d.how}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <div className="flex h-full flex-col justify-between rounded-3xl border-2 border-ink bg-ink p-6 text-cream shadow-pop">
              <div>
                <Megaphone size={26} className="text-gold" />
                <h3 className="mt-4 font-display text-xl leading-tight">
                  None of them fit? Good. That's a gap — and gaps are assignments.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">
                  The five legal models exist precisely so you can charter the organization your
                  community is missing.
                </p>
              </div>
              <Link
                to="/models"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border-2 border-gold bg-gold px-6 py-3 text-sm font-extrabold text-ink transition-transform hover:-translate-y-0.5"
              >
                Start your own <MapPin size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------- CTA -------------------------------- */}
      <section className="border-t-2 border-ink bg-panel-teal text-cream">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 py-14 sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">
              Joined. Registered. Ready to build<span className="text-ink">?</span>
            </h2>
            <p className="mt-3 max-w-xl text-lg text-cream/85">
              Take the energy of your new chapter or pod and point it at a structure: a bank, a
              library, a laundromat, a co-op. The playbooks are waiting.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-wrap gap-4">
            <Link
              to="/playbooks"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-cream px-8 py-4 font-display text-sm tracking-wide text-ink shadow-pop transition-transform hover:-translate-y-1"
            >
              OPEN THE PLAYBOOKS <ArrowRight size={17} />
            </Link>
            <Link
              to="/wealth"
              className="inline-flex items-center gap-2 rounded-full border-2 border-cream/60 px-8 py-4 font-display text-sm tracking-wide text-cream transition-colors hover:border-cream"
            >
              BUILD BLACK WEALTH <ArrowUpRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
