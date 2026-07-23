import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { to: "/models", label: "The 5 Models" },
  { to: "/playbooks", label: "Playbooks" },
  { to: "/wealth", label: "Black Wealth" },
  { to: "/get-involved", label: "Get Involved" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg border-2 border-ink bg-ink shadow-pop-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" className="fill-gold">
              <path d="M12 1l3.1 7.2L23 9l-5.8 5 1.8 7.8L12 17.7 5 21.8 6.8 14 1 9l7.9-.8z" />
            </svg>
          </span>
          <span className="leading-none">
            <span className="block font-display text-base tracking-tight">THE BLUEPRINT</span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.24em] text-ink/60">
              Building Black-Led Power
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-bold transition-all ${
                  isActive
                    ? "border-2 border-ink bg-gold text-ink shadow-pop-sm"
                    : "border-2 border-transparent text-ink/70 hover:border-ink hover:text-ink"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/playbooks"
            className="ml-3 inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-ink px-5 py-2 text-sm font-bold text-cream shadow-pop-sm transition-transform hover:-translate-y-0.5"
          >
            Start Building <ArrowUpRight size={16} />
          </Link>
        </nav>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border-2 border-ink bg-paper shadow-pop-sm lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t-2 border-ink bg-cream px-4 pb-5 pt-3 lg:hidden">
          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl border-2 px-4 py-3 text-sm font-bold ${
                    isActive ? "border-ink bg-gold text-ink shadow-pop-sm" : "border-ink/10 bg-paper"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/playbooks"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-xl border-2 border-ink bg-ink px-4 py-3 text-sm font-bold text-cream"
            >
              Start Building <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
