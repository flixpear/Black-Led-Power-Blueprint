export type OrgCategory =
  | "Civil Rights"
  | "Political Power"
  | "Economic Power"
  | "Women & Girls"
  | "Youth & Justice"
  | "Grassroots & Mutual Aid"
  | "Education & Legacy";

export const ORG_CATEGORIES: ("All" | OrgCategory)[] = [
  "All",
  "Civil Rights",
  "Political Power",
  "Economic Power",
  "Women & Girls",
  "Youth & Justice",
  "Grassroots & Mutual Aid",
  "Education & Legacy",
];

export interface Organization {
  name: string;
  focus: string;
  url: string;
  category: OrgCategory;
  since?: string;
}

export const organizations: Organization[] = [
  {
    name: "NAACP",
    focus: "The nation's oldest and largest civil rights organization — join or charter a local branch.",
    url: "https://naacp.org",
    category: "Civil Rights",
    since: "1909",
  },
  {
    name: "National Urban League",
    focus: "Economic empowerment through 90+ local affiliates: jobs, housing, education, health.",
    url: "https://nul.org",
    category: "Civil Rights",
    since: "1910",
  },
  {
    name: "NAACP Legal Defense Fund",
    focus: "The legal arm of the movement — litigation for racial justice, voting rights, and education.",
    url: "https://www.naacpldf.org",
    category: "Civil Rights",
    since: "1940",
  },
  {
    name: "Color Of Change",
    focus: "The largest online racial justice organization — campaigns you can join from your phone.",
    url: "https://colorofchange.org",
    category: "Civil Rights",
    since: "2005",
  },
  {
    name: "National Action Network",
    focus: "Chapters nationwide fighting police misconduct, voter suppression, and economic inequality.",
    url: "https://nationalactionnetwork.net",
    category: "Civil Rights",
    since: "1991",
  },
  {
    name: "Rainbow PUSH Coalition",
    focus: "Rev. Jesse Jackson's coalition for economic justice, corporate accountability, and opportunity.",
    url: "https://rainbowpush.org",
    category: "Civil Rights",
    since: "1971",
  },
  {
    name: "Black Voters Matter",
    focus: "Power-building and voter registration across the Black Belt and beyond — ride the bus to a canvass.",
    url: "https://blackvotersmatterfund.org",
    category: "Political Power",
    since: "2016",
  },
  {
    name: "Fair Fight Action",
    focus: "Georgia-born, nationwide — fighting voter suppression and promoting fair elections.",
    url: "https://fairfight.com",
    category: "Political Power",
    since: "2018",
  },
  {
    name: "When We All Vote",
    focus: "Nonpartisan culture-change for registration — volunteer as a voting squad captain.",
    url: "https://whenweallvote.org",
    category: "Political Power",
    since: "2018",
  },
  {
    name: "BlackPAC",
    focus: "Engaging Black voters and building durable down-ballot political power.",
    url: "https://blackpac.com",
    category: "Political Power",
    since: "2016",
  },
  {
    name: "Higher Heights for America",
    focus: "Investing in Black women's political leadership — training to run, organizing to win.",
    url: "https://www.higherheightsforamerica.org",
    category: "Political Power",
    since: "2011",
  },
  {
    name: "Black Male Voter Project",
    focus: "Sustained, year-round civic engagement built by and for Black men.",
    url: "https://blackmalevoterproject.com",
    category: "Political Power",
    since: "2020",
  },
  {
    name: "National Black Chamber of Commerce",
    focus: "130+ chapters advocating for Black-owned business at every level of government.",
    url: "https://www.nationalbcc.org",
    category: "Economic Power",
    since: "1993",
  },
  {
    name: "U.S. Black Chambers, Inc.",
    focus: "The self-described voice of Black business — access to capital, contracts, and certification.",
    url: "https://usblackchambers.org",
    category: "Economic Power",
    since: "2010",
  },
  {
    name: "National Black MBA Association",
    focus: "25,000+ members — careers, entrepreneurship, and graduate-school pipelines.",
    url: "https://nbmbaa.org",
    category: "Economic Power",
    since: "1970",
  },
  {
    name: "National Bankers Association",
    focus: "The trade voice of Black-owned and minority banks since 1927 — find one to bank with.",
    url: "https://nationalbankers.org",
    category: "Economic Power",
    since: "1927",
  },
  {
    name: "100 Black Men of America",
    focus: "Mentoring networks, economic empowerment, and scholarship programs for Black youth.",
    url: "https://100blackmen.org",
    category: "Economic Power",
    since: "1963",
  },
  {
    name: "Black Girl Ventures",
    focus: "Crowdfunded pitch competitions putting capital behind Black & Brown women founders.",
    url: "https://www.blackgirlventures.org",
    category: "Economic Power",
    since: "2016",
  },
  {
    name: "National Council of Negro Women",
    focus: "Unity of purpose since 1935 — thousands of community-based sections nationwide.",
    url: "https://ncnw.org",
    category: "Women & Girls",
    since: "1935",
  },
  {
    name: "Black Girls CODE",
    focus: "Building the next generation of girls of color in tech — volunteer, mentor, donate.",
    url: "https://www.wearebgc.org",
    category: "Women & Girls",
    since: "2011",
  },
  {
    name: "The Loveland Foundation",
    focus: "Therapy funds and healing-centered resources for Black women and girls.",
    url: "https://thelovelandfoundation.org",
    category: "Women & Girls",
    since: "2018",
  },
  {
    name: "SisterSong",
    focus: "The national reproductive justice collective led by women of color.",
    url: "https://www.sistersong.net",
    category: "Women & Girls",
    since: "1997",
  },
  {
    name: "BYP100",
    focus: "Member-based organization of 18–35-year-old Black activists building abolitionist futures.",
    url: "https://byp100.org",
    category: "Youth & Justice",
    since: "2013",
  },
  {
    name: "Movement for Black Lives",
    focus: "A national network of 150+ Black-led organizations — trainings, actions, and policy tables.",
    url: "https://m4bl.org",
    category: "Youth & Justice",
    since: "2014",
  },
  {
    name: "Dream Defenders",
    focus: "Florida-born youth movement organizing for freedom, safety, and schools that serve us.",
    url: "https://dreamdefenders.org",
    category: "Youth & Justice",
    since: "2012",
  },
  {
    name: "Equal Justice Initiative",
    focus: "Challenging mass incarceration — home of the National Memorial for Peace and Justice.",
    url: "https://eji.org",
    category: "Youth & Justice",
    since: "1989",
  },
  {
    name: "Mutual Aid Hub",
    focus: "The national map of mutual aid — find the fridge, fund, or pod already operating near you.",
    url: "https://mutualaidhub.org",
    category: "Grassroots & Mutual Aid",
    since: "2020",
  },
  {
    name: "Black Lives Matter Grassroots",
    focus: "Local chapters building Black power city by city through campaigns and direct action.",
    url: "https://blacklivesmatter.com",
    category: "Grassroots & Mutual Aid",
    since: "2013",
  },
  {
    name: "Southerners on New Ground (SONG)",
    focus: "Southern, queer-led organizing home working for the liberation of all our people.",
    url: "https://southernersonnewground.org",
    category: "Grassroots & Mutual Aid",
    since: "1993",
  },
  {
    name: "Cooperation Jackson",
    focus: "A living network of worker cooperatives and a community land trust in Jackson, Mississippi.",
    url: "https://cooperationjackson.org",
    category: "Grassroots & Mutual Aid",
    since: "2014",
  },
  {
    name: "Federation of Southern Cooperatives",
    focus: "Black farmer cooperatives, land retention, and cooperative economics across the South.",
    url: "https://www.federation.coop",
    category: "Grassroots & Mutual Aid",
    since: "1967",
  },
  {
    name: "ASALH",
    focus: "Founded by Dr. Carter G. Woodson — the organization that created Black History Month.",
    url: "https://asalh.org",
    category: "Education & Legacy",
    since: "1915",
  },
  {
    name: "UNCF",
    focus: "Scholarships and institutional support for HBCUs and the students who attend them.",
    url: "https://uncf.org",
    category: "Education & Legacy",
    since: "1944",
  },
];
