// Colours come from CSS variables so they follow your theme (see about.css).

export const OperatorArt = () => (
  <svg className="ab-art" viewBox="0 0 480 360" role="img" aria-label="Pest control operator in front of a factory">
    <rect className="ab-bg" width="480" height="360" />
    <circle className="ab-sun" cx="400" cy="70" r="34" />
    <rect className="ab-ground" y="290" width="480" height="70" />

    {/* factory */}
    <rect className="ab-wall" x="40" y="130" width="230" height="160" />
    <path className="ab-roof" d="M30 130l40-40h160l40 40z" />
    <rect className="ab-chimney" x="215" y="50" width="26" height="50" />
    <rect className="ab-door" x="64" y="210" width="52" height="80" />
    <rect className="ab-win" x="146" y="168" width="96" height="54" />
    <path className="ab-win-line" d="M194 168v54M146 195h96" />

    {/* shield */}
    <g className="ab-float">
      <path className="ab-shield" d="M385 120l50 18v38c0 30-22 48-50 62-28-14-50-32-50-62v-38z" />
      <path className="ab-tick" d="M363 178l16 18 32-38" />
    </g>

    {/* operator */}
    <g transform="translate(300 150)">
      <ellipse className="ab-shadow" cx="40" cy="140" rx="46" ry="8" />
      <rect className="ab-leg" x="22" y="96" width="16" height="44" rx="4" />
      <rect className="ab-leg" x="44" y="96" width="16" height="44" rx="4" />
      <rect className="ab-body" x="14" y="40" width="54" height="64" rx="12" />
      <circle className="ab-skin" cx="41" cy="26" r="17" />
      <path className="ab-cap" d="M22 22c2-18 36-18 38 0z" />
      <rect className="ab-cap" x="18" y="20" width="46" height="6" rx="3" />
      {/* sprayer */}
      <rect className="ab-tank" x="-14" y="46" width="26" height="48" rx="8" />
      <path className="ab-hose" d="M12 70c-8 20 6 32 26 20" />
    </g>
  </svg>
);

export const RecordsArt = () => (
  <svg className="ab-art" viewBox="0 0 480 360" role="img" aria-label="Operator and client signing a service record">
    <rect className="ab-bg" width="480" height="360" />
    <rect className="ab-ground" y="290" width="480" height="70" />
    <g transform="translate(150 40)">
      <rect className="ab-paper" width="180" height="230" rx="10" />
      <rect className="ab-head" width="180" height="34" rx="10" />
      <path className="ab-line" d="M20 64h100M20 88h140M20 112h140M20 136h110M20 160h140" />
      <path className="ab-sign" d="M22 200c12-22 20 14 34-8s16-10 26 0 18-14 34-4" />
    </g>
    <g transform="translate(350 190)">
      <circle className="ab-stamp" r="42" />
      <path className="ab-tick" d="M-18 2l13 14 25-30" />
    </g>
  </svg>
);

export const SiteArt = () => (
  <svg className="ab-art" viewBox="0 0 480 360" role="img" aria-label="Clean warehouse with stacked bags">
    <rect className="ab-bg" width="480" height="360" />
    <rect className="ab-ground" y="260" width="480" height="100" />
    <path className="ab-roof" d="M20 120l220-70 220 70z" />
    <rect className="ab-wall" x="40" y="120" width="400" height="140" />
    <rect className="ab-door" x="190" y="170" width="100" height="90" />
    <g className="ab-bags">
      <rect x="60" y="214" width="54" height="46" rx="6" />
      <rect x="120" y="214" width="54" height="46" rx="6" />
      <rect x="84" y="170" width="54" height="46" rx="6" />
      <rect x="306" y="214" width="54" height="46" rx="6" />
      <rect x="366" y="214" width="54" height="46" rx="6" />
      <rect x="336" y="170" width="54" height="46" rx="6" />
    </g>
    <g className="ab-float">
      <circle className="ab-stamp" cx="240" cy="96" r="30" />
      <path className="ab-tick" d="M226 96l10 11 20-24" />
    </g>
  </svg>
);

const ICON_PATHS = {
  record: "M16 8h24l10 10v38H16zM40 8v10h10M24 30h18M24 40h18",
  method: "M32 10v14M32 40v14M10 32h14M40 32h14M32 32m-6 0a6 6 0 1012 0a6 6 0 10-12 0",
  prevent: "M32 8l20 8v16c0 12-8 20-20 24-12-4-20-12-20-24V16zM24 32l6 6 10-12",
  local: "M32 56S14 40 14 26a18 18 0 0136 0c0 14-18 30-18 30zM32 32m-6 0a6 6 0 1012 0a6 6 0 10-12 0",
};

export const ValueIcon = ({ name }) => (
  <svg className="ab-icon" viewBox="0 0 64 64" aria-hidden="true">
    <path
      d={ICON_PATHS[name] || ICON_PATHS.record}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);