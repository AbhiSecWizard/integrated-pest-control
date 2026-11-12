// Put these exports in ../data/homeData.js (or keep as ../data/aboutData.js).
//
// I only used facts from your documents: Bikaner, your address, phone, email,
// your services and records, and the industrial areas in your service sheet.
// I did NOT invent a founding year, team size, client count or certifications.
// Add them below ONLY if true.

export const COMPANY = {
  name: "Integrated Pest Control",
  address: "D-8, Samta Nagar Extension, Near Basant Vihar Palace Road, Bikaner, Rajasthan 334001",
  phone: "+91 89478 72622",
  phoneHref: "tel:+918947872622",
  email: "integratedpest101@gmail.com",
  web: "ipcbikaner.com",
};

// Add real numbers here when you have them, e.g. ["12+", "years in Bikaner"]
export const ABOUT_STATS = [
  ["Bikaner", "based, local team"],
  ["8", "service lines"],
  ["Every visit", "written and signed"],
  ["Monthly", "trend reports"],
];

export const ABOUT_POINTS = [
  "Treatment matched to each pest, not one spray for everything",
  "A signed record after every visit",
  "Gaps found, photographed and fixed, so pests do not return",
];

export const STORY = [
  "We are a pest management company based in Bikaner. We work with food processing units, warehouses, offices and homes across the city and its industrial areas.",
  "Most pest companies tell you the job is done. We show you. After every visit our operator and your representative sign a record of what was found, what was used and where. At the end of the month you get a trend report so you can see whether things are getting better.",
  "Treatment alone does not fix a pest problem. If rodents keep coming through the same gap in a tin shed, spraying will not stop them. So we log the gap, photograph it, name the cause and agree a fix with a date. That is what keeps your unit clean, and it is what auditors want to see.",
];

export const VALUES = [
  {
    icon: "record",
    title: "Records over promises",
    text: "Service registers, chemical stock logs, fumigation reports and signed slips. If it was done, it is written down.",
  },
  {
    icon: "method",
    title: "The right method for each pest",
    text: "Spraying for cockroaches and flies, locked stations and glue pads for rodents, fumigation for stored grain.",
  },
  {
    icon: "prevent",
    title: "Prevention, not just treatment",
    text: "We find the root cause, whether a gap, a drain or a storage habit, and track the fix until it is closed.",
  },
  {
    icon: "local",
    title: "Local and easy to reach",
    text: "Our office is in Bikaner. Call us and speak to the people who do the work.",
  },
];

export const AUDIENCES = [
  {
    title: "Food factories",
    text: "Dairy, namkeen, papad and other food units where one rodent or fly can fail an audit.",
    items: ["Rodent, lizard and spider programmes", "Gap analysis and CAPA reports", "Monthly trend charts for QA"],
  },
  {
    title: "Warehouses",
    text: "Godowns holding grain and pulses that attract beetles and weevils.",
    items: ["Stack-wise fumigation and degasing", "Dose, quantity and date on every report", "Signed by your warehouse manager"],
  },
  {
    title: "Homes and offices",
    text: "Termites, bed bugs, mosquitoes and cockroaches in everyday spaces.",
    items: ["Termite and bed-bug treatment", "Water tank and carpet cleaning", "Service slip after every visit"],
  },
];

// From your service sheet
export const AREAS = [
  "Karni Industrial Area",
  "Bich Industrial Area",
  "Khara Industrial Area",
  "Karni Nagar Colony",
  "Bikaner city",
];

// Leave empty until you have real people and photos. The section hides itself.
// Example: { name: "Full Name", role: "Founder", photo: "/images/about/name.jpg" }
export const TEAM = [];

/*
PHOTOS TO TAKE (save in /public/images/about/):
  hero.jpg      operator at a client site in uniform (landscape 4:3)
  story.jpg     operator and client signing the service record (4:3)
  site.jpg      a clean warehouse or factory floor after treatment (4:3)
*/