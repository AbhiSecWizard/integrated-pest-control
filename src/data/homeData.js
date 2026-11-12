import {
  TERMITE,
  MOSQUITO,
  COCKROACH,
  RODENT,
  BEDBUG,
  TANK,
  SOFA,
  PROOF,
} from "../shared/ServiceIcons";

export const SERVICES = [
  {
    title: "Termite Control",
    text: "Protect buildings, furniture and stored goods.",
    icon: TERMITE,
  },
  {
    title: "Mosquito Control",
    text: "Spraying for drains, gardens and standing water.",
    icon: MOSQUITO,
  },
  {
    title: "Cockroach Control",
    text: "Kitchens, toilets, drainage and dirty areas.",
    icon: COCKROACH,
  },
  {
    title: "Rodent Control",
    text: "Rodent boxes, glue pads and regular checks.",
    icon: RODENT,
  },
  {
    title: "Bed-Bug Control",
    text: "Treatment for beds, mattresses and furniture.",
    icon: BEDBUG,
  },
  {
    title: "Water Tank Cleaning",
    text: "Overhead and underground tank cleaning.",
    icon: TANK,
  },
  {
    title: "Sofa, Carpet & Mattress Cleaning",
    text: "Deep cleaning for fabric furniture.",
    icon: SOFA,
  },
  {
    title: "Water Proofing",
    text: "Leakage and seepage protection.",
    icon: PROOF,
  },
];

export const SERVICE_OPTIONS = [
  ...SERVICES.map((service) => service.title),
  "Warehouse Fumigation",
  "Factory Pest Programme",
];

export const PROPERTY_OPTIONS = [
  "Home",
  "Shop / Office",
  "Factory / Food unit",
  "Warehouse",
];

export const FEATURES = [
  ["Documented visits", "Area-wise service records"],
  ["Fumigation", "With degassing reports"],
  ["Gap analysis", "Corrective & preventive actions"],
  ["Homes to factories", "One team, every site"],
];

export const FACTORY_POINTS = [
  [
    "Warehouse fumigation & degassing",
    "with stack-wise dosage and dates on a signed report.",
  ],
  [
    "Food-plant programme",
    "covering rodents, flies, cockroaches, lizards and spiders.",
  ],
  [
    "Gap analysis & CAPA",
    "with photo evidence, owners and target dates.",
  ],
];

export const STEPS = [
  ["Inspect", "Survey the site, find pest activity and entry gaps."],
  ["Treat", "Spray, traps, baits or fumigation for the pest at hand."],
  ["Record", "Log every area and get the visit signed."],
  ["Review", "Monthly report and trend analysis for your team."],
];

export const CONTACT_INFO = {
  phone: "+91 89478 72622",
  phoneHref: "tel:+918947872622",
  email: "integratedpest101@gmail.com",
  address:
    "D-8, Samta Nagar Extension, Near Basant Vihar Palace Road, Bikaner, Rajasthan 334001",
};

