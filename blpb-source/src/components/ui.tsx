import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import type { Accent } from "../data/models";

/* ---------------------------------- Accents --------------------------------- */

export const accentStyles: Record<
  Accent,
  { panel: string; on: string; soft: string; badge: string; text: string }
> = {
  blue: {
    panel: "bg-panel-blue",
    on: "text-cream",
    soft: "bg-panel-blue/10",
    badge: "bg-panel-blue text-cream",
    text: "text-panel-blue",
  },
  gold: {
    panel: "bg-gold",
    on: "text-ink",
    soft: "bg-gold/15",
    badge: "bg-gold text-ink",
    text: "text-gold",
  },
  purple: {
    panel: "bg-panel-purple",
    on: "text-cream",
    soft: "bg-panel-purple/10",
    badge: "bg-panel-purple text-cream",
    text: "text-panel-purple",
  },
  teal: {
    panel: "bg-panel-teal",
    on: "text-cream",
    soft: "bg-panel-teal/10",
    badge: "bg-panel-teal text-cream",
    text: "text-panel-teal",
  },
  green: {
    panel: "bg-panel-green",
    on: "text-cream",
    soft: "bg-panel-green/10",
    badge: "bg-panel-green text-cream",
    text: "text-panel-green",
  },
  red: {
    panel: "bg-red",
    on: "text-cream",
    soft: "bg-red/10",
    badge: "bg-red text-cream",
    text: "text-red",
  },
  navy: {
    panel: "bg-navy",
    on: "text-cream",
    soft: "bg-navy/10",
    badge: "bg-navy text-cream",
    text: "text-navy",
  },
};

/* ---------------------------------- Reveal ---------------------------------- */

export function Reveal({
  children,
  delay = 0,
  className = "",
  y = 28,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ----------------------------- Section headings ------------------------------ */

export function Kicker({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.22em] shadow-pop-sm ${className}`}
    >
      <span className="h-2 w-2 rounded-full bg-red" />
      {children}
    </span>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`mt-5 font-display text-3xl leading-[1.02] sm:text-4xl lg:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}

/* --------------------------------- Counters ---------------------------------- */

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    let start: number | undefined;
    const step = (t: number) => {
      if (start === undefined) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

export function BigStat({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  label,
  sub,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sub: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const n = useCountUp(value, inView);
  const formatted = n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="font-display text-4xl text-gold sm:text-5xl">
        {prefix}
        {formatted}
        {suffix}
      </div>
      <div className="text-sm font-bold uppercase tracking-widest text-cream">{label}</div>
      <div className="text-sm leading-relaxed text-cream/60">{sub}</div>
    </div>
  );
}

/* ---------------------------------- Marquee ---------------------------------- */

export function Marquee({ items, dark = false }: { items: string[]; dark?: boolean }) {
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span
          key={i}
          className={`mx-5 flex items-center gap-5 font-display text-sm tracking-[0.18em] uppercase ${
            dark ? "text-cream" : "text-ink"
          }`}
        >
          {item}
          <svg width="14" height="14" viewBox="0 0 24 24" className={dark ? "fill-gold" : "fill-red"}>
            <path d="M12 1l3.1 7.2L23 9l-5.8 5 1.8 7.8L12 17.7 5 21.8 6.8 14 1 9l7.9-.8z" />
          </svg>
        </span>
      ))}
    </div>
  );
  return (
    <div
      className={`overflow-hidden border-y-2 border-ink py-3.5 ${dark ? "bg-ink" : "bg-gold"}`}
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee">
        {row}
        {row}
      </div>
    </div>
  );
}

/* ------------------------------- Sticker badge ------------------------------- */

export function Starburst({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative grid place-items-center ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-full fill-gold drop-shadow-[3px_3px_0_#1c1610]">
        <path d="M50 0l7 14 15-6-2 16 16 3-10 12 13 9-15 7 6 15-16-4-3 16-11-12-11 12-3-16-16 4 6-15-15-7 13-9-10-12 16-3-2-16 15 6z" />
      </svg>
      <span className="absolute inset-0 grid place-items-center px-4 text-center font-display text-[10px] leading-tight tracking-wider text-ink uppercase">
        {children}
      </span>
    </div>
  );
}
