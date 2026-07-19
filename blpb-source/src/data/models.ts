import {
  HeartHandshake,
  Building2,
  Vote,
  HandHeart,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

export type Accent = "blue" | "gold" | "purple" | "teal" | "green" | "red" | "navy";

export interface CommunityModel {
  id: string;
  number: string;
  name: string;
  nickname: string;
  accent: Accent;
  icon: LucideIcon;
  summary: string;
  bestFor: string[];
  howToForm: string[];
  examples: string[];
  goodToKnow: string;
}

export const models: CommunityModel[] = [
  {
    id: "nonprofit",
    number: "01",
    name: "501(c)(3) Non-Profit Organizations",
    nickname: "The Service Model",
    accent: "blue",
    icon: HeartHandshake,
    summary:
      "Tax-exempt charitable organizations that run essential programs: food pantries, after-school education, health clinics, and tech training for the community.",
    bestFor: [
      "Food pantries & meal programs",
      "After-school & tutoring programs",
      "Community health clinics",
      "Tech and job-skills training",
      "Mentorship & scholarship funds",
    ],
    howToForm: [
      "Recruit a founding board of at least 3 committed members.",
      "Write articles of incorporation and file them with your state.",
      "Draft bylaws and a conflict-of-interest policy.",
      "Get a free EIN from the IRS (Form SS-4, online in minutes).",
      "File IRS Form 1023 or the shorter 1023-EZ for federal tax exemption.",
      "Register for charitable solicitation with your state before fundraising.",
      "Launch programs, track outcomes, and file Form 990 every year.",
    ],
    examples: ["Black Girls CODE", "Roots Community Health Center"],
    goodToKnow:
      "Donations to a 501(c)(3) are tax-deductible for the giver, but the organization cannot campaign for or against political candidates and may only lobby in a limited way. It is the right tool for service, not for elections.",
  },
  {
    id: "cdc",
    number: "02",
    name: "Community Development Corporations (CDCs)",
    nickname: "The Ownership Model",
    accent: "gold",
    icon: Building2,
    summary:
      "Nonprofit developers that acquire real estate to build affordable housing, open community centers, and support local Black-owned businesses.",
    bestFor: [
      "Affordable housing development",
      "Community land trusts",
      "Saving legacy neighborhood buildings",
      "Small-business incubator spaces",
      "Neighborhood commercial corridors",
    ],
    howToForm: [
      "Organize residents and define a target geography — often just a few blocks.",
      "Incorporate as a nonprofit corporation (most CDCs pursue 501(c)(3) status).",
      "Build a board that includes people who actually live in the neighborhood.",
      "Write a development plan: housing first, commercial space, or both.",
      "Secure funding: CDFI loans, federal HOME & CDBG funds, city land banks.",
      "Acquire the first property and develop with local contractors.",
      "Consider pairing with a community land trust to keep assets affordable forever.",
    ],
    examples: ["Black Community Land Trusts", "Local Neighborhood Development Funds"],
    goodToKnow:
      "CDCs turn organizing into ownership. Because the entity — not a landlord — holds the deed, gains in property value are recycled back into the community instead of pricing residents out.",
  },
  {
    id: "political",
    number: "03",
    name: "501(c)(4) Orgs & Political Action Committees",
    nickname: "The Political Model",
    accent: "purple",
    icon: Vote,
    summary:
      "Social-welfare organizations and PACs that lobby for policy change, run voter registration drives, and support candidates who champion community issues.",
    bestFor: [
      "Issue advocacy & lobbying",
      "Voter registration drives",
      "Candidate endorsements & scorecards",
      "Ballot initiative campaigns",
      "Policy research with teeth",
    ],
    howToForm: [
      "Choose the structure: a 501(c)(4) for issue advocacy, a PAC for supporting candidates.",
      "Incorporate in your state and obtain an EIN.",
      "File IRS Form 8976 within 60 days of forming the 501(c)(4).",
      "If forming a PAC, register with the FEC (federal races) or your state election agency.",
      "Build a small-dollar donor base and a strict compliance calendar.",
      "Launch voter registration, education, and Get-Out-The-Vote programs.",
      "Report every dollar on time — political finance violations are costly.",
    ],
    examples: ["Black Voters Matter", "Black Male Voter Project"],
    goodToKnow:
      "Donations to 501(c)(4)s and PACs are NOT tax-deductible. Political spending cannot be the primary purpose of a (c)(4) — keep it under roughly half of overall activity and pair it with real community programs.",
  },
  {
    id: "mutual-aid",
    number: "04",
    name: "Mutual Aid Collectives",
    nickname: "The Grassroots Model",
    accent: "teal",
    icon: HandHeart,
    summary:
      "Decentralized, volunteer-run networks that create community fridges, shared tool libraries, neighbor-to-neighbor aid, and direct support systems.",
    bestFor: [
      "Community fridges & gardens",
      "Shared tool and seed libraries",
      "Emergency cash funds",
      "Ride shares & elder care pods",
      "Disaster response networks",
    ],
    howToForm: [
      "Start with one act of care: a fridge, a fund, a free tool shed.",
      "Organize in a group chat, then move to a standing weekly meeting.",
      "Choose a small steward team and rotate responsibilities.",
      "Handle money transparently — use a fiscal host or a public ledger.",
      "Document decisions openly so trust can scale.",
      "Split into neighborhood pods as you grow instead of centralizing.",
      "Connect to the national Mutual Aid Hub so neighbors can find you.",
    ],
    examples: ["Local Mutual Aid Funds", "Community Support Networks"],
    goodToKnow:
      "Mutual aid is solidarity, not charity — everyone gives and everyone can receive. Many collectives never incorporate at all; those that handle larger sums often use fiscal sponsorship from an existing nonprofit.",
  },
  {
    id: "chambers",
    number: "05",
    name: "Chambers of Commerce & Professional Associations",
    nickname: "The Economic Model",
    accent: "green",
    icon: Briefcase,
    summary:
      "Membership organizations that network Black professionals, pool investment capital, train entrepreneurs, and advocate for contracts and minority business opportunities.",
    bestFor: [
      "Buy-Black business directories",
      "Contract & procurement advocacy",
      "Entrepreneur training programs",
      "Professional networking pipelines",
      "Pooled investment & loan circles",
    ],
    howToForm: [
      "Convene 10+ founding businesses or professionals who will pay dues.",
      "Incorporate as a nonprofit and apply for 501(c)(6) business-league status.",
      "Set membership tiers, dues, and concrete member benefits.",
      "Launch programming: networking nights, pitch practice, contracting workshops.",
      "Publish a public buy-Black directory of member businesses.",
      "Advocate with the city and anchor institutions for procurement access.",
      "Partner with banks and CDFIs on capital-readiness programs.",
    ],
    examples: ["Local Black Chambers of Commerce", "National Black MBA Association (NBMBAA)"],
    goodToKnow:
      "A 501(c)(6) chamber can lobby aggressively on behalf of business interests — far more than a charity — and its strength compounds: every new member business makes the network more valuable to the rest.",
  },
];
