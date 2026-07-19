import {
  Plane,
  Clapperboard,
  Flower2,
  Blocks,
  Scissors,
  Wrench,
  UtensilsCrossed,
  Stethoscope,
  Calculator,
  type LucideIcon,
} from "lucide-react";

export interface Profession {
  name: string;
  icon: LucideIcon;
  why: string;
  startup: string;
  firstMove: string;
}

export const professions: Profession[] = [
  {
    name: "Airport Shuttle & Medical Transport",
    icon: Plane,
    why: "Every airport run, senior ride, and hospital discharge is revenue. Non-emergency medical transport (NEMT) contracts are Medicaid-reimbursable and remarkably steady.",
    startup: "$10K – $80K",
    firstMove:
      "One reliable van, livery plates, and commercial insurance — then sign with an NEMT broker before you ever buy vehicle two.",
  },
  {
    name: "Entertainment & Event Spaces",
    icon: Clapperboard,
    why: "Lounges, comedy nights, DJ collectives, and content studios keep our celebrations — and our dollars — in the community.",
    startup: "$5K – $500K",
    firstMove:
      "Start as a promotion brand with pop-up events. Build the audience first; liquor licenses and leases come after.",
  },
  {
    name: "Funeral Homes & Memorial Services",
    icon: Flower2,
    why: "Black funeral homes are historic pillars of the community: recession-resistant, multigenerational, and trusted at the hardest moments of life.",
    startup: "$150K – $1M+",
    firstMove:
      "Most states require a licensed funeral director — begin mortuary school or an apprenticeship, or partner with someone who holds the license.",
  },
  {
    name: "Childcare & Early Learning Centers",
    icon: Blocks,
    why: "Childcare deserts sit exactly where our families live. A licensed home daycare is a real business with federal grant support behind it.",
    startup: "$5K – $250K",
    firstMove:
      "Get state-licensed as a family childcare home, then grow into a center with Child Care and Development Fund dollars.",
  },
  {
    name: "Barbershops & Beauty Salons",
    icon: Scissors,
    why: "The original Black-owned storefronts — cash-flow businesses that double as the neighborhood's information hubs.",
    startup: "$20K – $150K",
    firstMove:
      "Build clientele through chair rental or a salon suite before committing to a full buildout and staff.",
  },
  {
    name: "Skilled Trades & Contracting",
    icon: Wrench,
    why: "HVAC, plumbing, and electrical contractors earn owner-level incomes — and every land-trust rehab in this blueprint needs them.",
    startup: "$2K – $40K + licensing",
    firstMove:
      "Apprenticeship to journeyman license to contractor's license — then hire straight from the trade school pipeline.",
  },
  {
    name: "Restaurants, Catering & Food Trucks",
    icon: UtensilsCrossed,
    why: "Soul food is culture people can taste. Catering and trucks let you prove the menu before the dining room's rent does you in.",
    startup: "$30K – $300K",
    firstMove:
      "Commissary kitchen plus a catering license. Restaurants are capital-hungry — sell out a season of pop-ups first.",
  },
  {
    name: "Elder & Home Care Services",
    icon: Stethoscope,
    why: "Our elders want to age at home with dignity. Non-medical companion care is the most accessible entry into healthcare entrepreneurship.",
    startup: "$15K – $90K",
    firstMove:
      "Register as a home-care agency, hire certified aides, and enroll to serve Medicaid waiver clients through your state.",
  },
  {
    name: "Insurance, Tax & Financial Services",
    icon: Calculator,
    why: "Every wealth move on this site — every business, deed, and estate plan — needs a policy, a ledger, and a tax strategy behind it.",
    startup: "$3K – $50K",
    firstMove:
      "Get licensed (insurance producer license or the EA/CPA track) and build your book inside an existing firm before hanging your own shingle.",
  },
];
