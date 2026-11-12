// One illustration per service. Colours and animations live in service-art.css.
// Rule used everywhere: the OUTER <g> carries the SVG transform (position),
// the INNER <g> carries the CSS animation, so the two never fight.

const Frame = ({ label, children }) => (
  <svg className="sv" viewBox="0 0 320 200" role="img" aria-label={label}>
    <rect className="sv-bg" width="320" height="200" />
    {children}
  </svg>
);

/* 1. Rodent control: locked bait station, glue pad, mouse */
const Rodent = () => (
  <Frame label="Mouse approaching a locked bait station and glue pad">
    <rect className="sv-wall" y="40" width="320" height="112" />
    <rect className="sv-skirt" y="140" width="320" height="12" />
    <rect className="sv-ground" y="152" width="320" height="48" />

    <g transform="translate(200 114)">
      <rect className="sv-dark" width="76" height="40" rx="7" />
      <rect className="sv-white" x="10" y="5" width="16" height="7" rx="2" />
      <rect className="sv-black" x="10" y="17" width="26" height="11" rx="3" />
      <circle className="sv-amber" cx="60" cy="22" r="6" />
      <rect className="sv-black" x="57" y="21" width="6" height="7" rx="1" />
    </g>

    <rect className="sv-glue" x="70" y="160" width="64" height="14" rx="3" />

    <g transform="translate(108 124)">
      <g className="sv-creep">
        <path className="sv-tail" d="M6 30c-18 6-26-4-30-14" />
        <ellipse className="sv-mouse" cx="32" cy="26" rx="28" ry="15" />
        <circle className="sv-mouse" cx="62" cy="24" r="10" />
        <circle className="sv-ear" cx="56" cy="13" r="6" />
        <circle className="sv-black" cx="66" cy="22" r="1.8" />
        <circle className="sv-nose" cx="72" cy="26" r="2.2" />
      </g>
    </g>
  </Frame>
);

/* 2. Cockroach and fly control: drain, cockroach, fly, spray */
const CockroachFly = () => (
  <Frame label="Spray can treating a drain with a cockroach and a fly">
    <rect className="sv-ground" y="140" width="320" height="60" />
    <g transform="translate(150 158)">
      <rect className="sv-dark" width="130" height="24" rx="5" />
      <path className="sv-grate" d="M16 4v16M34 4v16M52 4v16M70 4v16M88 4v16M106 4v16" />
    </g>

    <g transform="translate(26 54)">
      <rect className="sv-green" x="0" y="14" width="28" height="64" rx="8" />
      <rect className="sv-green-d" x="6" y="4" width="16" height="12" rx="3" />
      <rect className="sv-dark" x="22" y="0" width="16" height="6" rx="2" />
    </g>
    <g className="sv-puffs">
      <circle cx="80" cy="64" r="9" />
      <circle cx="100" cy="76" r="11" />
      <circle cx="122" cy="68" r="8" />
      <circle cx="116" cy="92" r="10" />
    </g>

    <g transform="translate(154 112)">
      <g className="sv-scurry">
        <ellipse className="sv-roach" cx="34" cy="24" rx="28" ry="14" />
        <circle className="sv-roach-d" cx="66" cy="24" r="8" />
        <path className="sv-leg" d="M20 34l-8 12M34 38l-2 12M48 34l8 12M20 14l-8-12M34 10l-2-12M48 14l8-12M72 20l14-10M72 28l14 4" />
      </g>
    </g>

    <path className="sv-path" d="M214 100c18-44 52-52 76-34" />
    <g transform="translate(262 64)">
      <g className="sv-bob">
        <ellipse className="sv-fly-w" cx="-4" cy="-8" rx="12" ry="6" transform="rotate(-25)" />
        <ellipse className="sv-fly-w" cx="8" cy="-8" rx="12" ry="6" transform="rotate(20)" />
        <ellipse className="sv-black" cx="0" cy="2" rx="9" ry="7" />
        <circle className="sv-red" cx="8" cy="-1" r="2.2" />
      </g>
    </g>
  </Frame>
);

