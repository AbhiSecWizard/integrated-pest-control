// Put these in homeData.js (replace the old SERVICES) or import from here.
// Images: save your own photos in /public/images/services/ using the names below.
// (Use real photos of your team, traps and sites: they convert far better than stock.)

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const SERVICES = [
  {
    title: "Rodent Control",
    image: "/images/services/rodent-control.jpg",
    imageAlt: "Locked rodent bait station placed along a factory wall",
    frequency: "4 visits a month",
    text:
      "Rats and mice chew packaging, contaminate stock and fail audits. We fence your site with numbered, locked bait stations and glue pads, and check every one on schedule.",
    points: [
      "Numbered stations mapped to a site layout",
      "Cake and glue-pad replacement each visit",
      "Damage, missing-bait and catch log per box",
    ],
    icon: (
      <g {...stroke}>
        <path d="M10 40c0-10 8-18 20-18h8c8 0 16 6 16 14 0 6-5 10-12 10H20c-6 0-10-2-10-6z" />
        <circle cx="46" cy="32" r="1.5" />
        <path d="M14 40c-4 2-6 6-4 10" />
      </g>
    ),
  },
  {
    title: "Cockroach and Fly Control",
    image: "/images/services/cockroach-fly.jpg",
    imageAlt: "Technician spraying a drainage area",
    frequency: "4 visits a month",
    text:
      "Toilets, drains and storage areas are where infestations start. Targeted spraying and fly boards keep them out of your processing and raw-material areas.",
    points: [
      "Drain, toilet and dirty-area treatment for cockroaches",
      "Processing, storage and outside-area spraying for flies",
      "Trap weight recorded for monthly trend reports",
    ],
    icon: (
      <g {...stroke}>
        <ellipse cx="32" cy="36" rx="10" ry="14" />
        <path d="M32 22v-8M22 30l-10-6M42 30l10-6M22 42l-10 6M42 42l10 6" />
      </g>
    ),
  },
  {
    title: "Lizard and Spider Management",
    image: "/images/services/lizard-spider.jpg",
    imageAlt: "Glue trap fitted near a gallery ceiling",
    frequency: "2 visits a month",
    text:
      "Lizards and spiders in a food unit are a customer complaint waiting to happen. We treat entry points and fit glue traps, then record every area you cover.",
    points: [
      "Factory outer area, gallery, packing, dispatch and toilets",
      "Chemical spraying plus glue-trap capture",
      "Area-wise dated service record",
    ],
    icon: (
      <g {...stroke}>
        <path d="M12 44c8-2 10-10 18-12s12 2 22-4" />
        <path d="M20 40l-6 8M30 32l-2-8M40 30l6-8M52 28l4 6" />
      </g>
    ),
  },
  {
    title: "Fumigation and Degasing",
    image: "/images/services/fumigation.jpg",
    imageAlt: "Covered grain stacks in a warehouse during fumigation",
    frequency: "Per stack, as scheduled",
    text:
      "Stored grain and pulses attract beetles and weevils. We fumigate sealed stacks at the right dose, then degas and certify the date before stock moves.",
    points: [
      "Dose, stack number and quantity (MT) on every report",
      "Cover use, degasing date and labour recorded",
      "Signed by our operator and your warehouse manager",
    ],
    icon: (
      <g {...stroke}>
        <rect x="14" y="24" width="36" height="26" rx="3" />
        <path d="M22 24v-6a10 10 0 0120 0v6M32 34v8" />
      </g>
    ),
  },
  {
    title: "Gap Analysis and CAPA",
    image: "/images/services/gap-analysis.jpg",
    imageAlt: "Gap on a tin shed wall circled for repair",
    frequency: "Each audit cycle",
    text:
      "We find the gaps pests use to get in: tin sheds, wall joints, pipe openings. Each finding is photographed and logged with a root cause, a fix, an owner and a target date.",
    points: [
      "Photo evidence for every gap",
      "Corrective and preventive action with close-out tracking",
      "Proofing with gap filler and roof sealant",
    ],
    icon: (
      <g {...stroke}>
        <circle cx="28" cy="28" r="14" />
        <path d="M38 38l14 14M22 28h12" />
      </g>
    ),
  },
  {
    title: "Monthly Reports and Audit Support",
    image: "/images/services/reports.jpg",
    imageAlt: "Signed pest control service register",
    frequency: "Every month",
    text:
      "When an auditor asks for proof, you hand it over. You get signed service registers, chemical stock records and a trend report showing what we trapped and where.",
    points: [
      "Signed rodent, lizard and spider service records",
      "Chemical stock and usage register",
      "Pest trend chart for management review",
    ],
    icon: (
      <g {...stroke}>
        <path d="M16 10h24l10 10v34H16z" />
        <path d="M40 10v10h10M24 32h18M24 42h18" />
      </g>
    ),
  },
  {
    title: "Termite, Bed-Bug and Mosquito Control",
    image: "/images/services/home-pest.jpg",
    imageAlt: "Technician treating a skirting board",
    frequency: "On request",
    text:
      "For homes, offices, hotels and godowns. We inspect, treat and give you a signed service slip so you know exactly what was done.",
    points: [
      "Pre- and post-construction termite treatment",
      "Bed-bug and mosquito treatment for rooms and premises",
      "Service slip signed by you and our operator",
    ],
    icon: (
      <g {...stroke}>
        <path d="M32 12l18 8v14c0 10-8 16-18 20-10-4-18-10-18-20V20z" />
        <path d="M24 32l6 6 10-12" />
      </g>
    ),
  },
  {
    title: "Water Tank, Carpet and Waterproofing",
    image: "/images/services/cleaning.jpg",
    imageAlt: "Water tank being cleaned",
    frequency: "On request",
    text:
      "Clean tanks, fresh carpets and dry walls. We handle tank cleaning, sofa, carpet and mattress cleaning, and waterproofing in one visit.",
    points: [
      "Tank cleaning and disinfection",
      "Sofa, carpet and mattress deep cleaning",
      "Waterproofing for leaking roofs and walls",
    ],
    icon: (
      <g {...stroke}>
        <path d="M32 10c10 14 16 22 16 30a16 16 0 01-32 0c0-8 6-16 16-30z" />
      </g>
    ),
  },
];

export const SERVICE_STATS = [
  ["8", "service lines under one team"],
  ["Monthly", "signed reports and trend charts"],
  ["24 hr", "response for urgent infestations"],
  ["Bikaner", "local team, quick site visits"],
];

export const SERVICE_PROMISES = [
  "Trained operators, not casual labour",
  "Chemicals chosen for food-safe premises",
  "Every visit signed and dated",
  "Free site inspection before we quote",
];