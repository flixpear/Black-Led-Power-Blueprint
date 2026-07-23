import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const explore = [
  { to: "/models", label: "The 5 Legal Models" },
  { to: "/playbooks", label: "Community Playbooks" },
  { to: "/wealth", label: "Building Black Wealth" },
  { to: "/get-involved", label: "Get Involved" },
];

const playbooks = [
  { to: "/playbooks/community-bank", label: "Start a Community Bank" },
  { to: "/playbooks/community-library", label: "Open a Community Library" },
  { to: "/playbooks/laundromat", label: "Launch a Laundromat" },
  { to: "/playbooks/food-coop", label: "Grow a Food Co-op" },
  { to: "/playbooks/land-trust", label: "Build a Land Trust" },
  { to: "/playbooks/health-hub", label: "Open a Health Hub" },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-cream">
      <div className="flex h-2 w-full">
        <div className="w-1/3 bg-red" />
        <div className="w-1/3 bg-gold" />
        <div className="w-1/3 bg-panel-green" />
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg border-2 border-cream/20 bg-cream/10">
              <svg width="18" height="18" viewBox="0 0 24 24" className="fill-gold">
                <path d="M12 1l3.1 7.2L23 9l-5.8 5 1.8 7.8L12 17.7 5 21.8 6.8 14 1 9l7.9-.8z" />
              </svg>
            </span>
            <span className="font-display text-base tracking-tight">THE BLUEPRINT</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream/60">
            Safe, legal, sustainable community uplift. Five legally-recognized models and the
            step-by-step playbooks for building the banks, libraries, laundromats, and
            institutions our communities deserve.
          </p>
          <p className="mt-4 font-accent text-lg italic text-gold">
            "Black Wall Street — rebuilt, block by block."
          </p>
          <a
            href="https://lucvi.clothing"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest text-cream/50 transition-colors hover:text-gold"
          >
            Built by the owner of Lucvi & Co. — shop the label
            <ArrowUpRight size={12} />
          </a>
        </div>

        <div>
          <h4 className="font-display text-xs uppercase tracking-[0.2em] text-gold">Explore</h4>
          <ul className="mt-4 space-y-2.5">
            {explore.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-cream/80 transition-colors hover:text-gold"
                >
                  {l.label}
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xs uppercase tracking-[0.2em] text-gold">Playbooks</h4>
          <ul className="mt-4 space-y-2.5">
            {playbooks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm font-semibold text-cream/80 transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xs uppercase tracking-[0.2em] text-gold">
            Before You Build
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-cream/60">
            <li>
              This site is an educational resource — not legal, tax, or financial advice. Consult a
              licensed attorney and CPA before forming any entity.
            </li>
            <li>
              Verify organizations, grants, and regulations independently; programs change.
            </li>
            <li>Never send money to anyone you have not vetted. Trust is earned in the open.</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-2 text-xs font-semibold uppercase tracking-widest text-cream/50 sm:flex-row">
            <span>The Blueprint — Building Black-Led Power</span>
            <span>Circulate the dollar. Keep the deed. Pass it on.</span>
          </div>
          <div className="mt-5 flex flex-col items-center gap-2.5 border-t border-cream/10 pt-5 text-center">
            <p className="font-display text-sm tracking-[0.14em] text-cream">
              A <span className="text-gold">Jason L. Fields</span> Production
            </p>
            <p className="max-w-3xl text-[11px] font-semibold leading-relaxed text-cream/45">
              © 2026 Black Led Power Blueprint (BLPB). Powered by The American Black Development
              Council (ABDC) &amp; The Southern Black Endowment Committee (SBEC) — a flagship
              philanthropic initiative powered by America Music Group.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