/* 3. Lizard and spider management: wall lizard, spider on a thread, glue trap */
const LizardSpider = () => (
  <Frame label="Lizard on a wall with a glue trap and a spider on a thread">
    <rect className="sv-wall" width="320" height="170" />
    <rect className="sv-ground" y="170" width="320" height="30" />
    <rect className="sv-glue" x="38" y="176" width="84" height="16" rx="3" />

    <g transform="translate(44 74)">
      <g className="sv-sway">
        <path className="sv-lizard-tail" d="M0 52C-14 38 -6 18 8 22" />
        <path className="sv-lizard" d="M8 50C34 24 68 24 96 40C112 48 126 44 138 36" />
        <ellipse className="sv-lizard-h" cx="146" cy="34" rx="14" ry="10" />
        <circle className="sv-black" cx="150" cy="31" r="2" />
        <path className="sv-lizard-leg" d="M40 38l-10 20M70 34l-8 20M100 44l-6 18M120 44l8 16" />
      </g>
    </g>

    <g transform="translate(252 82)">
      <g className="sv-drop">
        <path className="sv-thread" d="M0 -130V0" />
        <circle className="sv-spider" r="11" />
        <circle className="sv-spider" cx="0" cy="-13" r="6" />
        <path className="sv-leg-s" d="M-8 -4l-18-8M-9 2l-20 2M-8 8l-16 12M-6 12l-10 18M8 -4l18-8M9 2l20 2M8 8l16 12M6 12l10 18" />
      </g>
    </g>
  </Frame>
);

/* 4. Fumigation and degasing: sealed stack under a cover, gas rising */
const Fumigation = () => (
  <Frame label="Grain stack sealed under a cover during fumigation">
    <rect className="sv-ground" y="160" width="320" height="40" />

    <g className="sv-bags">
      <rect x="62" y="146" width="48" height="30" rx="6" />
      <rect x="114" y="146" width="48" height="30" rx="6" />
      <rect x="166" y="146" width="48" height="30" rx="6" />
      <rect x="218" y="146" width="48" height="30" rx="6" />
    </g>
    <path className="sv-tarp" d="M56 150V104Q160 40 272 104V150Z" />
    <path className="sv-tarp-l" d="M104 82v68M160 66v84M216 82v68" />

    <g className="sv-gas">
      <circle cx="96" cy="76" r="5" />
      <circle cx="160" cy="44" r="6" />
      <circle cx="226" cy="74" r="5" />
      <circle cx="128" cy="52" r="4" />
      <circle cx="196" cy="52" r="4" />
    </g>

    <g transform="translate(22 108)">
      <rect className="sv-dark" x="14" y="14" width="4" height="52" />
      <path className="sv-amber" d="M16 0l20 36H-4z" transform="translate(0 -2)" />
      <rect className="sv-black" x="14" y="12" width="4" height="12" rx="1.5" />
      <circle className="sv-black" cx="16" cy="29" r="2" />
    </g>

    <g transform="translate(290 36)">
      <g className="sv-float">
        <circle className="sv-green" r="16" />
        <path className="sv-tick" d="M-7 0l5 6 10-12" />
      </g>
    </g>
  </Frame>
);

