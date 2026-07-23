import {
  Landmark,
  BookOpen,
  WashingMachine,
  Salad,
  LandPlot,
  HeartPulse,
  type LucideIcon,
} from "lucide-react";
import type { Accent } from "./models";

export interface PlaybookStep {
  title: string;
  body: string;
}

export interface PlaybookResource {
  name: string;
  url: string;
  body: string;
}

export interface Playbook {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  accent: Accent;
  icon: LucideIcon;
  capital: string;
  timeline: string;
  structure: string;
  effort: "Moderate" | "Advanced" | "Grassroots";
  overview: string[];
  steps: PlaybookStep[];
  funding: { name: string; body: string }[];
  community: string[];
  resources: PlaybookResource[];
  realityCheck: string;
}

export const playbooks: Playbook[] = [
  {
    slug: "community-bank",
    title: "Start a Community Bank or Credit Union",
    shortTitle: "Bank",
    tagline: "Put our deposits to work building our own neighborhoods.",
    accent: "navy",
    icon: Landmark,
    capital: "$12M+ for a new bank · $250K+ can seed a loan fund",
    timeline: "2–4 years (bank) · 6–18 months (loan fund)",
    structure: "FDIC-insured bank, NCUA credit union, or nonprofit CDFI loan fund",
    effort: "Advanced",
    overview: [
      "Fewer than 20 Black-owned banks remain in the United States — down from nearly 50 in 2001 — even though a neighborhood bank does one transformative thing: it turns local deposits into mortgages and small-business loans on its own blocks instead of exporting that capital elsewhere.",
      "There are three proven legal paths, and they are not all equal in difficulty. A de novo bank offers the widest services but the highest capital bar. A credit union is member-owned and more accessible. A CDFI loan fund can start lending with a fraction of the capital and grow into the neighborhood's lender of first resort.",
    ],
    steps: [
      {
        title: "Gather the founding circle",
        body: "Recruit 8–15 organizers with banking, legal, accounting, and organizing experience. Regulators evaluate the character and competence of the organizing group before anything else.",
      },
      {
        title: "Commission a feasibility study",
        body: "Hire a bank-consulting firm to document deposit potential, lending gaps, and a three-year pro forma for your market. This study anchors every application and investor conversation that follows.",
      },
      {
        title: "Choose your charter path",
        body: "Credit unions (member-owned, chartered through the NCUA with a defined field of membership) are the most accessible. CDFI loan funds can begin lending quickly. A de novo bank offers the widest services but the highest bar.",
      },
      {
        title: "Raise the organizing capital",
        body: "De novo banks typically raise $12M–$30M through a community stock subscription offering. Credit unions gather sponsor commitments and member pledges. Loan funds launch on grants and program-related investments from foundations.",
      },
      {
        title: "File charter and insurance applications",
        body: "Banks apply to the OCC or a state banking regulator, plus the FDIC for deposit insurance — and can seek Minority Depository Institution (MDI) designation. Credit unions apply to the NCUA. Expect 12–24 months of review and examiner interviews.",
      },
      {
        title: "Build the compliance backbone",
        body: "Before opening, stand up BSA/AML controls, lending policies, core banking software, and hire a seasoned CEO, CFO, and compliance officer. Examiners must sign off on all of it.",
      },
      {
        title: "Open the doors and anchor the deposits",
        body: "Recruit anchor institutions first — Black churches, foundations, nonprofits, municipalities, and HBCUs can move reserve deposits. Then open local checking, first-time homebuyer loans, and small-business credit lines.",
      },
    ],
    funding: [
      {
        name: "U.S. Treasury CDFI Fund",
        body: "Grants and awards for certified Community Development Financial Institutions serving low-wealth communities.",
      },
      {
        name: "Anchor deposits",
        body: "The #BankBlack strategy: institutions moving reserve deposits is the fastest fuel for Black-owned banks that already exist.",
      },
      {
        name: "Community stock offering",
        body: "De novo banks raise startup capital by selling shares directly to local investors who believe in the mission.",
      },
      {
        name: "Foundation PRIs",
        body: "Program-related investments let foundations seed loan funds with low-interest capital as part of their mission work.",
      },
    ],
    community: [
      "Free financial-literacy classes for teens and first-time buyers",
      "Microloans under $5,000 that build credit instead of extracting fees",
      "No-overdraft basic accounts for unbanked neighbors",
      "Small-dollar emergency loans that undercut the payday-lending trap",
    ],
    resources: [
      {
        name: "National Bankers Association",
        url: "https://nationalbankers.org",
        body: "Trade association of Black-owned and minority-run banks, active since 1927.",
      },
      {
        name: "FDIC Minority Depository Institution Program",
        url: "https://www.fdic.gov/regulations/resources/minority/",
        body: "Federal resources, research, and guidance for MDIs and organizers.",
      },
      {
        name: "Inclusiv",
        url: "https://inclusiv.org",
        body: "The network that helps communities charter and grow community development credit unions.",
      },
      {
        name: "Opportunity Finance Network",
        url: "https://ofn.org",
        body: "The national network of CDFIs — the on-ramp for starting a community loan fund.",
      },
    ],
    realityCheck:
      "The fastest legal path today is rarely a brand-new bank. Start a nonprofit CDFI loan fund to prove the lending model, and organize churches and institutions to move deposits into the Black-owned banks that already exist. Deposit movement is power you can exercise this quarter.",
  },
  {
    slug: "community-library",
    title: "Open a Community Library or Bookstore",
    shortTitle: "Library",
    tagline: "Guard our stories. Grow our readers. Keep knowledge free.",
    accent: "blue",
    icon: BookOpen,
    capital: "$500 for a book drive · $150K+ for a full reading room",
    timeline: "3 months to 2 years",
    structure: "501(c)(3) nonprofit — often fiscally sponsored at first",
    effort: "Moderate",
    overview: [
      "A community library is far more than a room of books. It is free internet access, homework help, GED prep, a cooling center in July, and the one place where a child's reading level and a grandmother's memoir collection are treated with equal seriousness.",
      "The playbook scales: begin with a stewarded book box on a corner, grow into a reading room with regular programming, and build toward an independent lending library or Black-owned bookstore with a nonprofit literacy arm.",
    ],
    steps: [
      {
        title: "Start where you stand",
        body: "Charter a Little Free Library box, run a book drive through your church or barbershop, and host a monthly reading circle. Momentum first — brick and mortar second.",
      },
      {
        title: "Listen before you build",
        body: "Survey neighbors: do they need storytime, GED prep, Wi-Fi and job-search help, or a Black history collection? Let the community write the collection policy.",
      },
      {
        title: "Find a home",
        body: "Approach churches, community centers, CDCs, and vacant-storefront owners about donated or low-rent space — 800 to 2,000 square feet with good foot traffic.",
      },
      {
        title: "Formalize the mission",
        body: "Form a board, incorporate, and secure 501(c)(3) status — or partner with an existing nonprofit as a fiscal sponsor. Join your state library association for training and bulk purchasing.",
      },
      {
        title: "Stock the shelves",
        body: "Combine donated books, publisher grants, book sales, and deaccessioned stock from public library systems. Center Black authors, African diaspora history, and local writers.",
      },
      {
        title: "Program the space",
        body: "Weekly storytime, teen tech hours, SAT and financial-aid clinics, author nights, and an oral-history booth that records neighborhood elders for the archive.",
      },
      {
        title: "Build the funding loop",
        body: "Membership dues, an annual fundraiser, grants from IMLS and state humanities councils, and a Friends-of-the-Library volunteer corps keep the lights on year after year.",
      },
    ],
    funding: [
      {
        name: "IMLS grants",
        body: "The federal Institute of Museum and Library Services funds community libraries and literacy programming.",
      },
      {
        name: "State humanities & arts councils",
        body: "Nearly every state runs literacy and heritage grant programs for small nonprofits.",
      },
      {
        name: "Community foundations",
        body: "Local place-based funders love visible, low-overhead projects like reading rooms.",
      },
      {
        name: "Friends & members",
        body: "Book sales, membership dues, and one signature annual event form the repeatable base.",
      },
    ],
    community: [
      "Barbershop-books-style reading corners placed inside local shops",
      "Seed, tool, and cake-pan lending alongside the books",
      "Summer meal site for kids when school lunch stops",
      "Digital-equity hours: Wi-Fi, printing, and benefits navigation",
    ],
    resources: [
      {
        name: "American Library Association",
        url: "https://www.ala.org",
        body: "Standards, training, and grant directories for library builders.",
      },
      {
        name: "Institute of Museum and Library Services",
        url: "https://www.imls.gov",
        body: "The primary federal funder of community library and archive projects.",
      },
      {
        name: "Barbershop Books",
        url: "https://barbershopbooks.org",
        body: "The proven model for child-friendly reading spaces inside barbershops.",
      },
      {
        name: "Little Free Library",
        url: "https://littlefreelibrary.org",
        body: "The fastest first step: register a stewarded micro-library on your own block.",
      },
    ],
    realityCheck:
      "Do not wait for a building. A single stewarded book box on a busy corner is a library with one shelf — and it is the organizing proof that convinces funders, churches, and landlords to say yes to the reading room.",
  },
  {
    slug: "laundromat",
    title: "Launch a Community Laundromat",
    shortTitle: "Laundromat",
    tagline: "A recession-resistant business that washes clothes and builds wealth.",
    accent: "teal",
    icon: WashingMachine,
    capital: "$200K–$1M+ (acquiring an existing store is cheapest)",
    timeline: "6 to 18 months",
    structure: "For-profit LLC run with a community mission",
    effort: "Moderate",
    overview: [
      "Laundromats are one of the most durable small businesses in America: an essential service with steady cash flow, minimal staffing options, and industry survival rates that most retail businesses would envy.",
      "But a laundromat has something every community institution dreams about — guaranteed weekly foot traffic. Families spend two hours there every week. That dwell time can carry literacy programming, voter registration, local hiring, and a bulletin board that becomes the neighborhood's news wire.",
    ],
    steps: [
      {
        title: "Map the laundry gap",
        body: "Look for renter-dense blocks (40%+ renters) with few machines within a half-mile radius. Walk competitor stores on a Saturday morning and note their machine condition and crowding.",
      },
      {
        title: "Secure the right site",
        body: "Target 1,200–3,000 square feet with parking, visibility, and — the make-or-break factor — adequate water, sewer, gas, and electrical capacity.",
      },
      {
        title: "Raise the capital",
        body: "Mix an SBA 7(a) loan with CDFI small-business lending — precisely what Black-owned banks and loan funds exist to do — plus equipment financing offered by machine distributors.",
      },
      {
        title: "Buy or build",
        body: "Retooling a neglected existing store is usually 30–50% cheaper than new construction. A new build wins on efficiency, layout, and lower utility costs per wash.",
      },
      {
        title: "Choose the machines",
        body: "High-efficiency commercial washers in mixed sizes (20–80 lb), tight dryer ratios, and card or app payment systems so you carry no coins and track every cycle.",
      },
      {
        title: "Open and operate",
        body: "Run unattended with weekend attendants, or staff fully and add wash-dry-fold service — folded laundry, delivery routes, and commercial accounts can double revenue per square foot.",
      },
      {
        title: "Turn it into a hub",
        body: "Add a free book corner and a “Wash & Learn” literacy station, host free-laundry days for families in crisis, hire returning citizens first, and keep a community bulletin board by the door.",
      },
    ],
    funding: [
      {
        name: "SBA 7(a) and 504 loans",
        body: "Government-guaranteed small-business loans available through local lenders for acquisition, build-out, and equipment.",
      },
      {
        name: "CDFI small-business lenders",
        body: "Mission lenders built for first-time Black entrepreneurs — find them through the Opportunity Finance Network.",
      },
      {
        name: "Equipment financing",
        body: "Machine manufacturers and distributors routinely finance equipment against the machines themselves.",
      },
      {
        name: "Local revolving loan funds",
        body: "Many cities and CDCs operate storefront-improvement and corridor-revitalization funds.",
      },
    ],
    community: [
      "Free laundry days, modeled on LaundryCares Foundation events",
      "A literacy and homework corner in partnership with the library playbook",
      "A standing voter-registration and census station",
      "Fair-chance jobs for neighbors returning home",
    ],
    resources: [
      {
        name: "Coin Laundry Association",
        url: "https://www.coinlaundry.org",
        body: "Trade association with store-buying guides, demographic tools, and operator training.",
      },
      {
        name: "U.S. Small Business Administration",
        url: "https://www.sba.gov",
        body: "Loan programs plus free counseling through local SCORE chapters and Small Business Development Centers.",
      },
      {
        name: "LaundryCares Foundation",
        url: "https://laundrycares.org",
        body: "Free-laundry-day playbooks and literacy-in-laundromats programs you can replicate.",
      },
    ],
    realityCheck:
      "This is a real business, not a vibe: utilities, equipment debt, and site selection decide whether it pays you or owns you. Run the numbers with a SCORE mentor and a CDFI loan officer before you fall in love with any storefront.",
  },
  {
    slug: "food-coop",
    title: "Grow a Community Fridge into a Food Co-op",
    shortTitle: "Food Co-op",
    tagline: "Feed the block this month. Own the grocery store this decade.",
    accent: "green",
    icon: Salad,
    capital: "$150 to set a fridge · $1M+ for a full co-op grocery",
    timeline: "Start this weekend · about 5 years to a store",
    structure: "Mutual aid pod → buying club → member-owned cooperative",
    effort: "Grassroots",
    overview: [
      "One in five Black households experiences food insecurity, and the neighborhoods that need groceries most are the ones national chains abandon first. The cooperative ladder answers that in stages, each one legal, tested, and community-owned.",
      "The ladder starts this weekend with a community fridge, grows through a garden and a bulk-buying club, and ends with neighbors owning a full-service grocery together — one member, one vote, profit circulating on the block.",
    ],
    steps: [
      {
        title: "Place the first fridge",
        body: "Get a donated working refrigerator, a host site with power (church, storefront, barbershop), and a simple sign: take what you need, leave what you can.",
      },
      {
        title: "Staff it with love",
        body: "A volunteer pod handles daily cleaning, temperature checks, and stocking; recruit gardeners and grocers to donate surplus on a schedule, not just once.",
      },
      {
        title: "Add a garden and a buying club",
        body: "Turn vacant lots into raised beds, and bulk-buy rice, beans, oil, and flour through a buying club — splitting wholesale cases cuts food costs for every member family.",
      },
      {
        title: "Organize as a cooperative",
        body: "When the buying club outgrows porches, incorporate under your state's cooperative statute. Sell member shares ($100–$200), adopt bylaws, and elect a board: one member, one vote.",
      },
      {
        title: "Site and finance the store",
        body: "Successful co-ops typically raise a third from member equity, a third from community loans, and a third from CDFIs, USDA programs, and crowdfunding.",
      },
      {
        title: "Open with the neighborhood inside",
        body: "Hire locally, stock local growers and Black-owned brands, and reserve a board seat for the fridge volunteers who started the whole thing.",
      },
      {
        title: "Keep the flywheel spinning",
        body: "Profit stays with members, the fridge stays free, and cooking classes, nutrition programs, and youth apprenticeships run out of the store.",
      },
    ],
    funding: [
      {
        name: "Member equity",
        body: "Shares sold to the community itself — ownership is the funding strategy.",
      },
      {
        name: "USDA & Healthy Food Financing",
        body: "Federal programs that fund grocery projects in underserved communities.",
      },
      {
        name: "CDFI loans",
        body: "Mission lenders that understand co-ops — your community-bank playbook pays off here.",
      },
      {
        name: "Food Co-op Initiative",
        body: "Free technical assistance and startup grants for new food co-ops.",
      },
    ],
    community: [
      "Double-the-value SNAP matching on fresh produce",
      "Youth garden apprenticeships with stipends",
      "Senior and elder delivery routes run by volunteers",
      "A free shelf that never charges anyone, right inside the store",
    ],
    resources: [
      {
        name: "Food Co-op Initiative",
        url: "https://www.fci.coop",
        body: "Step-by-step startup support, training, and grants for new food co-ops.",
      },
      {
        name: "NCBA CLUSA",
        url: "https://ncbaclusa.coop",
        body: "The national apex organization for cooperative businesses of every kind.",
      },
      {
        name: "Mandela Grocery Cooperative",
        url: "https://mandelagrocery.com",
        body: "Worker-owned Black grocery in West Oakland — study exactly how they did it.",
      },
      {
        name: "Mutual Aid Hub",
        url: "https://mutualaidhub.org",
        body: "Find the community fridge network already operating near you.",
      },
    ],
    realityCheck:
      "This ladder is proven in real life — community-led efforts like Mandela Grocery in Oakland and Gem City Market in Dayton opened full-service groceries organized exactly this way. The fridge is not a smaller version of the goal. It is step one of the goal.",
  },
  {
    slug: "land-trust",
    title: "Build a Community Land Trust",
    shortTitle: "Land Trust",
    tagline: "Take land off the speculation market — permanently.",
    accent: "gold",
    icon: LandPlot,
    capital: "$50K–$500K+ depending on land and buildings",
    timeline: "1 to 5 years",
    structure: "501(c)(3) nonprofit holding land for the community",
    effort: "Advanced",
    overview: [
      "A community land trust (CLT) buys land and holds it forever. Families buy the homes on that land at affordable prices under a 99-year renewable ground lease, and a resale formula keeps the price affordable for the next family too.",
      "It is one of the strongest legal tools against displacement: as the neighborhood improves and prices rise, CLT residents build equity without being pushed out — and the community, not a speculator, controls what gets built on every parcel.",
    ],
    steps: [
      {
        title: "Define the geography",
        body: "Pick two to five blocks facing displacement pressure. Map vacant lots, tax-delinquent parcels, and buildings the city land bank controls.",
      },
      {
        title: "Convene residents and allies",
        body: "Renters, legacy homeowners, churches, legal aid, and one friendly attorney. Legitimacy with the block is the real collateral for everything that follows.",
      },
      {
        title: "Incorporate as a 501(c)(3)",
        body: "The classic CLT board is tripartite: people who live in CLT homes, other community members, and public-interest representatives — the governed help govern.",
      },
      {
        title: "Acquire the first land",
        body: "Donations, city land-bank transfers, tax-foreclosure purchases, and discounted buys from motivated sellers or institutions with surplus property.",
      },
      {
        title: "Write the ground lease",
        body: "A 99-year renewable lease plus a resale formula: sellers keep a fair share of appreciation while the sale price stays capped to remain affordable for the next buyer.",
      },
      {
        title: "Develop with local hands",
        body: "Build or rehab affordable homes, gardens, and ground-floor commercial space reserved for Black-owned businesses — with local contractors doing the work.",
      },
      {
        title: "Steward it forever",
        body: "Support homeowners, prevent foreclosures, enforce the lease, and keep acquiring. A land trust's power compounds with every parcel it holds.",
      },
    ],
    funding: [
      {
        name: "City land banks & land grants",
        body: "Many municipalities transfer vacant or tax-delinquent parcels to CLTs for a dollar or at deep discount.",
      },
      {
        name: "HOME & CDBG funds",
        body: "Federal block-grant dollars flowing through your city can fund CLT acquisition and construction.",
      },
      {
        name: "Foundation support",
        body: "Place-based foundations frequently capitalize the early acquisition fund.",
      },
      {
        name: "CDFI acquisition loans",
        body: "Mission lenders will lend against land for affordable housing development.",
      },
    ],
    community: [
      "Affordable ground-floor leases reserved for the co-op, the bookstore, and the barbershop",
      "Community gardens and memorial lots held permanently green",
      "Homeowner counseling that keeps families in their homes",
      "A public land map showing every parcel the community has taken off the market",
    ],
    resources: [
      {
        name: "Grounded Solutions Network",
        url: "https://groundedsolutions.org",
        body: "The national hub for community land trusts — model leases, training, and startup guidance.",
      },
      {
        name: "Lincoln Institute of Land Policy",
        url: "https://www.lincolninst.edu",
        body: "Research and technical resources on land trusts and equitable development.",
      },
      {
        name: "Schumacher Center CLT Library",
        url: "https://centerforneweconomics.org",
        body: "The deepest archive of CLT history — including the movement's roots on Black farmland in Georgia.",
      },
      {
        name: "Federation of Southern Cooperatives",
        url: "https://www.federation.coop",
        body: "Half a century of Black land retention and cooperative development across the South.",
      },
    ],
    realityCheck:
      "The first community land trust — New Communities, Inc., founded in 1969 by Black farmers near Albany, Georgia — was built by our people, for our land. CLTs in Atlanta, Oakland, Houston, and Jackson carry that lineage today. Study their governance documents before you file yours.",
  },
  {
    slug: "health-hub",
    title: "Open a Community Health & Wellness Hub",
    shortTitle: "Health Hub",
    tagline: "Healing spaces we own — from garden walks to clinical care.",
    accent: "red",
    icon: HeartPulse,
    capital: "$25K for a wellness studio · $1M+ for a clinic",
    timeline: "6 months to 3 years",
    structure: "501(c)(3), ideally partnered with an existing health center",
    effort: "Advanced",
    overview: [
      "Black communities face the nation's steepest gaps in diabetes, hypertension, maternal health, and untreated mental illness — while having the fewest trusted, welcoming places to address them. The answer is a ladder of care: community wellness first, clinical partnerships second, full services last.",
      "The smartest hubs do not start by hiring doctors. They start with walking clubs, garden-grown nutrition classes, barbershop blood-pressure checks, and therapy funds — then partner with established health centers to bring screenings and clinical care into spaces people actually trust.",
    ],
    steps: [
      {
        title: "Assess, don't assume",
        body: "Run a simple community health needs assessment: what hurts most on your blocks — diabetes, hypertension, maternal health, mental health, gun-violence trauma? Let the data pick your first program.",
      },
      {
        title: "Start with wellness",
        body: "Walking clubs, yoga in the park, nutrition classes built on the co-op garden, and bike programs cost little and build the participation base that funders fund.",
      },
      {
        title: "Bring in clinical partners",
        body: "Partner with the nearest Federally Qualified Health Center or hospital system for monthly screening days, mobile-unit visits, and vaccination drives inside your space.",
      },
      {
        title: "Form the nonprofit and the board",
        body: "Incorporate as a 501(c)(3) with a board that includes local clinicians, residents, and someone who understands medical billing.",
      },
      {
        title: "License what you offer",
        body: "Clinicians must be licensed and insured. Delivering clinical care requires state health-department clinic licensure — or a formal partnership under an existing license.",
      },
      {
        title: "Fund the care",
        body: "Pursue HRSA grants, state public-health funds, and Medicaid credentialing so services can be billed and sustained rather than endlessly grant-chased.",
      },
      {
        title: "Treat the whole person",
        body: "Barbershop blood-pressure checks, therapy-fund partnerships, fresh-food prescriptions, and safe spaces to talk — health is a neighborhood project, not just a clinical one.",
      },
    ],
    funding: [
      {
        name: "HRSA programs",
        body: "Federal Health Resources & Services Administration funding for health centers and underserved-community care.",
      },
      {
        name: "CDC REACH",
        body: "Racial and Ethnic Approaches to Community Health — long-running federal grants for exactly this work.",
      },
      {
        name: "Hospital community-benefit dollars",
        body: "Nonprofit hospitals are required to invest in community health — make them invest in yours.",
      },
      {
        name: "Medicaid billing",
        body: "Once credentialed, billing for covered services turns one-time programs into durable operations.",
      },
    ],
    community: [
      "Barbershop and salon health screenings with trusted local stylists",
      "Therapy scholarships through partners like The Loveland Foundation",
      "Fresh-food prescriptions redeemed at the community co-op",
      "Doula and maternal-health circles for Black mothers",
    ],
    resources: [
      {
        name: "HRSA",
        url: "https://www.hrsa.gov",
        body: "Federal home of community health center programs, workforce grants, and funding opportunities.",
      },
      {
        name: "National Association of Community Health Centers",
        url: "https://www.nachc.org",
        body: "Training and advocacy for the health-center movement — and paths to partnership.",
      },
      {
        name: "CDC REACH",
        url: "https://www.cdc.gov/reach/",
        body: "Federal funding stream dedicated to reducing racial and ethnic health disparities.",
      },
      {
        name: "Roots Community Health Center",
        url: "https://rootsclinic.org",
        body: "Oakland's community-rooted model of culturally responsive care — study their playbook.",
      },
    ],
    realityCheck:
      "Clinical care is heavily regulated for good reason. The proven path: build trust and participation with wellness programming, then let licensed partners deliver care inside your space until you are ready to hire and credential your own staff.",
  },
];
