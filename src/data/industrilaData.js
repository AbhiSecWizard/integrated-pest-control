import warehouseBefore from "../images/cases/warehouse-before.webp";
import warehouseAfter from "../images/cases/warehouse-after.webp";

import factoryBefore from "../images/cases/factory-before.webp";
import factoryAfter from "../images/cases/factory-after.webp";

import rodentBefore from "../images/cases/rodent-before.webp";
import rodentAfter from "../images/cases/rodent-after.webp";

export const FACTORY_POINTS = [
  [
    "Fumigation with full records.",
    "Dose, stack number, quantity in MT, cover use and degassing date on every report.",
  ],
  [
    "Locked rodent stations.",
    "Numbered boxes mapped to your layout, checked and logged on schedule.",
  ],
  [
    "Gap proofing.",
    "Tin sheds, wall joints and pipe openings sealed, with photo proof of each fix.",
  ],
  [
    "Audit-ready paperwork.",
    "Signed service registers, chemical stock records and a monthly trend report.",
  ],
];

export const CASES = [
  {
    id: "warehouse",
    tab: "Warehouse fumigation",
    title: "Grain stack cleared of beetles and weevils",

    story:
      "A warehouse holding stacked chana bags found live insects in several stacks just before dispatch. We covered and sealed each stack, fumigated at the right dose, then degassed on the scheduled date and handed over a signed report before stock moved.",

    before: warehouseBefore,
    after: warehouseAfter,

    beforeAlt: "Grain bags with visible insect activity",
    afterAlt: "Same stack after fumigation, clean and covered",

    beforeLabel: "Infested stack",
    afterLabel: "Treated and cleared",

    stats: [
      { value: 27, decimals: 0, suffix: " MT", label: "treated in one visit" },
      { value: 7, decimals: 0, suffix: " days", label: "from fumigation to degassing" },
      { value: 1, decimals: 0, suffix: " report", label: "signed by both parties" },
    ],

    points: [
      [
        "Stack-wise records:",
        "Stack number, bag count and quantity noted for every stack.",
      ],
      [
        "Sealed covers:",
        "Gas stays in the stack, so the dose does its job.",
      ],
      [
        "Safe handover:",
        "Degassing date confirmed and signed before stock is moved.",
      ],
    ],
  },

  {
    id: "factory",
    tab: "Food factory",
    title: "Food unit sealed against rodents and lizards",

    story:
      "Rodents and lizards were entering a dairy plant through gaps at the back of the butter section and the condensing plant. We set glue traps, treated for insects, then closed every opening with gap filler and roof sealant, and logged each fix with a target date.",

    before: factoryBefore,
    after: factoryAfter,

    beforeAlt: "Open gap in a tin shed wall",
    afterAlt: "Same gap sealed with filler",

    beforeLabel: "Open entry point",
    afterLabel: "Sealed and logged",

    stats: [
      { value: 5, decimals: 0, suffix: " gaps", label: "found and closed" },
      { value: 100, decimals: 0, suffix: "%", label: "photographed as evidence" },
      { value: 18, decimals: 0, suffix: " days", label: "target to close all actions" },
    ],

    points: [
      [
        "Root cause first:",
        "Each gap is logged with its cause, not just its location.",
      ],
      [
        "Corrective and preventive action:",
        "Traps and spray now, sealing to stop a repeat.",
      ],
      [
        "Owner and date:",
        "A named person and a target date for every fix.",
      ],
    ],
  },

  {
    id: "rodent",
    tab: "Rodent control",
    title: "Rodent activity brought under control",

    story:
      "Droppings and chewed packaging were turning up near the packing area. We placed numbered, locked stations across the site and checked them on a fixed schedule, replacing bait and glue pads and recording every catch.",

    before: rodentBefore,
    after: rodentAfter,

    beforeAlt: "Droppings and chewed packaging near a wall",
    afterAlt: "Clean floor with a locked bait station",

    beforeLabel: "Active rodents",
    afterLabel: "Monitored and clean",

    stats: [
      { value: 28, decimals: 0, suffix: " boxes", label: "mapped and numbered" },
      { value: 4, decimals: 0, suffix: " visits", label: "every month" },
      { value: 0, decimals: 0, suffix: " misses", label: "unlocked or damaged boxes left" },
    ],

    points: [
      [
        "Locked stations:",
        "Safe around food, children and pets.",
      ],
      [
        "Per-box log:",
        "Missing bait, damaged pad, cleaned, locked: all recorded.",
      ],
      [
        "Trend report:",
        "See what was caught and where, every month.",
      ],
    ],
  },
];