/* 5. Gap analysis and CAPA: gap in a tin shed, camera, sealant */
const GapAnalysis = () => (
  <Frame label="Gap in a tin shed wall marked for repair with a camera and sealant gun">
    <rect className="sv-tin" y="30" width="320" height="140" />
    <path
      className="sv-tin-l"
      d="M20 30v140M40 30v140M60 30v140M80 30v140M100 30v140M120 30v140M140 30v140M160 30v140M180 30v140M200 30v140M220 30v140M240 30v140M260 30v140M280 30v140M300 30v140"
    />
    <rect className="sv-ground" y="170" width="320" height="30" />

    <rect className="sv-gapdark" x="148" y="88" width="26" height="40" rx="4" />
    <circle className="sv-ring" cx="161" cy="108" r="36" />

    <g transform="translate(161 64)">
      <g className="sv-float">
        <circle className="sv-blue" r="12" />
        <text className="sv-pin" textAnchor="middle" y="5">1</text>
      </g>
    </g>

    <g transform="translate(34 100)">
      <rect className="sv-dark" width="58" height="40" rx="7" />
      <rect className="sv-dark" x="14" y="-8" width="20" height="10" rx="3" />
      <circle className="sv-lens" cx="29" cy="20" r="12" />
      <circle className="sv-black" cx="29" cy="20" r="6" />
      <g className="sv-flash">
        <path className="sv-flash-l" d="M70 6l12-8M72 20h14M70 34l12 8" />
      </g>
    </g>

    <g transform="translate(212 116)">
      <rect className="sv-green" width="62" height="22" rx="5" />
      <rect className="sv-green-d" x="62" y="6" width="16" height="10" rx="2" />
      <rect className="sv-dark" x="-10" y="6" width="12" height="10" rx="2" />
      <path className="sv-bead" d="M-10 11h-24" />
    </g>
  </Frame>
);

/* 6. Monthly reports and audit support: report with falling trend, signed stamp */
const Reports = () => (
  <Frame label="Monthly pest report with a falling trend chart and a verified stamp">
    <rect className="sv-ground" y="172" width="320" height="28" />
    <g transform="translate(116 16)">
      <rect className="sv-paper2" x="14" y="10" width="124" height="150" rx="8" />
      <rect className="sv-paper" width="124" height="150" rx="8" />
      <rect className="sv-green-d" width="124" height="26" rx="8" />
      <path className="sv-axis" d="M16 128h92M16 52v76" />
      <rect className="sv-bar" style={{ "--d": "0s" }} x="22" y="70" width="14" height="58" rx="2" />
      <rect className="sv-bar" style={{ "--d": "0.12s" }} x="44" y="84" width="14" height="44" rx="2" />
      <rect className="sv-bar" style={{ "--d": "0.24s" }} x="66" y="100" width="14" height="28" rx="2" />
      <rect className="sv-bar" style={{ "--d": "0.36s" }} x="88" y="114" width="14" height="14" rx="2" />
      <path className="sv-sign" d="M16 144c8-12 12 6 20-2s10-5 16 0" />
    </g>
    <g transform="translate(86 62)">
      <path className="sv-paper-l" d="M0 0h16M0 12h16M0 24h12" />
    </g>
    <g transform="translate(250 126)">
      <g className="sv-stamp">
        <circle className="sv-stamp-c" r="28" />
        <path className="sv-tick-g" d="M-12 2l9 10 17-20" />
      </g>
    </g>
  </Frame>
);

/* 7. Termite, bed-bug and mosquito control: protected house, termite, mosquito */
const HomePest = () => (
  <Frame label="Protected house with a termite on a beam and a mosquito flying nearby">
    <rect className="sv-ground" y="156" width="320" height="44" />

    <path className="sv-roof" d="M96 98l64-48 64 48z" />
    <rect className="sv-wall2" x="106" y="98" width="108" height="58" />
    <rect className="sv-door" x="124" y="118" width="28" height="38" rx="2" />
    <rect className="sv-win" x="168" y="112" width="32" height="26" rx="2" />

    <g transform="translate(264 70)">
      <g className="sv-float">
        <path className="sv-shield" d="M0 0l26 10v22c0 16-12 26-26 32-14-6-26-16-26-32V10z" />
        <path className="sv-tick" d="M-11 30l8 9 16-20" />
      </g>
    </g>

    <rect className="sv-beam" x="10" y="152" width="82" height="16" rx="3" />
    <path className="sv-beam-l" d="M22 158h22M54 162h28" />
    <g transform="translate(34 140)">
      <g className="sv-creep">
        <ellipse className="sv-termite" cx="0" cy="4" rx="8" ry="6" />
        <ellipse className="sv-termite" cx="14" cy="4" rx="8" ry="6" />
        <circle className="sv-termite-d" cx="26" cy="4" r="6" />
      </g>
    </g>

    <path className="sv-path" d="M34 62c20-24 44-26 62-8" />
    <g transform="translate(96 54)">
      <g className="sv-bob">
        <ellipse className="sv-fly-w" cx="-4" cy="-10" rx="11" ry="5" transform="rotate(-30)" />
        <ellipse className="sv-fly-w" cx="6" cy="-10" rx="11" ry="5" transform="rotate(15)" />
        <ellipse className="sv-black" cx="0" cy="2" rx="12" ry="4" />
        <path className="sv-leg" d="M12 2l14 4" />
        <path className="sv-leg" d="M-6 6l-6 12M0 6v12M6 6l6 12" />
      </g>
    </g>
  </Frame>
);

