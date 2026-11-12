// Flat SVG illustrations for the four steps. Colours come from CSS variables
// so they follow your theme (see process.css). Animations start when the
// parent <li> gets the "is-in" class.

const Frame = ({ children, label }) => (
  <svg
    className="pi"
    viewBox="0 0 220 150"
    role="img"
    aria-label={label}
  >
    <rect className="pi-bg" x="0" y="0" width="220" height="150" rx="14" />
    {children}
  </svg>
);

/* 1. Inspect: factory wall with a gap, magnifier scanning, clipboard */
export const InspectArt = () => (
  <Frame label="Technician inspecting a wall gap with a magnifier">
    <rect className="pi-wall" x="24" y="40" width="120" height="82" rx="4" />
    <rect className="pi-roof" x="16" y="30" width="136" height="14" rx="3" />
    <rect className="pi-door" x="40" y="80" width="26" height="42" rx="2" />
    <rect className="pi-window" x="88" y="62" width="40" height="26" rx="2" />
    <rect className="pi-gap" x="126" y="98" width="14" height="8" rx="2" />
    <g className="pi-scan">
      <circle className="pi-lens" cx="132" cy="102" r="20" />
      <circle className="pi-lens-ring" cx="132" cy="102" r="20" />
      <path className="pi-handle" d="M147 117l22 22" />
    </g>
    <g transform="translate(170 36)">
      <rect className="pi-paper" width="34" height="46" rx="4" />
      <rect className="pi-clip" x="10" y="-4" width="14" height="8" rx="2" />
      <path className="pi-line" d="M7 16h20M7 24h20M7 32h13" />
    </g>
  </Frame>
);

/* 2. Treat: sprayer puffing, bait station, glue pad */
export const TreatArt = () => (
  <Frame label="Spray treatment with a locked bait station and glue pad">
    <rect className="pi-floor" x="0" y="112" width="220" height="38" />
    <g transform="translate(28 46)">
      <rect className="pi-tank" x="0" y="14" width="34" height="52" rx="8" />
      <rect className="pi-cap" x="9" y="6" width="16" height="10" rx="3" />
      <path className="pi-hose" d="M34 30c18 0 20 10 34 10" />
      <rect className="pi-nozzle" x="66" y="35" width="14" height="10" rx="3" />
    </g>
    <g className="pi-spray">
      <circle cx="116" cy="86" r="5" />
      <circle cx="128" cy="78" r="4" />
      <circle cx="130" cy="92" r="6" />
      <circle cx="144" cy="84" r="4" />
      <circle cx="120" cy="96" r="3" />
    </g>
    <g transform="translate(150 92)">
      <rect className="pi-box" width="46" height="26" rx="5" />
      <rect className="pi-slot" x="6" y="9" width="12" height="8" rx="2" />
      <circle className="pi-lock" cx="36" cy="13" r="4" />
    </g>
    <rect className="pi-glue" x="154" y="124" width="38" height="14" rx="3" />
  </Frame>
);

/* 3. Record: signed service slip */
export const RecordArt = () => (
  <Frame label="Signed service record with a verified stamp">
    <g transform="translate(48 18)">
      <rect className="pi-paper" width="108" height="118" rx="6" />
      <rect className="pi-head" width="108" height="20" rx="6" />
      <path className="pi-line" d="M12 36h56M12 48h84M12 60h84M12 72h60" />
      <path className="pi-sign" d="M14 100c8-14 12 8 20-4s10-6 16 0 10-8 20-2" />
      <path className="pi-line" d="M12 106h56" />
    </g>
    <g className="pi-stamp" transform="translate(150 78)">
      <circle className="pi-stamp-ring" r="26" />
      <path className="pi-tick" d="M-11 1l8 9 15-18" />
    </g>
  </Frame>
);

/* 4. Review: trend bars falling, shield */
export const ReviewArt = () => (
  <Frame label="Monthly trend chart showing pest counts falling">
    <path className="pi-axis" d="M32 118h128M32 30v88" />
    <rect className="pi-bar" style={{ "--h": "70px", "--d": "0s" }} x="44" y="48" width="22" height="70" rx="3" />
    <rect className="pi-bar" style={{ "--h": "52px", "--d": "0.12s" }} x="76" y="66" width="22" height="52" rx="3" />
    <rect className="pi-bar" style={{ "--h": "34px", "--d": "0.24s" }} x="108" y="84" width="22" height="34" rx="3" />
    <rect className="pi-bar" style={{ "--h": "16px", "--d": "0.36s" }} x="140" y="102" width="22" height="16" rx="3" />
    <g transform="translate(176 34)">
      <path className="pi-shield" d="M0 0l22 8v18c0 14-10 22-22 28-12-6-22-14-22-28V8z" transform="translate(0 0)" />
      <path className="pi-tick" d="M-9 24l7 8 13-16" />
    </g>
  </Frame>
);