/* 8. Water tank, carpet and waterproofing: tank with water, drops, carpet roll */
const WaterTank = () => (
  <Frame label="Water tank being cleaned with a rolled carpet and a waterproof roof">
    <defs>
      <clipPath id="sv-tank-clip">
        <rect x="104" y="58" width="92" height="80" rx="6" />
      </clipPath>
    </defs>
    <rect className="sv-ground" y="156" width="320" height="44" />

    <g className="sv-legs">
      <path d="M116 138v22M184 138v22M150 138v22" />
    </g>
    <rect className="sv-tank" x="104" y="58" width="92" height="80" rx="6" />
    <g clipPath="url(#sv-tank-clip)">
      <g className="sv-wave">
        <path className="sv-water" d="M70 96q15 -10 30 0t30 0t30 0t30 0t30 0t30 0t30 0V150H70z" />
      </g>
    </g>
    <ellipse className="sv-tank-top" cx="150" cy="58" rx="46" ry="10" />
    <rect className="sv-tank-lid" x="140" y="42" width="20" height="10" rx="3" />

    <g className="sv-drops">
      <path d="M226 62c6 9 9 14 9 19a9 9 0 01-18 0c0-5 3-10 9-19z" />
      <path d="M254 90c5 8 8 12 8 16a8 8 0 01-16 0c0-4 3-8 8-16z" />
      <path d="M72 70c5 8 8 12 8 16a8 8 0 01-16 0c0-4 3-8 8-16z" />
    </g>

    <g transform="translate(214 128)">
      <rect className="sv-carpet" width="80" height="26" rx="13" />
      <ellipse className="sv-carpet-e" cx="14" cy="13" rx="9" ry="13" />
      <path className="sv-carpet-l" d="M30 6h40M30 13h40M30 20h40" />
    </g>

    <g transform="translate(28 118)">
      <rect className="sv-brush" width="40" height="12" rx="3" />
      <rect className="sv-dark" x="-14" y="4" width="14" height="4" rx="2" />
      <path className="sv-bristle" d="M6 12v8M14 12v8M22 12v8M30 12v8" />
    </g>
  </Frame>
);

export const SERVICE_ART = {
  rodent: Rodent,
  cockroach: CockroachFly,
  lizard: LizardSpider,
  fumigation: Fumigation,
  gap: GapAnalysis,
  reports: Reports,
  homepest: HomePest,
  water: WaterTank,
};

// Maps your existing service titles to an illustration, so servicesData.jsx
// needs no changes. (Or add `art: "rodent"` to a service to override.)
export const ART_BY_TITLE = {
  "Rodent Control": "rodent",
  "Cockroach and Fly Control": "cockroach",
  "Lizard and Spider Management": "lizard",
  "Fumigation and Degasing": "fumigation",
  "Gap Analysis and CAPA": "gap",
  "Monthly Reports and Audit Support": "reports",
  "Termite, Bed-Bug and Mosquito Control": "homepest",
  "Water Tank, Carpet and Waterproofing": "water",
};

export const ServiceArt = ({ name }) => {
  const Art = SERVICE_ART[name];
  return Art ? <Art /> : null;
};